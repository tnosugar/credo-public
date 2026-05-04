/* ==========================================================================
   Credo Legal — Redesign Prototype — Chat Widget
   --------------------------------------------------------------------------
   Self-contained chat drawer + bubble. On DOMContentLoaded, injects its own
   markup at the end of <body>, then wires conversation logic. Any element
   on the page with [data-open-chat] opens the drawer.
   ========================================================================== */

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // Drawer markup — injected on load so per-page HTML doesn't duplicate it.
  // ---------------------------------------------------------------------------
  const DRAWER_HTML = `
    <button class="chat-bubble" id="chat-bubble" aria-label="Open chat">
      <span class="chat-bubble-pulse"></span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    </button>

    <div class="chat-drawer-backdrop" id="chat-backdrop"></div>

    <aside class="chat-drawer" id="chat-drawer" role="dialog" aria-modal="true" aria-labelledby="chat-name">
      <div class="chat-header">
        <div class="chat-avatar" id="chat-avatar">C</div>
        <div class="chat-meta">
          <div class="chat-name" id="chat-name">Credo</div>
          <div class="chat-status" id="chat-status">Usually replies in seconds</div>
        </div>
        <button class="chat-close" id="chat-close-btn" aria-label="Close chat">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
      <div class="chat-body" id="chat-body" aria-live="polite"></div>
      <div class="chat-footer">
        <form class="chat-input-row" id="chat-form" autocomplete="off">
          <textarea class="chat-input" id="chat-input" rows="1" placeholder="Type a message…" aria-label="Your message"></textarea>
          <button type="submit" class="chat-send" id="chat-send" aria-label="Send" disabled>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4 20-7z"/></svg>
          </button>
        </form>
        <div class="chat-takeover" id="chat-takeover">
          <button id="takeover-btn" type="button">Talk to a person from the Credo team</button>
        </div>
      </div>
    </aside>
  `;

  // ---------------------------------------------------------------------------
  // Conversation script — same fields as the existing form, conversational.
  // Pages can pre-populate state.answers.q2_debt_type via window.CREDO_CHAT_PRESET
  // so a service-page visitor lands in the chat with their debt type pre-filled.
  // ---------------------------------------------------------------------------
  const conversation = [
    {
      id: 'q1_situation',
      bot: "Hi — what's bringing you to Credo today?",
      placeholder: "A sentence is fine. We'll take it from there.",
      input: 'free-text'
    },
    {
      id: 'q2_debt_type',
      bot: "Got it. What kind of debt situation are you dealing with?",
      input: 'quick-replies',
      options: [
        'Credit-card debt',
        'Medical bills',
        'Personal or payday loan',
        'Collector harassment',
        'A lawsuit or summons',
        'Wage garnishment',
        'Something else',
        'Not sure yet'
      ]
    },
    {
      id: 'q3_first_name',
      bot: "Thanks. What's your first name?",
      placeholder: 'First name',
      input: 'free-text'
    },
    {
      id: 'q4_email',
      bot: (state) => `Nice to meet you, ${state.q3_first_name || 'there'}. What's the best email to reach you at?`,
      placeholder: 'name@example.com',
      input: 'free-text',
      validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "That doesn't quite look like an email — mind giving it another go?"
    },
    {
      id: 'q5_phone',
      bot: "If you'd like an attorney to call, drop a phone number. Otherwise leave it blank — email works too.",
      placeholder: '(optional)',
      input: 'free-text',
      optional: true
    },
    {
      id: 'q6_timing',
      bot: "When would you like to talk to an attorney?",
      input: 'quick-replies',
      options: [
        'As soon as possible',
        'Within a few days',
        "I'm just exploring"
      ]
    }
  ];

  const closingMessage = (state) => {
    const name = state.q3_first_name || 'thanks';
    const reachByPhone = state.q5_phone && state.q5_phone.trim().length > 5;
    const window = state.q6_timing && state.q6_timing.toLowerCase().includes('soon')
      ? 'within a few hours'
      : state.q6_timing && state.q6_timing.toLowerCase().includes('exploring')
        ? "when you're ready"
        : 'within one business day';
    const lineA = `Got it, ${name}. An attorney from our team will be in touch ${window}${reachByPhone ? ' by phone or email' : ' by email'}.`;
    const lineB = "Until then, here's a short read on the federal law that probably applies to your situation: <a href=\"#rights\" style=\"color: var(--credo-red); text-decoration: underline;\">Your rights under the FDCPA, FCRA, and TILA</a>.";
    return `${lineA}<br><br>${lineB}`;
  };

  // ---------------------------------------------------------------------------
  // Bootstrap
  // ---------------------------------------------------------------------------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Inject drawer markup
    document.body.insertAdjacentHTML('beforeend', DRAWER_HTML);

    // Element refs (after injection)
    const drawer    = document.getElementById('chat-drawer');
    const backdrop  = document.getElementById('chat-backdrop');
    const bubble    = document.getElementById('chat-bubble');
    const body      = document.getElementById('chat-body');
    const form      = document.getElementById('chat-form');
    const input     = document.getElementById('chat-input');
    const send      = document.getElementById('chat-send');
    const avatar    = document.getElementById('chat-avatar');
    const chatName  = document.getElementById('chat-name');
    const chatStatus= document.getElementById('chat-status');
    const closeBtn  = document.getElementById('chat-close-btn');
    const takeoverWrap = document.getElementById('chat-takeover');
    const takeoverBtn  = document.getElementById('takeover-btn');

    // State
    const state = {
      open: false,
      started: false,
      persona: 'bot',
      stepIndex: 0,
      answers: {},
      awaitingInput: null
    };

    // Pre-set answers from page (e.g. service-page visitors arrive with debt type known)
    if (window.CREDO_CHAT_PRESET && typeof window.CREDO_CHAT_PRESET === 'object') {
      Object.assign(state.answers, window.CREDO_CHAT_PRESET);
    }

    // -- Open / close ---------------------------------------------------------
    function openDrawer() {
      drawer.dataset.open = 'true';
      backdrop.dataset.open = 'true';
      state.open = true;
      bubble.hidden = true;
      if (!state.started) {
        state.started = true;
        setTimeout(startConversation, 240);
      } else {
        setTimeout(() => input.focus(), 240);
      }
    }
    function closeDrawer() {
      drawer.dataset.open = 'false';
      backdrop.dataset.open = 'false';
      state.open = false;
      bubble.hidden = false;
    }

    document.addEventListener('click', (e) => {
      const opener = e.target.closest('[data-open-chat]');
      if (opener) { e.preventDefault(); openDrawer(); }
    });
    bubble.addEventListener('click', openDrawer);
    backdrop.addEventListener('click', closeDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.open) closeDrawer();
    });

    // -- Rendering ------------------------------------------------------------
    function appendMsg(text, who = 'bot', { html = false } = {}) {
      const row = document.createElement('div');
      row.className = `msg msg-${who}`;
      const b = document.createElement('div');
      b.className = 'msg-bubble';
      if (html) b.innerHTML = text; else b.textContent = text;
      row.appendChild(b);
      body.appendChild(row);
      scrollBody();
    }
    function appendSystem(text) {
      const row = document.createElement('div');
      row.className = 'msg-system';
      row.textContent = text;
      body.appendChild(row);
      scrollBody();
    }
    function appendQuickReplies(options) {
      const wrap = document.createElement('div');
      wrap.className = 'quick-replies';
      options.forEach(opt => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'quick-reply';
        b.textContent = opt;
        b.addEventListener('click', () => {
          wrap.remove();
          handleUserInput(opt);
        });
        wrap.appendChild(b);
      });
      body.appendChild(wrap);
      scrollBody();
    }
    function appendTyping() {
      const row = document.createElement('div');
      row.className = 'msg msg-bot';
      row.id = '__typing';
      const t = document.createElement('div');
      t.className = 'typing';
      t.innerHTML = '<span></span><span></span><span></span>';
      row.appendChild(t);
      body.appendChild(row);
      scrollBody();
    }
    function removeTyping() {
      const t = document.getElementById('__typing');
      if (t) t.remove();
    }
    function scrollBody() {
      requestAnimationFrame(() => { body.scrollTop = body.scrollHeight; });
    }

    // -- Conversation flow ----------------------------------------------------
    function startConversation() {
      // If preset answers cover the early steps, skip to the next unanswered.
      while (state.stepIndex < conversation.length &&
             state.answers[conversation[state.stepIndex].id] !== undefined) {
        state.stepIndex += 1;
      }
      // If preset includes q2_debt_type but not q1_situation, acknowledge briefly first.
      if (state.stepIndex > 0 && state.answers.q2_debt_type && !state.answers.q1_situation) {
        const dtLabel = state.answers.q2_debt_type;
        appendMsg(`Hi — I see you're here about ${dtLabel.toLowerCase()}. I'll get a few quick details so an attorney can be in touch.`, 'bot');
        setTimeout(askStep, 800);
      } else {
        askStep();
      }
    }

    function askStep() {
      const step = conversation[state.stepIndex];
      if (!step) return finish();

      state.awaitingInput = null;
      const botText = typeof step.bot === 'function' ? step.bot(state.answers) : step.bot;

      appendTyping();
      setTimeout(() => {
        removeTyping();
        appendMsg(botText, 'bot');

        if (step.input === 'quick-replies') {
          state.awaitingInput = 'quick-replies';
          setTimeout(() => appendQuickReplies(step.options), 200);
          input.placeholder = 'Or type your own answer…';
        } else {
          state.awaitingInput = 'free-text';
          input.placeholder = step.placeholder || 'Type a message…';
        }
        setSendEnabled();
        setTimeout(() => input.focus(), 60);
      }, 700 + Math.min(800, botText.length * 12));
    }

    function handleUserInput(value) {
      const step = conversation[state.stepIndex];
      if (!step) return;

      const trimmed = value.trim();
      if (!trimmed && !step.optional) return;

      if (step.validate && trimmed) {
        const result = step.validate(trimmed);
        if (result !== true) {
          appendMsg(trimmed, 'user');
          appendTyping();
          setTimeout(() => {
            removeTyping();
            appendMsg(result, 'bot');
          }, 600);
          clearInput();
          return;
        }
      }

      if (trimmed) {
        appendMsg(trimmed, 'user');
        state.answers[step.id] = trimmed;
      } else if (step.optional) {
        appendMsg('Skip', 'user');
        state.answers[step.id] = '';
      }

      clearInput();
      state.awaitingInput = null;
      setSendEnabled();

      state.stepIndex += 1;
      setTimeout(askStep, 350);
    }

    function finish() {
      appendTyping();
      setTimeout(() => {
        removeTyping();
        appendMsg(closingMessage(state.answers), 'bot', { html: true });
        input.placeholder = 'Reply if you have anything else…';
        state.awaitingInput = 'free-text';
        setSendEnabled();
      }, 900);
    }

    // -- Input handling -------------------------------------------------------
    function clearInput() { input.value = ''; autosize(); setSendEnabled(); }
    function setSendEnabled() {
      const step = conversation[state.stepIndex];
      const optional = step && step.optional;
      send.disabled = !optional && input.value.trim().length === 0;
    }
    function autosize() {
      input.style.height = 'auto';
      input.style.height = Math.min(120, input.scrollHeight) + 'px';
    }
    input.addEventListener('input', () => { autosize(); setSendEnabled(); });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        form.requestSubmit();
      }
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleUserInput(input.value);
    });

    // -- Human handoff (simulated) -------------------------------------------
    takeoverBtn.addEventListener('click', () => {
      if (state.persona === 'human') return;
      takeoverWrap.hidden = true;

      appendTyping();
      setTimeout(() => {
        removeTyping();
        state.persona = 'human';
        avatar.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
        avatar.classList.add('is-human');
        chatName.textContent = 'Sarah · Credo team';
        chatStatus.textContent = 'Live now';

        appendSystem('Sarah from the Credo team has joined the conversation.');

        setTimeout(() => {
          appendTyping();
          setTimeout(() => {
            removeTyping();
            const step = conversation[state.stepIndex];
            if (!step) {
              appendMsg("Hi! I'm jumping in for a moment — looks like we have what we need. Anything else you'd like to share before an attorney calls?", 'bot');
              state.awaitingInput = 'free-text';
              setSendEnabled();
              return;
            }
            const situation = state.answers.q1_situation;
            const debtType = state.answers.q2_debt_type;
            let opener = "Hi! Sorry to interrupt — I saw your conversation come through and wanted to pick it up myself.";
            if (situation) {
              opener = `Hi! Sorry to interrupt — I saw what you wrote about your situation and wanted to take it from here directly.`;
            } else if (debtType) {
              opener = `Hi! Sorry to interrupt — saw you mentioned ${debtType.toLowerCase()}. Wanted to pick this up myself.`;
            }
            appendMsg(opener, 'bot');

            setTimeout(() => {
              const stepText = typeof step.bot === 'function' ? step.bot(state.answers) : step.bot;
              const warmer = warmRephrase(step.id, stepText);
              appendMsg(warmer, 'bot');

              if (step.input === 'quick-replies') {
                state.awaitingInput = 'quick-replies';
                setTimeout(() => appendQuickReplies(step.options), 200);
                input.placeholder = 'Or type your own answer…';
              } else {
                state.awaitingInput = 'free-text';
                input.placeholder = step.placeholder || 'Type a message…';
              }
              setSendEnabled();
            }, 900);
          }, 1100);
        }, 700);
      }, 2200);
    });

    function warmRephrase(stepId) {
      const map = {
        q1_situation: "What's going on, in your own words? No need to be precise.",
        q2_debt_type: "Which one of these matches your situation best?",
        q3_first_name: "Mind sharing your first name?",
        q4_email: "And the best email I can reach you at?",
        q5_phone: "If you'd like a call instead, leave a number — totally optional.",
        q6_timing: "When works for you to talk to an attorney?"
      };
      return map[stepId] || "Could you tell me a bit more?";
    }

    setSendEnabled();
  }
})();
