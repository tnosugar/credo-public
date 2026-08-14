/* Credo Legal: Resources > Templates data. REVIEW DRAFTS: attorney approval required before publishing. */
window.CREDO_TEMPLATES = [

  {
    slug: 'when-a-collector-first-calls',
    title: 'When a collector first calls',
    stage: 2,
    stage_label: 'Internal collections',
    situation: 'A collector reaches you by phone for the first time and you are caught off guard.',
    type: ['script'],
    whenToUse: 'Use this on any first call so you stay calm, gather facts, and avoid saying something that hurts you later. Your goal on this call is only to collect information, not to resolve anything.',
    say: [
      'I am not able to talk about this right now. Please send me everything in writing first.',
      'Can you give me the name of your company, your name, and a mailing address I can send correspondence to?',
      'Who is the original creditor, and what is the account number you are referring to?',
      'I am not confirming anything about this account today. I want the details in writing before I discuss it.',
      'Please treat this call as my request to communicate with me in writing going forward.'
    ],
    dontSay: [
      'That sounds like my account. Admitting the debt is yours can be treated as acknowledgment and may work against you.',
      'I can pay something today. Making or promising a payment can restart the statute of limitations on an old debt.',
      'Here is my bank account or my employer. Never hand over financial or workplace details on an unsolicited call.',
      'You people are a scam and I am done. Losing your temper gives you nothing; stay factual and keep notes of who called and when.'
    ],
    laws: [
      { label: 'FDCPA §1692g', url: '../../rights/fdcpa.html#s1692g' },
      { label: 'FDCPA §1692e', url: '../../rights/fdcpa.html#s1692e' }
    ],
    letter: null,
    sources: [
      { label: 'CFPB: What should I do when a debt collector contacts me?', url: 'https://www.consumerfinance.gov/ask-cfpb/what-should-i-do-when-a-debt-collector-contacts-me-en-1695/' },
      { label: 'CFPB: Know your rights when a debt collector calls', url: 'https://files.consumerfinance.gov/f/documents/cfpb_adult-fin-ed_know-your-rights-when-a-debt-collector-calls.pdf' }
    ]
  },

  {
    slug: 'request-debt-validation',
    title: 'Ask them to validate the debt',
    stage: 3,
    stage_label: 'External collections',
    situation: 'A debt collector has contacted you and you want written proof of what they claim you owe.',
    type: ['script', 'letter'],
    whenToUse: 'Use this within 30 days of the collector\'s first written notice to preserve your strongest rights. Sending a written validation request generally requires the collector to pause collection until they mail you verification.',
    say: [
      'I am requesting written validation of this debt before we go any further.',
      'Please send me verification of the amount, the name of the original creditor, and proof that your company has the right to collect it.',
      'I am sending this request in writing as well so there is a record of it.',
      'Until I receive that validation, please pause collection activity on this account.'
    ],
    dontSay: [
      'I know I owe it, I just want the paperwork. Do not concede the debt; ask them to prove it rather than confirming it is yours.',
      'I will pay as soon as you send the letter. Promising payment can restart the clock and undercuts the whole point of validating first.',
      'Call me every day until it is sorted. Do not invite more calls; put the request in writing and let the record stand.'
    ],
    laws: [
      { label: 'FDCPA §1692g', url: '../../rights/fdcpa.html#s1692g' }
    ],
    letter: {
      title: 'Written validation request',
      body: 'DRAFT: review and fill every [CONFIRM ...] placeholder before sending. Send by a method that gives you proof of mailing.\n\n[CONFIRM your full name]\n[CONFIRM your mailing address]\n[CONFIRM today\'s date]\n\n[CONFIRM collector company name]\n[CONFIRM collector mailing address]\n\nRe: Account reference [CONFIRM account or reference number]\n\nTo whom it may concern:\n\nI am writing about the debt you are attempting to collect. I am requesting that you verify this debt before any further collection activity.\n\nPlease send me the following:\n  1. The amount of the debt and an itemization of the current balance.\n  2. The name and address of the original creditor.\n  3. Documentation showing that your company owns or has the right to collect this debt.\n\nI do not waive any of my rights by sending this letter. Please communicate with me only in writing at the address above.\n\nSincerely,\n[CONFIRM your name]'
    },
    sources: [
      { label: 'CFPB: Debt collection sample letters (I need more information)', url: 'https://www.consumerfinance.gov/consumer-tools/debt-collection/' },
      { label: 'CFPB: What should I do when a debt collector contacts me?', url: 'https://www.consumerfinance.gov/ask-cfpb/what-should-i-do-when-a-debt-collector-contacts-me-en-1695/' }
    ]
  },

  {
    slug: 'i-dont-recognize-this-debt',
    title: '"I don’t recognize this debt"',
    stage: 3,
    stage_label: 'External collections',
    situation: 'A collector is pursuing a debt you do not believe is yours or do not recognize at all.',
    type: ['script', 'letter'],
    whenToUse: 'Use this when the debt may be a mistake, mixed-up identity, or possible fraud. Dispute it clearly and in writing, and ask the collector to verify before doing anything else.',
    say: [
      'I do not recognize this debt and I am disputing it.',
      'I am not confirming that this account belongs to me.',
      'Please send me verification showing why you believe I owe this, including the original creditor and the amount.',
      'I am also disputing this in writing so there is a record.',
      'If this turns out to be identity theft, I will follow up with the additional steps for that.'
    ],
    dontSay: [
      'Maybe it is mine, I am not sure. Any hint of acknowledgment can be used against you; state plainly that you dispute it.',
      'I will just pay it to make it stop. Paying a debt you do not owe can be treated as accepting it and may restart the clock.',
      'Here is my Social Security number so you can check. Never volunteer sensitive identifiers to confirm an account you dispute.'
    ],
    laws: [
      { label: 'FDCPA §1692g', url: '../../rights/fdcpa.html#s1692g' },
      { label: 'FDCPA §1692e', url: '../../rights/fdcpa.html#s1692e' }
    ],
    letter: {
      title: 'Dispute: I do not owe this debt',
      body: 'DRAFT: review and fill every [CONFIRM ...] placeholder before sending. Send by a method that gives you proof of mailing, and keep a copy.\n\n[CONFIRM your full name]\n[CONFIRM your mailing address]\n[CONFIRM today\'s date]\n\n[CONFIRM collector company name]\n[CONFIRM collector mailing address]\n\nRe: Account reference [CONFIRM account or reference number]\n\nTo whom it may concern:\n\nI am disputing this debt in full. I do not recognize it and I do not believe I owe it.\n\nPlease stop collection activity and verify this debt. Send me documentation showing the original creditor, the amount claimed, and why you believe this obligation is mine.\n\nDo not report this account to any credit reporting company as valid while it is in dispute. Please communicate with me only in writing at the address above.\n\nSincerely,\n[CONFIRM your name]'
    },
    sources: [
      { label: 'CFPB: Debt collection sample letters (I do not owe this debt)', url: 'https://www.consumerfinance.gov/consumer-tools/debt-collection/' },
      { label: 'CFPB: What should I do when a debt collector contacts me?', url: 'https://www.consumerfinance.gov/ask-cfpb/what-should-i-do-when-a-debt-collector-contacts-me-en-1695/' }
    ]
  },

  {
    slug: 'tell-them-to-stop-contact',
    title: 'Tell them to stop contacting you',
    stage: 3,
    stage_label: 'External collections',
    situation: 'You want the collector to stop calling and writing to you.',
    type: ['script', 'letter'],
    whenToUse: 'Use this when contact has become unwanted or overwhelming. Once a collector receives your written request to stop, they generally must not contact you again except to confirm they are stopping or to tell you about a specific action such as a lawsuit.',
    say: [
      'I am asking you to stop contacting me about this debt.',
      'I am putting this request in writing so it is on the record.',
      'You may contact me only to confirm that you are stopping, or to tell me about a specific legal action.',
      'Please note the date and time of this request in your file.'
    ],
    dontSay: [
      'Stop calling or I will never pay. Do not tie the request to payment or admit anything; just make the stop-contact request cleanly.',
      'Fine, take a payment and then leave me alone. A payment can restart the statute of limitations and reopens the door to more collection.',
      'Here is my new number in case you need it. Do not hand over fresh contact details when the goal is to end contact.'
    ],
    laws: [
      { label: 'FDCPA §1692c', url: '../../rights/fdcpa.html#s1692c' }
    ],
    letter: {
      title: 'Request to stop contact',
      body: 'DRAFT: review and fill every [CONFIRM ...] placeholder before sending. Send by a method that gives you proof of mailing, and keep a copy. Note: asking a collector to stop contacting you does not erase a debt you owe, and they may still take legal action.\n\n[CONFIRM your full name]\n[CONFIRM your mailing address]\n[CONFIRM today\'s date]\n\n[CONFIRM collector company name]\n[CONFIRM collector mailing address]\n\nRe: Account reference [CONFIRM account or reference number]\n\nTo whom it may concern:\n\nI am requesting that you stop all contact with me about this debt.\n\nUnder the Fair Debt Collection Practices Act, once you receive this letter you may contact me only to confirm that you will stop contacting me, or to notify me of a specific action such as a lawsuit.\n\nPlease honor this request and note the date you received it in your records.\n\nSincerely,\n[CONFIRM your name]'
    },
    sources: [
      { label: 'CFPB: Debt collection sample letters (stop contacting me)', url: 'https://www.consumerfinance.gov/consumer-tools/debt-collection/' },
      { label: 'CFPB: What should I do when a debt collector contacts me?', url: 'https://www.consumerfinance.gov/ask-cfpb/what-should-i-do-when-a-debt-collector-contacts-me-en-1695/' }
    ]
  },

  {
    slug: 'only-contact-my-lawyer',
    title: 'Only contact my lawyer',
    stage: 3,
    stage_label: 'External collections',
    situation: 'You have an attorney and want the collector to deal with them instead of you.',
    type: ['script', 'letter'],
    whenToUse: 'Use this once you have hired a lawyer for this debt. When a collector knows you are represented, they generally must communicate with your attorney rather than with you directly.',
    say: [
      'I am represented by an attorney for this matter.',
      'Please direct all further communication to my lawyer.',
      'My attorney is [CONFIRM attorney name] and can be reached at [CONFIRM attorney contact].',
      'I am confirming this in writing so the request is documented.'
    ],
    dontSay: [
      'My lawyer says I do not owe this, so drop it. Do not argue the merits or characterize your attorney\'s advice; simply redirect contact to counsel.',
      'I will pay you directly to speed this up. Bypassing your own attorney and making a payment can restart the clock and complicate your case.',
      'Call me too, just in case. Do not invite direct contact; the point is to route everything through your lawyer.'
    ],
    laws: [
      { label: 'FDCPA §1692c', url: '../../rights/fdcpa.html#s1692c' }
    ],
    letter: {
      title: 'Notice of legal representation',
      body: 'DRAFT: review and fill every [CONFIRM ...] placeholder before sending. Confirm your attorney\'s details with them first. Send by a method that gives you proof of mailing.\n\n[CONFIRM your full name]\n[CONFIRM your mailing address]\n[CONFIRM today\'s date]\n\n[CONFIRM collector company name]\n[CONFIRM collector mailing address]\n\nRe: Account reference [CONFIRM account or reference number]\n\nTo whom it may concern:\n\nI am represented by an attorney regarding this debt. Please direct all further communication about this account to my attorney and not to me.\n\nAttorney name: [CONFIRM attorney name]\nAttorney address: [CONFIRM attorney mailing address]\nAttorney phone: [CONFIRM attorney phone]\n\nPlease update your records accordingly.\n\nSincerely,\n[CONFIRM your name]'
    },
    sources: [
      { label: 'CFPB: Debt collection sample letters (I have an attorney)', url: 'https://www.consumerfinance.gov/consumer-tools/debt-collection/' },
      { label: 'CFPB: What should I do when a debt collector contacts me?', url: 'https://www.consumerfinance.gov/ask-cfpb/what-should-i-do-when-a-debt-collector-contacts-me-en-1695/' }
    ]
  },

  {
    slug: 'set-contact-terms',
    title: 'Set when & how they contact you',
    stage: 2,
    stage_label: 'Internal collections',
    situation: 'You are willing to hear from the collector but only on your terms.',
    type: ['script', 'letter'],
    whenToUse: 'Use this when the calls come at bad times or too often and you want to limit them without cutting off contact entirely. Collectors generally may not contact you at inconvenient times or places, and there are limits on how frequently they can call.',
    say: [
      'You are contacting me at a time that is not convenient. Please only reach me during [CONFIRM your preferred hours].',
      'The best way to reach me is [CONFIRM your preferred method, for example mail or email].',
      'Please do not call me before 8 in the morning or after 9 at night.',
      'I am putting these instructions in writing so they are on record.'
    ],
    dontSay: [
      'Call whenever, I will pick up if I can. Vague terms invite excessive contact; be specific about times and channels.',
      'I promise to pay by Friday if you ease off. A promise or payment can restart the statute of limitations; keep this only about contact terms.',
      'Here is my work line as a backup. Do not add channels you may later want protected, such as your workplace.'
    ],
    laws: [
      { label: 'FDCPA §1692c', url: '../../rights/fdcpa.html#s1692c' },
      { label: 'Regulation F §1006.6', url: '../laws/regulation-f.html#s1006-6' }
    ],
    letter: {
      title: 'How to contact me',
      body: 'DRAFT: review and fill every [CONFIRM ...] placeholder before sending. Send by a method that gives you proof of mailing, and keep a copy.\n\n[CONFIRM your full name]\n[CONFIRM your mailing address]\n[CONFIRM today\'s date]\n\n[CONFIRM collector company name]\n[CONFIRM collector mailing address]\n\nRe: Account reference [CONFIRM account or reference number]\n\nTo whom it may concern:\n\nI am writing to tell you how and when to contact me about this debt.\n\nPlease contact me only by: [CONFIRM preferred method, e.g. U.S. mail at the address above].\nPlease contact me only during: [CONFIRM preferred days and hours].\nPlease do not contact me: [CONFIRM any times or places that are off-limits, e.g. at work, by phone].\n\nThese instructions do not waive any of my rights. Please update your records and honor these preferences.\n\nSincerely,\n[CONFIRM your name]'
    },
    sources: [
      { label: 'CFPB: Debt collection sample letters (specify how to contact me)', url: 'https://www.consumerfinance.gov/consumer-tools/debt-collection/' },
      { label: 'CFPB: Regulation F §1006.6', url: 'https://www.consumerfinance.gov/rules-policy/regulations/1006/6/' }
    ]
  },

  {
    slug: 'stop-calls-at-work',
    title: 'Stop calls at work',
    stage: 2,
    stage_label: 'Internal collections',
    situation: 'A collector is calling you at your job.',
    type: ['script', 'letter'],
    whenToUse: 'Use this as soon as a collector calls your workplace. Once you tell them your employer does not allow these calls, they generally must stop contacting you at work.',
    say: [
      'I cannot take these calls at work.',
      'My employer does not allow me to receive personal calls like this here.',
      'Please stop contacting me at my workplace.',
      'You can reach me at [CONFIRM your preferred contact] instead, and I am confirming this in writing.'
    ],
    dontSay: [
      'Just call my desk quickly and we will settle it. Do not negotiate on a work call; state that workplace contact must stop.',
      'I can put a payment on a card right now. A payment can restart the statute of limitations and there is no reason to rush it from your desk.',
      'Here is my manager\'s number too. Do not expose coworkers or supervisors to collection contact.'
    ],
    laws: [
      { label: 'FDCPA §1692c', url: '../../rights/fdcpa.html#s1692c' }
    ],
    letter: {
      title: 'Stop contacting me at work',
      body: 'DRAFT: review and fill every [CONFIRM ...] placeholder before sending. Send by a method that gives you proof of mailing, and keep a copy.\n\n[CONFIRM your full name]\n[CONFIRM your mailing address]\n[CONFIRM today\'s date]\n\n[CONFIRM collector company name]\n[CONFIRM collector mailing address]\n\nRe: Account reference [CONFIRM account or reference number]\n\nTo whom it may concern:\n\nMy employer does not permit me to receive calls like this at work. Please stop contacting me at my place of employment, by phone or otherwise.\n\nIf you need to reach me, contact me only by: [CONFIRM preferred method, e.g. U.S. mail at the address above].\n\nPlease update your records and honor this request.\n\nSincerely,\n[CONFIRM your name]'
    },
    sources: [
      { label: 'CFPB: What should I do when a debt collector contacts me?', url: 'https://www.consumerfinance.gov/ask-cfpb/what-should-i-do-when-a-debt-collector-contacts-me-en-1695/' },
      { label: 'CFPB: Know your rights when a debt collector calls', url: 'https://files.consumerfinance.gov/f/documents/cfpb_adult-fin-ed_know-your-rights-when-a-debt-collector-calls.pdf' }
    ]
  },

  {
    slug: 'they-contacted-my-family',
    title: 'They called my family',
    stage: 2,
    stage_label: 'Internal collections',
    situation: 'A collector has been contacting your relatives, friends, or neighbors about your debt.',
    type: ['script'],
    whenToUse: 'Use this when a collector reaches out to people you know. Collectors generally may contact others only to find your address or phone number, and they may not discuss your debt with them or contact them repeatedly.',
    say: [
      'You are not permitted to discuss my debt with other people.',
      'Please stop contacting my family and anyone else about this account.',
      'If you need to reach me, contact me directly at [CONFIRM your preferred contact].',
      'I am keeping a record of who you contacted and when.'
    ],
    dontSay: [
      'Leave a message with my mom and I will call back. Do not authorize third-party contact; direct them to you alone.',
      'I will pay it right now so you stop calling them. A rushed payment can restart the statute of limitations and rewards improper contact.',
      'My sister can vouch that it is my account. Do not confirm the debt or pull others into verifying it.'
    ],
    laws: [
      { label: 'FDCPA §1692c', url: '../../rights/fdcpa.html#s1692c' }
    ],
    letter: null,
    sources: [
      { label: 'CFPB: Can a debt collector contact anyone else about my debt?', url: 'https://www.consumerfinance.gov/ask-cfpb/can-a-debt-collector-contact-my-family-friends-or-employer-about-my-debt-en-1409/' },
      { label: 'CFPB: What should I do when a debt collector contacts me?', url: 'https://www.consumerfinance.gov/ask-cfpb/what-should-i-do-when-a-debt-collector-contacts-me-en-1695/' }
    ]
  },

  {
    slug: 'debt-may-be-too-old',
    title: 'The debt may be too old',
    stage: 3,
    stage_label: 'External collections',
    situation: 'You suspect the debt is past the statute of limitations for a lawsuit.',
    type: ['script'],
    whenToUse: 'Use this when a debt is old and you want to know whether the time limit to sue has passed. Be careful: in many states, making a payment or admitting the debt can restart the clock on an old debt.',
    say: [
      'I want to know the date of my last payment and how old this debt is.',
      'Please confirm in writing whether you believe this debt is within the statute of limitations.',
      'I am not making any payment or promise to pay today.',
      'Send me the account details in writing so I can review the dates.'
    ],
    dontSay: [
      'I will send a little to show good faith. Even a small payment can restart the statute of limitations on a time-barred debt.',
      'Yes, that is my old account. Acknowledging an old debt can revive it in some states; do not confirm it.',
      'Set up a payment plan and I will start next month. Agreeing to pay can reset the clock; do not commit before you know the dates.'
    ],
    laws: [
      { label: 'Statute of limitations', url: '../laws/statute-of-limitations.html' },
      { label: 'FDCPA §1692e', url: '../../rights/fdcpa.html#s1692e' }
    ],
    letter: null,
    sources: [
      { label: 'CFPB: What is a statute of limitations on a debt?', url: 'https://www.consumerfinance.gov/ask-cfpb/what-is-a-statute-of-limitations-on-a-debt-en-1389/' },
      { label: 'CFPB: What should I do when a debt collector contacts me?', url: 'https://www.consumerfinance.gov/ask-cfpb/what-should-i-do-when-a-debt-collector-contacts-me-en-1695/' }
    ]
  },

  {
    slug: 'served-with-a-lawsuit',
    title: 'You’ve been served with a lawsuit',
    stage: 5,
    stage_label: 'Lawsuit',
    situation: 'You have received court papers saying a creditor or collector is suing you over a debt.',
    type: ['script'],
    whenToUse: 'Use this the moment you are served. Do not ignore the papers: there is a deadline to respond, and missing it can lead to a default judgment against you. Talk to an attorney about your options right away.',
    say: [
      'I have been served with a lawsuit and I need to respond by the deadline on the papers.',
      'I want to know the exact date my written answer is due to the court.',
      'I am not admitting the debt; I want to review the complaint and get legal advice first.',
      'Please send any communication about this case in writing to me or to my attorney.'
    ],
    dontSay: [
      'I will just ignore it and hope it goes away. Ignoring a lawsuit can result in a default judgment and wage garnishment.',
      'Fine, I admit I owe it, let us settle on the phone. Do not admit liability before reviewing the complaint and getting advice.',
      'I will pay whatever you say to stop the case. Do not commit to payment terms under pressure; a rushed deal can waive defenses.',
      'Here is my bank information to handle it now. Never share account details in response to a lawsuit; respond through the court instead.'
    ],
    laws: [
      { label: 'FRCP', url: '../laws/frcp.html' },
      { label: 'FDCPA §1692g', url: '../../rights/fdcpa.html#s1692g' }
    ],
    letter: null,
    sources: [
      { label: 'CFPB: What should I do if a debt collector sues me?', url: 'https://www.consumerfinance.gov/ask-cfpb/what-should-i-do-if-a-debt-collector-sues-me-en-1459/' },
      { label: 'CFPB: What should I do when a debt collector contacts me?', url: 'https://www.consumerfinance.gov/ask-cfpb/what-should-i-do-when-a-debt-collector-contacts-me-en-1695/' }
    ]
  },

  {
    slug: 'wage-garnishment-exempt-funds',
    title: 'Garnishment & protected funds',
    stage: 7,
    stage_label: 'Enforcement',
    situation: 'A judgment is being enforced through wage garnishment or a bank levy, and some of your money may be protected.',
    type: ['script'],
    whenToUse: 'Use this when your paycheck or bank account is being garnished. Federal law caps how much of your wages can be taken, and certain federal benefits such as Social Security are generally protected. Ask about exemptions and get legal help quickly.',
    say: [
      'I want to understand how much of my wages can legally be garnished.',
      'Some of the money in my account comes from protected federal benefits, and I want to claim that exemption.',
      'Please tell me the process and deadline for filing a claim of exemption.',
      'Send me the garnishment details in writing so I can review them.'
    ],
    dontSay: [
      'Take whatever you need from my account. Do not waive protections; federal benefits and a share of wages may be exempt.',
      'I admit the whole judgment is correct. Do not concede the judgment amount before checking for errors or exemptions.',
      'Here are my other account numbers too. Never volunteer additional accounts; that only exposes more funds.'
    ],
    laws: [
      { label: 'Wage-garnishment cap §1673', url: '../laws/wage-garnishment-cap.html#s1673' },
      { label: 'Federal benefit protections', url: '../laws/benefit-protection.html#s212-6' }
    ],
    letter: null,
    sources: [
      { label: 'CFPB: Can a debt collector garnish my federal benefits?', url: 'https://www.consumerfinance.gov/ask-cfpb/can-a-debt-collector-garnish-my-federal-benefits-en-1441/' },
      { label: 'U.S. Dept. of Labor: Wage garnishment limits (Title III, CCPA)', url: 'https://www.dol.gov/agencies/whd/garnishment' }
    ]
  },

  {
    slug: 'verify-before-you-pay',
    title: 'Verify before you pay',
    stage: 2,
    stage_label: 'Internal collections',
    situation: 'You are ready to resolve a debt but want to confirm it is legitimate first.',
    type: ['script'],
    whenToUse: 'Use this before you pay anyone. Confirm who you are dealing with, that the debt is real and yours, and get the terms in writing, so you do not pay a scammer or a debt you do not owe.',
    say: [
      'Before I discuss any payment, I need written verification of this debt.',
      'Please confirm your company name, the original creditor, and the exact amount owed in writing.',
      'If we reach any agreement, I want the full terms in writing before I pay anything.',
      'I will not make a payment based on a phone call alone.'
    ],
    dontSay: [
      'I will pay over the phone right now to close it out. Paying before verifying risks paying a scammer or reviving an old debt; get proof and terms in writing first.',
      'Here is my card number to hold my spot. Never give payment or bank details before the debt and the collector are verified.',
      'Yes it is mine, just tell me the total. Do not confirm the debt before you have seen written verification.'
    ],
    laws: [
      { label: 'FDCPA §1692g', url: '../../rights/fdcpa.html#s1692g' }
    ],
    letter: null,
    sources: [
      { label: 'CFPB: What should I do when a debt collector contacts me?', url: 'https://www.consumerfinance.gov/ask-cfpb/what-should-i-do-when-a-debt-collector-contacts-me-en-1695/' },
      { label: 'CFPB: How do I get proof of a debt / debt validation?', url: 'https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-validation-letter-en-2109/' }
    ]
  },

  {
    slug: 'dispute-inaccurate-item',
    title: 'Dispute an inaccurate credit item',
    stage: 8,
    stage_label: 'After resolution',
    situation: 'A collection or debt appears on your credit report that is wrong, paid, or does not belong to you.',
    type: ['script', 'letter'],
    whenToUse: 'Use this after you spot an error on your credit report. You can dispute it with the credit reporting company, which generally must investigate, usually within 30 days, and correct or remove information that cannot be verified.',
    say: [
      'There is an item on my credit report that is inaccurate and I am formally disputing it.',
      'The information is wrong because [CONFIRM reason, for example the debt was paid, is not mine, or the amount is incorrect].',
      'Please investigate this item and correct or remove it.',
      'I am submitting this dispute in writing with copies of my supporting documents.'
    ],
    dontSay: [
      'Just leave it, I do not want to cause trouble. Unchallenged errors stay on your report; disputing is how they get corrected.',
      'I will pay the collector to make the entry disappear. Paying does not guarantee removal and can restart the clock on an old debt; dispute the accuracy instead.',
      'Here are my full account logins so you can check. Never share credentials; a written dispute with copies of documents is enough.'
    ],
    laws: [
      { label: 'FCRA §1681i', url: '../../rights/fcra.html#s1681i' }
    ],
    letter: {
      title: 'Credit report dispute',
      body: 'DRAFT: review and fill every [CONFIRM ...] placeholder before sending. Send to the credit reporting company by a method that gives you proof of mailing, and include copies (not originals) of supporting documents.\n\n[CONFIRM your full name]\n[CONFIRM your mailing address]\n[CONFIRM today\'s date]\n\n[CONFIRM credit reporting company name]\n[CONFIRM credit reporting company dispute address]\n\nRe: Dispute of inaccurate information, [CONFIRM your name], report or file number [CONFIRM report/confirmation number]\n\nTo whom it may concern:\n\nI am disputing information on my credit report that is inaccurate.\n\nDisputed item: [CONFIRM account name and number as shown on the report]\nWhy it is inaccurate: [CONFIRM reason, e.g. this account is not mine / was paid on (date) / shows the wrong balance]\n\nPlease investigate this item, and correct or delete it if it cannot be verified. I have enclosed copies of documents that support my dispute.\n\nPlease send me a written description of the outcome of your investigation.\n\nSincerely,\n[CONFIRM your name]'
    },
    sources: [
      { label: 'CFPB: How do I dispute an error on my credit report?', url: 'https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-on-my-credit-report-en-314/' },
      { label: 'CFPB: Debt collection: check your credit reports', url: 'https://www.consumerfinance.gov/consumer-tools/debt-collection/' }
    ]
  }

];
