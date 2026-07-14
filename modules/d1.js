/* CISSP deep learning modules — Domain 1. Loaded on demand by index.html.
   Each module follows the 19-section template. Content marked "additional" is
   study doctrine, not official ISC² outline text — see the OFFICIAL section. */
window.CISSP_MODULES = window.CISSP_MODULES || {};

CISSP_MODULES["1.9"] = {
  title: "Understand and apply risk management concepts",
  simple:
    "Risk management is the organized way an organization decides which bad things are worth worrying about, how much, and what to do about each one — <b>before</b> they happen. You figure out what could go wrong, how likely it is and how badly it would hurt, and then you choose to reduce it, hand the financial impact to someone else, avoid the activity entirely, or knowingly live with it. The whole point is to spend limited money and effort on the risks that matter most instead of chasing every possible threat. You never make risk zero — you bring it down to a level the business is willing to accept.",
  deep: [
    "<b>Why it exists.</b> Threats are effectively infinite and budgets are not. Without a repeatable, defensible process you would spend on whatever felt scary most recently. Risk management is the discipline that turns a chaotic threat landscape into a ranked, business-justified list of decisions. Crucially, it is the <i>translation layer</i> between security and the business: it converts “the VPN is unpatched” into “this is a $X expected annual loss that you, the owner, must reduce or accept.” Security does not exist to eliminate risk; it exists to keep risk within an acceptable level.",
    "<b>When it is used.</b> Continuously — not once a year. It runs when a new system is built (NIST RMF: categorize → select controls), during mergers and acquisitions, before any control is purchased, at audit time, after every incident, and in annual strategic planning. A risk assessment is the input to essentially every treatment and spending decision in the program.",
    "<b>Who is responsible.</b> This is the single most tested idea. <b>Senior management / the business risk owner OWNS the risk and is the only party who can formally ACCEPT residual risk.</b> The CISO and the security team <i>advise, analyze, and recommend</i> — they do not own or accept business risk. Data owners and system owners assess and treat risk within their scope. Custodians and IT <i>implement</i> mitigations but never accept risk. The board holds ultimate accountability (governance). Everyone in the organization participates in identifying risk.",
    "<b>Common misconceptions.</b> That risk, threat, and vulnerability are the same thing (they are not — see Confusing Pairs). That you can eliminate risk (you reduce it to <i>residual</i> risk). That the CISO or a sysadmin can “accept” risk (only the business owner can). That buying a tool is risk management (a tool is one possible <i>mitigation</i> chosen only after analysis). That quantitative analysis is always “better” than qualitative (they answer different questions). That more controls is always better (a control must cost less than the loss it prevents).",
    "<b>Relationship to governance.</b> Governance sets the <i>risk appetite</i> and <i>tolerance</i>, assigns ownership, and demands reporting. Risk management operates <i>inside</i> those boundaries and reports upward through the risk register and key risk indicators. Governance = direction and accountability; risk management = the engine that carries it out and feeds it evidence.",
    "<b>Relationship to the rest of risk management.</b> The lifecycle is Identify → Analyze/Assess → Treat → Monitor → Report → Improve. It is fed by the Business Impact Analysis (1.7, which supplies impact and recovery targets), threat modeling (1.10, which enriches identification), and supply-chain risk management (1.11).",
    "<b>Relationship to other domains.</b> Risk is the connective tissue of the CBK. D2 asset classification tells you an asset’s value and therefore its impact. D3 selects and engineers the controls that mitigate. D6 assessment and audit measure whether those controls actually work, which is what defines <i>residual</i> risk. D7 operations run the mitigations and respond to <i>realized</i> risk (incidents). D8 secure development reduces software and supply-chain risk. Every domain either identifies, treats, tests, or operates a risk decision.",
    "<b>How ISC² expects you to think.</b> Think like a risk manager advising senior leadership, not like an engineer reaching for a tool. On “what do you do FIRST” questions the intended order is almost always: understand the risk and its <i>business impact</i> and identify the <i>owner</i> → then choose a proportionate treatment → technology comes last. Never jump straight to a firewall or a patch. Remember that only management accepts residual risk, treatments must be cost-justified, and the “best” answer is the one that is risk-based, proportionate, documented, and business-aligned."
  ],
  objective:
    "Risk management is the continuous, disciplined process of identifying, analyzing, treating, and monitoring risk so the organization keeps it within an acceptable (residual) level that senior management formally owns.",
  key:
    "You never eliminate risk — you reduce it to a level management is willing to sign for.",
  realWorld:
    "A retail bank is launching mobile check deposit. The team identifies the assets (customer PII, funds, the app, the APIs), the threats (account takeover, mobile malware, API abuse) and the vulnerabilities (weak MFA, unvalidated inputs). They quantify fraud exposure with real data: Asset Value × Exposure Factor gives a Single Loss Expectancy, and multiplying by the Annualized Rate of Occurrence yields an Annualized Loss Expectancy the CFO understands. Reputational and regulatory risk go on a qualitative High/Medium/Low heat map. Treatments are blended: <b>mitigate</b> with device binding, step-up MFA and fraud analytics; <b>transfer</b> part of the fraud loss via cyber-insurance and merchant agreements; <b>accept</b> a small residual with the product owner’s signed memo; and <b>avoid</b> the riskiest edge case by capping deposit limits at launch. Fraud rate and chargeback KRIs are monitored and reported to the risk committee. The CISO recommends the package; the line-of-business risk owner accepts the residual risk.",
  examScenario:
    "A newly hired security manager at a hospital finds a legacy medical-imaging system that holds PHI, cannot be patched (the vendor will not support it), and is reachable from the general clinical network. Replacement is nine months away, clinicians depend on it every day, and this quarter’s budget is nearly spent. Which action should the manager take FIRST? Weigh: assessing the business impact and engaging the risk owner; segmenting/isolating the system; buying a new security appliance; or simply accepting the risk. (Decide before reading the answer sections below — the exam is testing sequence and ownership, not product knowledge.)",
  analogy:
    "Risk management is triage in a busy emergency room. You cannot treat every patient at once with unlimited doctors, so you rapidly assess how severe and how likely each case is, treat the most critical first, stabilize what you can, refer some patients elsewhere (transfer), and consciously decide which minor complaints just get watched (accept). You manage outcomes with finite resources — you do not cure everyone, and trying to would let the truly critical patients die.",
  traps: [
    "Calling the attacker a “vulnerability.” The attacker is the <b>threat/threat agent</b>; the weakness is the vulnerability; the pairing’s likelihood×impact is the risk.",
    "Jumping to a technical control (patch, firewall, tool) before assessing impact and identifying the owner — the classic “technician” distractor. On ‘FIRST’ questions, analysis and ownership precede technology.",
    "Assuming the CISO or a sysadmin “accepts” the risk. Only the business risk owner / senior management can accept residual risk.",
    "Choosing “eliminate the risk.” You reduce to residual risk; total elimination is really <i>avoidance</i> (dropping the function) and is rarely BEST unless the impact is genuinely intolerable.",
    "Mixing ALE (per <b>year</b>) with SLE (per <b>event</b>), or forgetting that ARO can be a fraction (e.g., 0.1 = once per decade).",
    "Treating insurance (transfer) as removing accountability. Transfer moves the <i>financial impact</i>; the organization still owns the risk and the duty of care.",
    "Currency or formulas in the stem → quantitative; High/Medium/Low ratings → qualitative. Do not mislabel them.",
    "Swapping inherent (before controls) and residual (after controls) risk.",
    "Recommending the control that ‘reduces risk the most’ without checking it is cost-justified. If the control costs more than the loss it prevents, it is the wrong answer."
  ],
  terms: [
    { t: "Asset (Asset Value, AV)", def: "Anything of value the organization protects, and its monetary worth.", purpose: "Sets the impact baseline for every calculation.", diff: "The thing at risk — not the threat or the weakness.", exam: "AV feeds SLE (SLE = AV × EF)." },
    { t: "Threat", def: "A potential cause of an unwanted incident.", purpose: "Identifies WHAT could act against you.", diff: "The event/actor, not the weakness it uses.", exam: "Never label a threat as a vulnerability." },
    { t: "Threat agent / actor", def: "The entity that carries out a threat (person, group, malware, nature).", purpose: "Distinguishes the actor from the action.", diff: "‘Threat’ is the event; ‘agent’ is who/what causes it.", exam: "Useful when a stem separates the two." },
    { t: "Vulnerability", def: "A weakness that a threat can exploit.", purpose: "Identifies WHERE you are exposed.", diff: "A flaw, not an actor or an outcome.", exam: "Threat × vulnerability is what creates risk." },
    { t: "Risk", def: "The likelihood that a threat exploits a vulnerability, times the resulting impact.", purpose: "The prioritization currency of the whole program.", diff: "A product of likelihood and impact — not either alone.", exam: "If either likelihood or impact is zero, risk is zero." },
    { t: "Inherent vs residual risk", def: "Inherent = risk before controls; residual = risk remaining after controls.", purpose: "Shows what your controls actually bought.", diff: "Timing relative to controls.", exam: "Only management accepts <b>residual</b> risk." },
    { t: "Exposure Factor (EF)", def: "The percentage of an asset’s value lost in a single event.", purpose: "Scales AV to a realistic single-event loss.", diff: "A percentage, not a dollar figure.", exam: "SLE = AV × EF." },
    { t: "Single Loss Expectancy (SLE)", def: "The expected monetary loss from one occurrence.", purpose: "Per-event cost.", diff: "One event, not annualized.", exam: "SLE = AV × EF; then ALE = SLE × ARO." },
    { t: "Annualized Rate of Occurrence (ARO)", def: "How many times per year the event is expected.", purpose: "Adds the frequency dimension.", diff: "Can be fractional (0.5 = once every two years).", exam: "A favorite spot for arithmetic slips." },
    { t: "Annualized Loss Expectancy (ALE)", def: "Expected yearly loss from a risk.", purpose: "Justifies annual control spend.", diff: "Annual figure, unlike SLE.", exam: "ALE = SLE × ARO; compare to annual control cost." },
    { t: "Risk appetite / tolerance / capacity", def: "Appetite = risk the org strategically wants; tolerance = acceptable deviation per objective; capacity = the maximum it can absorb and survive.", purpose: "Defines the boundary treatments must respect.", diff: "Want vs allowed-deviation vs hard-limit.", exam: "Capacity is a hard ceiling; appetite must fit inside it." },
    { t: "Safeguard / countermeasure / control", def: "A measure that reduces risk (preventive, detective, or corrective).", purpose: "The mechanism of mitigation.", diff: "Classify by the FUNCTION it performs in the scenario.", exam: "One control can serve several functions." },
    { t: "Cost-benefit (control value)", def: "Value = (ALE before − ALE after) − annual control cost.", purpose: "Ensures controls are economically justified.", diff: "Not ‘reduce the most’ — reduce most cost-effectively.", exam: "A control costing more than it saves is wrong." },
    { t: "Risk register", def: "The documented list of risks with owners, treatments, and status.", purpose: "The system of record and reporting artifact.", diff: "A living document, not a one-time report.", exam: "Evidence auditors and management review." },
    { t: "Key Risk Indicator (KRI)", def: "A forward-looking metric that warns risk is rising.", purpose: "Early warning for monitoring.", diff: "KPI measures performance already achieved; KRI predicts risk.", exam: "‘Early warning’ wording → KRI." }
  ],
  pairs: [
    { t: "Threat vs Vulnerability vs Risk", def: "Threat = potential cause of harm; vulnerability = the weakness it exploits; risk = likelihood × impact of that pairing.", similar: "All three describe how harm could occur and are inputs to the same assessment.", diff: "Threat is the actor/event, vulnerability is the flaw, risk is the calculated exposure.", clue: "‘Attacker/hacker/nature’ → threat; ‘unpatched/misconfig’ → vulnerability; ‘likely + costly’ → risk.", trick: "T×V = R: a Threat times a Vulnerability produces Risk.", ex: "Ransomware crew (threat) + unpatched VPN (vulnerability) = probable costly outage (risk)." },
    { t: "Inherent vs Residual risk", def: "Inherent = before controls; residual = what remains after controls.", similar: "Both measure the same risk on the same scale.", diff: "Timing relative to the controls you applied.", clue: "‘After we deployed X, what’s left’ → residual.", trick: "Residual is the ‘residue’ left in the cup after controls drain most out.", ex: "App exposure before a WAF = inherent; exposure after WAF + MFA = residual (which management signs off)." },
    { t: "Risk acceptance vs Risk transfer", def: "Acceptance = knowingly living with the risk, documented; transfer = shifting the financial impact via insurance or contract.", similar: "Both are valid treatments that leave the underlying risk in place.", diff: "Acceptance keeps the money exposure in-house; transfer moves it out — but never moves accountability.", clue: "‘Insurance/contract’ → transfer; ‘signed memo, live with it’ → accept.", trick: "Transfer moves the bill, not the blame.", ex: "A signed risk-acceptance memo vs a cyber-insurance policy." },
    { t: "Qualitative vs Quantitative analysis", def: "Qualitative uses ratings/heat maps (fast, subjective); quantitative uses money math (AV, EF, SLE, ARO, ALE).", similar: "Both rank and prioritize risk; most programs blend them.", diff: "Words/colors vs currency/formulas.", clue: "Any ‘$’ or formula → quantitative; High/Med/Low → qualitative.", trick: "Quantitative has a ‘quantity’ (a number of dollars).", ex: "A red/amber/green matrix vs ‘ALE = $50k/yr.’" },
    { t: "Mitigate vs Avoid", def: "Mitigate = reduce likelihood or impact with controls; avoid = eliminate the risk by not doing the activity.", similar: "Both lower exposure and are formal treatment options.", diff: "Mitigation keeps the function and lowers risk; avoidance drops the function entirely.", clue: "‘Stop offering / discontinue’ → avoid; ‘add a control’ → mitigate.", trick: "Avoid = walk away; Mitigate = make it safer.", ex: "Adding MFA (mitigate) vs cancelling the risky feature (avoid)." }
  ],
  cross: [
    { d: "D1 → Governance & BIA", why: "Governance sets the risk appetite and ownership that bound every risk decision; the BIA (1.7) supplies the impact and recovery targets (MTD/RTO/RPO) your analysis depends on." },
    { d: "D2 → Asset classification", why: "You cannot estimate impact without knowing an asset’s value and sensitivity; classification sets the AV and impact severity that drive the numbers." },
    { d: "D3 → Control selection & authorization", why: "Mitigation is realized by engineering and selecting controls; certification/accreditation (an ATO) is literally management accepting residual risk to operate." },
    { d: "D6 → Assessment & audit", why: "Testing measures whether controls actually work, which is exactly what determines the residual risk you report and management signs." },
    { d: "D7 → Operations & incident response", why: "Operations run the mitigations day-to-day and handle realized risk (incidents); monitoring produces the KRIs that feed continuous risk measurement." },
    { d: "D8 → Secure development & SCA", why: "Building security into the SDLC and inspecting third-party components reduces software and supply-chain risk before it ever reaches production." }
  ],
  frameworks: [
    { fw: "ISO/IEC 27001 & 27005", how: "An ISMS is fundamentally risk-driven: 27005 defines the risk-management process, and the Statement of Applicability justifies each selected control by reference to the risk assessment." },
    { fw: "NIST CSF", how: "The framework is organized around risk outcomes; the ‘Identify’ function is asset and risk identification, and CSF 2.0 adds a ‘Govern’ function that formalizes risk appetite and roles." },
    { fw: "NIST 800-53 / RMF (800-37) / 800-30", how: "The RMF steps (Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor) ARE risk management operationalized; ‘Authorize’ is the official accepting residual risk (an ATO). 800-30 is the how-to for the assessment itself; 800-39 covers managing risk enterprise-wide." },
    { fw: "COBIT", how: "An enterprise governance framework; process APO12 ‘Managed Risk’ ties IT risk to business objectives and reporting." },
    { fw: "SABSA", how: "A business-driven, risk-and-opportunity architecture; its contextual layer starts from business risk and traces controls back to business needs." },
    { fw: "PCI DSS", how: "Requirement 12 mandates a formal, at-least-annual risk assessment, and several controls permit a risk-based (customized) approach." },
    { fw: "SOC 2", how: "Built on COSO; the security common criteria require a documented risk-assessment and risk-mitigation process as evidence for the auditor." },
    { fw: "FedRAMP", how: "An RMF-based authorization model for cloud services where an Authorizing Official accepts the residual risk of the offering on behalf of agencies." },
    { fw: "Zero Trust", how: "A risk-reduction strategy, not a product: by assuming breach and verifying every request continuously, it lowers the likelihood and blast radius (impact) of lateral movement." }
  ],
  impl: {
    people: "A named business <b>risk owner</b> (senior exec) who accepts residual risk; the CISO / risk manager who facilitates and recommends; data and system owners; control owners; internal audit for independent assurance; and a cross-functional risk committee.",
    process: "Establish context and appetite → inventory and classify assets → identify threats and vulnerabilities → analyze (qualitative + quantitative) → evaluate against appetite → treat (avoid / mitigate / transfer / accept) → document in the risk register with owners and due dates → monitor via KRIs and continuous monitoring → report to the committee and board → review and improve at least annually and on significant change.",
    tech: "A GRC / risk-register platform, vulnerability management, threat intelligence, an asset inventory / CMDB, SIEM and continuous-monitoring tooling for KRIs, and cyber-insurance as a transfer mechanism.",
    evidence: "A maintained risk register with owners and treatment decisions; signed risk-acceptance memos <i>with expiry dates</i>; assessment and penetration-test reports; KRI dashboards; risk-committee minutes; control-test results; and insurance policies.",
    mistakes: "A risk register that is never reviewed; acceptances with no expiry or signed by the wrong person; treating assessment as a one-time checkbox; no linkage between risk and control spend; letting IT ‘accept’ business risk; ignoring residual risk after go-live; and either gut-feel qualitative ratings or falsely precise quantitative numbers presented as fact."
  },
  q1: {
    stem: "A manufacturer’s risk assessment identifies an internet-reachable legacy SCADA gateway with a critical, unpatchable vulnerability. Patching would void the vendor’s safety certification, and production cannot be stopped. What should the security professional recommend FIRST?",
    opts: [
      { t: "Immediately disconnect the gateway from all networks.", ok: false, why: "This is avoidance applied reflexively. It likely halts production and could create a safety issue, so it is disproportionate to the assessed risk and is not a measured first step." },
      { t: "Apply a documented compensating control (network segmentation plus enhanced monitoring) and record the residual risk for the risk owner’s formal acceptance.", ok: true, why: "When the ideal control (patching) is infeasible, doctrine is a proportionate compensating control combined with formal residual-risk acceptance by management. It protects safety and uptime, is risk-based, and is properly governed and documented." },
      { t: "Purchase and deploy a next-generation firewall this week.", ok: false, why: "This jumps to buying technology before a governed risk decision. Procurement is not a ‘first’ action, the spend may not be justified, and it skips owner engagement and documentation." },
      { t: "Accept the risk and move on.", ok: false, why: "Acceptance may ultimately be part of the answer, but undocumented acceptance by the wrong party is not risk management. Residual risk must be evaluated and signed by the business risk owner, and here a cheap compensating control clearly improves the position first." }
    ],
    best: "ISC² prefers B because it is the proportionate, risk-based response when the primary control cannot be used: reduce what you reasonably can with a compensating control, then have the accountable owner formally accept the documented residual. A is an overreaction that harms the business, C is technician-first spending without justification, and D abandons analysis and ownership."
  },
  q2: {
    stem: "A bank’s quantitative analysis puts the ALE of a specific fraud risk at $2,000,000 per year. A proposed control would cut the ALE to $200,000 but costs $2,500,000 per year to run. A cyber-insurance policy covering this risk costs $600,000 per year. What is the BEST recommendation to management?",
    opts: [
      { t: "Implement the $2,500,000 control because it reduces the risk the most.", ok: false, why: "‘Reduces the most’ is a distractor. The control spends $2.5M to avoid $1.8M of expected loss — a net loss of value. A control that costs more than it saves is not justified." },
      { t: "Transfer the risk with the $600,000 insurance policy and formally accept the documented residual.", ok: true, why: "For $600k it neutralizes most of a $2M exposure — cheaper than both the control and the raw ALE — and management explicitly accepts the small residual. It is the economically rational, governed choice given the numbers." },
      { t: "Accept the full $2,000,000 ALE and take no action.", ok: false, why: "Doing nothing ignores a clearly cheaper option that improves the position, so it is not the BEST answer when a positive-value treatment exists." },
      { t: "Avoid the risk by discontinuing the product line.", ok: false, why: "Avoidance destroys the business value of an entire product to remove a risk that can be managed affordably — disproportionate and not business-aligned." }
    ],
    best: "ISC² prefers B because treatment must be cost-justified and business-aligned: compare each option’s cost to its benefit. The control’s cost exceeds its benefit (A), avoidance destroys value (D), and inaction leaves a cheaper improvement on the table (C). Transfer plus documented residual acceptance manages the exposure at the lowest sensible cost — and the exam is testing whether you compare cost to benefit rather than chase maximum reduction."
  },
  memory: {
    mnemonic: "Treatments = <b>MATA</b>: Mitigate, Avoid, Transfer, Accept. Decision order = <b>IATM</b>: Identify → Analyze → Treat → Monitor.",
    visual: "Picture a balance scale weighing <i>likelihood</i> against <i>impact</i>, with a senior manager standing beside it holding the only pen that can sign off the leftover (residual) risk.",
    oneLine: "Assess the impact, name the owner, choose the treatment — technology last.",
    fiveSec: "Risk = likelihood × impact; SLE = AV × EF; ALE = SLE × ARO; only management accepts residual."
  },
  flash: [
    "Risk = likelihood × impact of a threat exploiting a vulnerability.",
    "Threat ≠ vulnerability ≠ risk; never call the attacker a vulnerability.",
    "Process: Identify → Analyze → Treat → Monitor (then report & improve).",
    "Treatments: Mitigate, Avoid, Transfer, Accept.",
    "SLE = AV × EF; ALE = SLE × ARO (ARO can be fractional).",
    "Inherent = before controls; Residual = after controls.",
    "Only senior management / the risk owner accepts residual risk.",
    "Controls must be cost-justified: benefit must exceed cost.",
    "Quantitative = money/formulas; Qualitative = ratings.",
    "On ‘do FIRST’: assess impact & owner before any control; tech last."
  ],
  official: {
    outline: [
      "Threat and vulnerability identification",
      "Risk analysis, assessment, and scope",
      "Risk response and treatment (e.g., cybersecurity insurance)",
      "Applicable types of controls (e.g., preventive, detection, corrective)",
      "Control assessments (e.g., security and privacy)",
      "Continuous monitoring and measurement",
      "Reporting (e.g., internal, external)",
      "Continuous improvement (e.g., risk maturity modeling)",
      "Risk frameworks (e.g., ISO, NIST, COBIT, SABSA, PCI)"
    ],
    note: "The bullets above are the official ISC² sub-items for outline objective 1.9. Everything else in this module — the specific dollar examples, the MATA/IATM mnemonics, the two sample exam questions, and the detailed framework-mapping explanations — is additional study material written to standard CISSP doctrine to help you learn, not verbatim ISC² text. Verify specifics against the official CBK."
  },
  refs: [
    "(ISC)² CISSP CBK — Domain 1: Security and Risk Management",
    "NIST SP 800-30 Rev.1 — Guide for Conducting Risk Assessments",
    "NIST SP 800-37 Rev.2 — Risk Management Framework for Information Systems",
    "NIST SP 800-39 — Managing Information Security Risk",
    "ISO/IEC 27005 — Information security risk management",
    "ISO 31000 — Risk management — Guidelines"
  ]
};

CISSP_MODULES["1.1"] = {
  title: "Understand, adhere to, and promote professional ethics",
  simple:
    "Professional ethics is the code of conduct you promise to follow as a certified security professional. ISC² gives you four <b>Canons</b> — duties listed in <b>priority order</b> — and whenever two of them pull in different directions, the higher one wins. Your first duty is to protect society and the public, even above your employer or yourself. On the exam, ethics is not vague “be nice”; it is a <b>decision procedure</b>: when a situation feels conflicted, apply the Canons in order and pick the answer the higher Canon demands.",
  deep: [
    "<b>Why it exists.</b> A certification is a public trust. Society hands CISSPs the keys to sensitive systems, so ISC² must guarantee that members behave predictably and honorably. The Code gives every member a single, defensible standard and lets ISC² revoke the certification of anyone who violates it. Ethics protects the credibility of the whole profession, which is why promoting it (not just following it) is part of the duty.",
    "<b>The four Canons, in order (memorize the order).</b> (1) Protect society, the common good, necessary public trust and confidence, and the infrastructure. (2) Act honorably, honestly, justly, responsibly, and legally. (3) Provide diligent and competent service to principals (your clients/employer). (4) Advance and protect the profession. When Canons conflict, the earlier Canon prevails — this ordering is the single most tested idea in the objective.",
    "<b>When it is used.</b> Whistleblowing dilemmas, discovering employer or client wrongdoing, deciding how to disclose a vulnerability, conflicts of interest, being asked to do something borderline-legal, and handling other people’s data. The preamble also requires you to both adhere to and be seen to adhere to the Code.",
    "<b>Who is responsible.</b> Every certified member is personally bound. The ISC² Ethics Committee enforces the Code through a complaints process, and there is a nuance worth knowing: complaints under the higher Canons (harming society/acting dishonorably) may be brought by anyone affected, while complaints under the lower Canons (service to principals, the profession) are limited to those in a specific relationship (e.g., an employer or another professional).",
    "<b>Common misconceptions.</b> That ethics equals legality — you can act legally yet unethically. That loyalty to your employer is the top duty — society outranks the employer. That “no harm was intended” excuses a breach. That ethics is soft and untested — it is directly tested, and almost always through Canon ordering.",
    "<b>Relationship to governance.</b> The ISC² Code sits above any organizational code of conduct; governance embeds ethics into policy, acceptable-use rules, and tone at the top. Both ethics and governance answer the question “how ought we to behave,” and a healthy security culture is largely an ethics-and-governance outcome.",
    "<b>Relationship to risk management.</b> Ethical lapses are reputational, legal, and regulatory risk. Honesty and coordinated disclosure reduce liability; conflicts of interest are risks to be managed through disclosure and separation of duties. Acting with integrity is, in effect, a control.",
    "<b>Relationship to other domains.</b> Ethical disclosure of assessment findings (D6), conducting investigations honestly and not fabricating evidence (D7), refusing to insert backdoors or maintenance hooks into software (D8), and the due-care/negligence standard (D1 governance) are all ethics in action.",
    "<b>How ISC² expects you to think.</b> When a scenario pits employer against public, choose the public (Canon I). Resolve any conflict by Canon order. Prefer honesty, lawful action, fairness, and protecting people — but act <i>honorably</i>, meaning through proper channels, not by reckless leaking. Do not rationalize a convenient answer."
  ],
  objective:
    "Apply the four ISC² Canons in priority order, protecting society and public trust before employer or self, and always acting honorably.",
  key:
    "When ethical duties collide, the earlier Canon wins — and the public comes first.",
  realWorld:
    "A CISSP at a hospital discovers that the electronic health-record vendor is quietly transmitting patient data to an analytics firm without consent, and the CIO tells them to keep silent so a lucrative contract isn’t disrupted. Canon I (protect society and public trust) and Canon II (act honestly and legally) outrank Canon III (diligent service to the employer). The professional documents the finding, escalates it internally through the proper channel, and — if leadership refuses to act — reports it to the appropriate regulator. Crucially, they do this <i>honorably</i>: through defined channels and with evidence, not by leaking to the press.",
  examScenario:
    "During an authorized penetration test, you find that a paying client’s production system exposes millions of customers’ unencrypted records. The client asks you to leave the finding out of the report so a launch isn’t delayed. What should you do? Weigh: comply with the paying principal; mention it only verbally; document it in the report and escalate through proper channels; or anonymously leak it. Decide using Canon order before reading the answer sections.",
  analogy:
    "The Canons are like a physician’s oath with the priorities written down: the duty to human life and public health outranks pleasing any single patient or the hospital’s bottom line. When duties collide, the doctor follows the ranked oath, not personal convenience — and acts through proper medical channels, not by causing a scene.",
  traps: [
    "Choosing the employer’s or client’s interest over the public — Canon I (society) beats Canon III (principals).",
    "Assuming “legal” equals “ethical.” Conduct can be lawful yet still violate the Code.",
    "Picking the answer that minimizes personal risk rather than the honorable one.",
    "Reckless disclosure (leaking to the media) — you must protect society <i>and</i> act honorably, so use proper channels first.",
    "Forgetting the Canons are ordered; “which Canon takes precedence” questions hinge entirely on the order.",
    "Confusing the ISC² Code with an organizational code of ethics — the ISC² Code governs your certification.",
    "Publicly accusing a colleague without a fair process (Canon II requires acting justly) — but also not staying silent about real, ongoing harm."
  ],
  terms: [
    { t: "(ISC)² Code of Ethics", def: "The mandatory code every ISC² member agrees to uphold.", purpose: "Maintain public trust in the certification and the profession.", diff: "Governs your certification, unlike an internal org code.", exam: "Know the Preamble and the four Canons in order." },
    { t: "The four Canons", def: "The four ranked ethical duties of a member.", purpose: "Provide a deterministic way to resolve dilemmas.", diff: "Ordered, not equal.", exam: "Order = Society → Honorably → Principals → Profession." },
    { t: "Ethics complaint / Ethics Committee", def: "The ISC² process and body that adjudicate alleged violations.", purpose: "Enforce the Code, up to revocation.", diff: "Who may file depends on which Canon is invoked.", exam: "Higher-Canon complaints are open to anyone affected." },
    { t: "Whistleblowing", def: "Reporting wrongdoing to protect the public or the organization.", purpose: "Surface harm that leadership won’t address.", diff: "Ethical only when done honorably and through proper channels.", exam: "‘Honorable’ path beats a reckless leak." },
    { t: "Conflict of interest", def: "Competing loyalties that could bias judgment.", purpose: "Recognize and disclose bias.", diff: "Managed by disclosure and separation of duties.", exam: "Disclose rather than conceal." },
    { t: "Responsible (coordinated) disclosure", def: "Reporting a vulnerability to the owner and allowing time to fix before going public.", purpose: "Reduce harm while still protecting the public.", diff: "Vs full disclosure (immediate public release).", exam: "Coordinated disclosure is the ethical default." }
  ],
  pairs: [
    { t: "Ethics vs Law", def: "Ethics is a moral duty; law is an enforceable rule set.", similar: "Both constrain behavior and carry consequences.", diff: "You can be fully legal yet unethical; the Code sets a higher bar.", clue: "‘Is it allowed?’ = law; ‘Is it right?’ = ethics.", trick: "Law is the floor; ethics is the ceiling.", ex: "Selling customer data may be legal in a region yet violate Canon I/II." },
    { t: "Canon I vs Canon III (society vs principal)", def: "Protect the public vs serve your client/employer.", similar: "Both are genuine duties you owe.", diff: "Canon I outranks Canon III when they conflict.", clue: "Employer-vs-public conflict → choose the public.", trick: "Society is Supreme (it’s Canon #1).", ex: "Hiding a public-harming flaw to please a client fails Canon I." },
    { t: "Responsible vs Full disclosure", def: "Coordinated report with fix time vs immediate public release.", similar: "Both make a vulnerability known.", diff: "Responsible disclosure limits harm; full disclosure can endanger users.", clue: "‘Give the vendor time’ → responsible.", trick: "Responsible = Restrained timing.", ex: "Notifying a vendor privately and agreeing a disclosure date." }
  ],
  cross: [
    { d: "D1 → Governance & due care", why: "Ethics underpins the prudent-person standard; honest, responsible conduct is what due care and due diligence operationalize." },
    { d: "D6 → Ethical disclosure of findings", why: "Assessment results must be reported honestly and responsibly (Canons I and II), never buried to please a sponsor." },
    { d: "D7 → Investigations", why: "Evidence must be collected and reported honestly; fabricating or concealing it violates Canon II and destroys admissibility." },
    { d: "D8 → Secure development", why: "Refusing to plant backdoors/maintenance hooks and disclosing known defects honestly is Canon II and IV in practice." }
  ],
  frameworks: [
    { fw: "ISC² Code of Ethics", how: "The authoritative source itself — the Preamble plus four Canons that all members must uphold." },
    { fw: "ISO/IEC 27001 (A.6/A.7 people controls)", how: "Requires acceptable-use, terms of employment, and disciplinary processes that embed ethical conduct into the ISMS." },
    { fw: "NIST SP 800-53 (PL-4 Rules of Behavior, AT family)", how: "Formalizes rules of behavior and awareness training that codify expected ethical conduct for users." },
    { fw: "COBIT (EDM/APO01 culture, ethics and behavior)", how: "Explicitly treats organizational ethics and culture as a governance component leadership must set." },
    { fw: "ACM/IEEE codes of ethics", how: "Broader professional-conduct analogues; useful context, not ISC²-specific." }
  ],
  impl: {
    people: "Every employee signs a code of conduct; CISSPs are additionally bound by the ISC² Code; an ethics/whistleblower function (often Legal, Compliance, or HR) owns the program, with visible leadership sponsorship.",
    process: "Ethics training at onboarding and annually; signed acknowledgments; a clear, protected escalation and whistleblower path; conflict-of-interest disclosures; and a fair, documented disciplinary process.",
    tech: "A policy-management/attestation platform, an anonymous reporting hotline, and DLP/monitoring to detect misuse of data or access.",
    evidence: "Signed acknowledgments, training completion records, hotline and investigation logs, conflict-of-interest disclosures, and coordinated-disclosure records.",
    mistakes: "Treating ethics as a one-time poster; providing no safe way to report; leadership not modeling the behavior (weak tone at the top); retaliating against honest reporters; and reducing ethics to legal compliance only."
  },
  q1: {
    stem: "During an authorized penetration test you discover the client is knowingly storing millions of customers’ credit-card numbers unencrypted, in clear violation of PCI DSS. The project sponsor asks you to omit this from the final report so the product launch isn’t delayed. What is the BEST course of action?",
    opts: [
      { t: "Comply with the sponsor’s request because they are the paying principal.", ok: false, why: "Service to the principal (Canon III) cannot override protecting society (Canon I) and acting honestly (Canon II). Omitting a known, public-harming finding is dishonest." },
      { t: "Document the finding clearly in the report and escalate it through the engagement’s defined channels (e.g., higher management).", ok: true, why: "This protects the public (Canon I) and is honest (Canon II), while being done honorably through proper channels rather than by leaking." },
      { t: "Remove it from the written report but mention it verbally so there is no paper trail.", ok: false, why: "This still conceals a material risk to the public and is deliberately dishonest and unaccountable." },
      { t: "Anonymously disclose the exposure to the media immediately.", ok: false, why: "Reckless public disclosure can increase harm and breach contract; you must first act honorably through proper channels." }
    ],
    best: "ISC² ranks protecting society and acting honestly above serving the principal, but also requires you to act honorably. B satisfies all three — it protects customers through honest, proper-channel escalation. A and C subordinate the public to the client and are dishonest; D protects the public but fails the ‘act honorably’ requirement."
  },
  q2: {
    stem: "You have partial but not conclusive evidence that a respected senior colleague — also a CISSP — is falsifying audit results. What is the BEST action?",
    opts: [
      { t: "Publicly accuse them in a team meeting to force the truth out.", ok: false, why: "Canon II requires acting justly; a public accusation without due process is unfair and may defame an innocent person." },
      { t: "Do nothing, since you lack conclusive proof and don’t want to damage a colleague’s reputation.", ok: false, why: "Ignoring likely wrongdoing that undermines public trust fails Canons I and II; inaction is not neutral here." },
      { t: "Preserve what evidence you legitimately can and report your concern through the proper internal channel (and to ISC² if warranted), letting a fair process establish the facts.", ok: true, why: "This protects trust (Canon I) while acting justly and honorably (Canon II) through due process." },
      { t: "Privately confront the colleague and agree to keep it quiet if they stop.", ok: false, why: "Concealing falsified audit evidence is itself dishonest and harms public trust; it is not yours to bury." }
    ],
    best: "The Code requires you to protect trust and to act justly and honorably. C reports responsibly and lets a fair process decide; A is unjust, B is inaction in the face of ongoing harm, and D conceals wrongdoing."
  },
  memory: {
    mnemonic: "Canon order — <b>Society, Honorably, Principals, Profession</b> — “<b>S</b>o <b>H</b>elp <b>P</b>rotect the <b>P</b>rofession.”",
    visual: "A pyramid with Society at the apex, then Honor, then Principals, then Profession at the base — you always answer from the top down.",
    oneLine: "Public first, act honorably, then serve the client, then the profession — in that order.",
    fiveSec: "Canons are ranked; society beats employer; legal ≠ ethical; disclose honorably."
  },
  flash: [
    "Four Canons, in order: Society → Honorably → Principals → Profession.",
    "On conflict, the earlier Canon wins.",
    "Protect the public even above your employer.",
    "Legal ≠ ethical.",
    "Disclose honorably and coordinated, never recklessly.",
    "Act justly — don’t accuse without a fair process.",
    "Violating the Code can cost you the certification.",
    "Ethics is tested as Canon-ordered decision-making."
  ],
  official: {
    outline: [
      "(ISC)² Code of Professional Ethics",
      "Organizational code of ethics"
    ],
    note: "The Preamble and the four Canons (and their order) are official ISC² text — memorize them verbatim. The mnemonics, the ‘legal ≠ ethical’ framing, the coordinated-disclosure guidance, and the sample questions are added study material to help you reason, not official text."
  },
  refs: [
    "(ISC)² Code of Professional Ethics — Preamble and Canons",
    "(ISC)² CISSP CBK — Domain 1",
    "ISO/IEC 27001 — Annex A people controls",
    "NIST SP 800-53 — PL-4 Rules of Behavior"
  ]
};

CISSP_MODULES["1.2"] = {
  title: "Understand and apply security concepts (the 5 pillars)",
  simple:
    "Security concepts are the handful of core goals every control ultimately serves. The classic three are <b>Confidentiality</b> (keep secrets secret), <b>Integrity</b> (keep data correct and unaltered), and <b>Availability</b> (keep it usable when needed) — the CIA Triad. ISC² adds two more: <b>Authenticity</b> (you are who you claim, and data’s origin is genuine) and <b>Non-repudiation</b> (you can’t later deny you did something). Every safeguard you will ever learn exists to protect one or more of these five pillars.",
  deep: [
    "<b>Why it exists.</b> You need a tiny, shared vocabulary of <i>goals</i> so you can state what a control is <i>for</i>. Arguing about tools is pointless until you know which property you’re protecting. The pillars also frame trade-offs — pushing confidentiality too hard can hurt availability, and vice versa — which are business decisions, not technical ones.",
    "<b>The five pillars, precisely.</b> <b>Confidentiality</b> — prevent unauthorized disclosure (encryption, access control, least privilege). <b>Integrity</b> — prevent unauthorized or undetected modification (hashing, digital signatures, change control, separation of duties). <b>Availability</b> — ensure timely, authorized access (redundancy, backups, DDoS protection, capacity planning). <b>Authenticity</b> — genuineness of identity and origin (MFA, certificates, message authentication). <b>Non-repudiation</b> — proof of an action’s origin that the actor cannot deny (digital signatures + logging). Note that authenticity plus integrity plus a private key yields non-repudiation.",
    "<b>When it is used.</b> Every design decision, every data-classification call (which pillar dominates for this data?), every control selection, and every incident triage (which pillar was harmed?). ISC² routinely maps a threat to the pillar it violates: disclosure → confidentiality, tampering → integrity, denial of service → availability.",
    "<b>Who is responsible.</b> Data owners decide which pillar matters most for their data (a trading system prizes integrity and availability; a spy agency prizes confidentiality). Architects and engineers implement to that priority, and operations sustain availability. Management sets the relative priorities as a risk decision.",
    "<b>Common misconceptions.</b> That the pillars are independent — they interact and trade off. That hashing provides confidentiality — it provides integrity. That a shared-key MAC/HMAC gives non-repudiation — it does not, because either party holding the key could have produced it; only a private-key digital signature gives non-repudiation. That authenticity equals authorization — authenticity proves genuineness, authorization grants permission. And note the DAD triad (Disclosure, Alteration, Destruction) is simply the inverse of CIA.",
    "<b>Relationship to governance.</b> Governance sets which pillar the business prioritizes as a matter of risk appetite; classification schemes (e.g., FIPS 199) are literally built on rating confidentiality, integrity, and availability impact as low, moderate, or high.",
    "<b>Relationship to risk management.</b> Impact is assessed per pillar, and a control’s value is which pillar-risk it reduces. The DAD outcomes are the harms you are managing down to an acceptable level.",
    "<b>Relationship to other domains.</b> D2 classifies data by CIA impact; D3 cryptography delivers confidentiality, integrity, authenticity, and non-repudiation; D5 IAM delivers authenticity and gates authorization; D7 operations and DR/BC deliver availability; D6 testing verifies each property actually holds.",
    "<b>How ISC² expects you to think.</b> For any control, ask “which pillar(s) does this serve?” For any attack, ask “which pillar did this violate?” Remember that non-repudiation requires asymmetric signatures (a private key), and that availability is a genuine security goal candidates routinely under-weight."
  ],
  objective:
    "Every control and every threat maps to Confidentiality, Integrity, and Availability — plus Authenticity and Non-repudiation.",
  key:
    "Name the pillar a control protects and the pillar an attack breaks — that is the whole game.",
  realWorld:
    "A stock-trading platform. Integrity is paramount — orders must not be altered (digital signatures, checksums, database constraints) — and so is availability, since milliseconds of downtime cost millions (active-active clusters, DDoS scrubbing, capacity headroom). Confidentiality still matters (client PII is encrypted). Non-repudiation is legally essential: every trade is digitally signed and immutably logged so a client cannot deny placing an order and the firm cannot deny executing it. The architecture is justified to the risk committee pillar by pillar.",
  examScenario:
    "A hospital must let clinicians instantly reach patient records during emergencies, protect patient privacy, and be able to prove which clinician changed a record. Budget forces a priority call for the initial rollout. Which security property should be the primary design driver here, and why might it outrank the others for a life-critical clinical system? Decide before reading the answers.",
  analogy:
    "Think of cash in a bank. Confidentiality is the sealed envelope so no one sees the amount; integrity is the tamper-evident tape that reveals meddling; availability is the ATM actually dispensing cash when you need it; authenticity is the teller checking your ID; and non-repudiation is your signature on the withdrawal slip so you can’t later deny it.",
  traps: [
    "Hashing is integrity, not confidentiality; Base64 is encoding (no security), not encryption.",
    "A MAC/HMAC provides integrity and authenticity but NOT non-repudiation — the key is shared, so either party could have made it; only a digital signature (private key) gives non-repudiation.",
    "Authenticity (genuine identity/origin) is not authorization (what you may do).",
    "Forgetting availability is a security goal — many candidates over-focus on confidentiality.",
    "DAD (Disclosure, Alteration, Destruction) is a distractor set — the inverse of CIA.",
    "Assuming encryption provides integrity; a plain confidentiality mode does not — you need a MAC or an AEAD mode like GCM.",
    "Confusing data integrity (unaltered in storage/transit) with input accuracy/quality."
  ],
  terms: [
    { t: "Confidentiality", def: "Preventing unauthorized disclosure of information.", purpose: "Keep secrets secret.", diff: "About exposure, not correctness.", exam: "Encryption, access control, and least privilege serve it." },
    { t: "Integrity", def: "Preventing unauthorized or undetected modification.", purpose: "Keep data trustworthy.", diff: "About correctness, not secrecy.", exam: "Hashing, signatures, and separation of duties serve it." },
    { t: "Availability", def: "Ensuring timely, authorized access to resources.", purpose: "Keep systems usable.", diff: "About uptime, not secrecy or correctness.", exam: "Redundancy, backups, and DDoS protection serve it." },
    { t: "Authenticity", def: "Assurance that an identity or data origin is genuine.", purpose: "Trust who/what you’re dealing with.", diff: "Proving genuineness, not granting permission.", exam: "MFA, certificates, and MACs serve it." },
    { t: "Non-repudiation", def: "Proof of an action’s origin so the actor cannot deny it.", purpose: "Accountability that stands up in a dispute.", diff: "Requires a private-key signature, unlike a shared-key MAC.", exam: "Digital signatures plus logging provide it." },
    { t: "DAD triad", def: "Disclosure, Alteration, and Destruction — the threats to CIA.", purpose: "Name the harm CIA prevents.", diff: "The inverse of CIA.", exam: "A common distractor set." },
    { t: "Privacy", def: "An individual’s right to control their personal data.", purpose: "Protect people, not just data.", diff: "A legal/individual concept; confidentiality is the control property.", exam: "Privacy ⊃ confidentiality of personal data." }
  ],
  pairs: [
    { t: "Confidentiality vs Privacy", def: "Secrecy of data vs an individual’s rights over their personal data.", similar: "Both aim to keep information from improper exposure.", diff: "Privacy is a legal, person-centric right; confidentiality is a technical control property.", clue: "‘Personal data / rights / consent’ → privacy.", trick: "Privacy = Person; Confidentiality = Content.", ex: "Encrypting a file is confidentiality; honoring a data-subject deletion request is privacy." },
    { t: "Integrity vs Non-repudiation", def: "Data is unaltered vs an action cannot be denied.", similar: "Both rely on cryptographic verification.", diff: "Non-repudiation adds identity-binding via a private-key signature.", clue: "‘Can’t deny they did it’ → non-repudiation.", trick: "Non-repudiation = No take-backs.", ex: "A checksum shows a file is unchanged (integrity); a signed contract proves who agreed (NR)." },
    { t: "Authenticity vs Authorization", def: "Genuine identity/origin vs permission to act.", similar: "Both are checked during access.", diff: "Authenticity is ‘who are you, really’; authorization is ‘what may you do.’", clue: "‘Prove genuine’ → authenticity; ‘allowed to’ → authorization.", trick: "AuthN = are you real; AuthZ = are you allowed.", ex: "Login proven by MFA (authenticity) but payment approval denied (authorization)." },
    { t: "Encryption vs Hashing vs Encoding", def: "Reversible-with-key vs one-way fingerprint vs reversible format change with no security.", similar: "All transform data.", diff: "Only encryption protects confidentiality; hashing protects integrity; encoding protects nothing.", clue: "‘Base64’ → encoding; ‘SHA-256’ → hashing; ‘AES’ → encryption.", trick: "Encoding = costume; Hashing = fingerprint; Encryption = lockbox.", ex: "AES file (encryption), SHA-256 digest (integrity), Base64 attachment (encoding)." }
  ],
  cross: [
    { d: "D2 → Classification", why: "Data is labeled by its confidentiality, integrity, and availability impact (e.g., FIPS 199), which then drives the controls." },
    { d: "D3 → Cryptography", why: "Crypto is the primary technical delivery of confidentiality, integrity, authenticity, and non-repudiation." },
    { d: "D5 → Identity & access", why: "Authentication delivers authenticity; authorization then gates what that authentic identity may do." },
    { d: "D7 → Operations & DR/BC", why: "Availability is engineered and sustained through redundancy, backups, monitoring, and recovery." },
    { d: "D6 → Assessment", why: "Testing verifies each pillar actually holds under real conditions." }
  ],
  frameworks: [
    { fw: "NIST FIPS 199 / 200", how: "Systems are categorized by potential impact to confidentiality, integrity, and availability (low/moderate/high) — the CIA triad made operational." },
    { fw: "ISO/IEC 27000", how: "Defines information security itself as the preservation of confidentiality, integrity, and availability." },
    { fw: "NIST SP 800-53", how: "Control families map to the pillars: SC (confidentiality/integrity in transit), CP (availability/contingency), AU (accountability/non-repudiation), IA (authenticity)." },
    { fw: "Parkerian Hexad", how: "An academic extension of CIA adding possession/control, authenticity, and utility — useful context, additional to the exam." },
    { fw: "Zero Trust", how: "Continuously verifies authenticity (and posture) before granting access, tightening confidentiality and integrity of resource access." }
  ],
  impl: {
    people: "Data owners rank the dominant pillar for their data; architects design controls to that priority; operations teams own availability.",
    process: "Classify data by CIA impact; select controls mapped explicitly to pillars; validate through testing; during incidents, classify which pillar was harmed to drive the response.",
    tech: "Encryption (confidentiality), hashing and digital signatures (integrity, non-repudiation), MFA/PKI (authenticity), clustering/backups/DDoS scrubbing (availability), and SIEM/logging (accountability, non-repudiation).",
    evidence: "Classification records tied to CIA impact, a control-to-pillar mapping, signature and log retention, and availability SLAs with uptime reports.",
    mistakes: "Ignoring availability; using hashing where encryption was needed; using a shared-key MAC where non-repudiation was required; encrypting without integrity protection (no AEAD/MAC); and treating authenticity as if it granted authorization."
  },
  q1: {
    stem: "A bank is designing an online funds-transfer service. Regulators require that, in a dispute, the bank can prove a specific customer authorized a specific transfer and that neither party can later deny it. Which objective MUST the design prioritize, and by what mechanism?",
    opts: [
      { t: "Confidentiality, via TLS encryption of the session.", ok: false, why: "TLS protects secrecy in transit but proves nothing about who authorized the action or prevents later denial." },
      { t: "Integrity, via hashing each transaction record.", ok: false, why: "Hashing detects alteration but doesn’t bind an action to an identity — anyone can recompute a hash — so it can’t prevent repudiation." },
      { t: "Non-repudiation, via digital signatures using each party’s private key plus tamper-evident logging.", ok: true, why: "A private-key signature uniquely binds the action to the signer, so they cannot credibly deny it; logging adds accountability. This is the definition of the requirement." },
      { t: "Availability, via redundant transaction processing.", ok: false, why: "Uptime is unrelated to proving authorization or preventing denial." }
    ],
    best: "Proving authorization and preventing denial is precisely non-repudiation, which only asymmetric digital signatures (private key) provide. Encryption gives secrecy, hashing gives integrity without identity-binding, and availability is a different property. A shared-key MAC would also fail because both parties hold the key."
  },
  q2: {
    stem: "An e-commerce site is hit by a volumetric DDoS attack and is unreachable for hours during a major sale, though no data is stolen or altered. Which objective was primarily violated, and which remediation best fits?",
    opts: [
      { t: "Confidentiality; deploy stronger encryption.", ok: false, why: "Nothing was disclosed, and encryption does nothing to restore reachability." },
      { t: "Integrity; add file-integrity monitoring.", ok: false, why: "No data was altered; integrity was not the harm." },
      { t: "Availability; implement DDoS mitigation/scrubbing, redundancy, and scalable capacity.", ok: true, why: "The outage is a pure availability loss, so the remedy is availability engineering." },
      { t: "Non-repudiation; require digital signatures on all orders.", ok: false, why: "Signatures address deniability, not reachability." }
    ],
    best: "The attack destroyed availability without touching confidentiality or integrity, so the objective is availability and the fix is availability-focused. Each wrong answer ‘repairs’ a pillar that was never harmed — the classic match-the-control-to-the-violated-pillar test."
  },
  memory: {
    mnemonic: "Five pillars = <b>CIA + A-N</b> (Authenticity, Non-repudiation). DAD is CIA’s evil twin.",
    visual: "A triangle labeled C-I-A with two guards at the door: an ID-checker (authenticity) and a signature pad (non-repudiation).",
    oneLine: "Every control serves C, I, A, authenticity, or non-repudiation — name which.",
    fiveSec: "C=secret, I=unaltered, A=usable, Auth=genuine, NR=can’t-deny; NR needs a private-key signature."
  },
  flash: [
    "Pillars: Confidentiality, Integrity, Availability + Authenticity, Non-repudiation.",
    "DAD (Disclosure, Alteration, Destruction) = the threats to CIA.",
    "Hashing = integrity, not confidentiality.",
    "Non-repudiation needs a digital signature (private key), not a shared-key MAC.",
    "Authenticity (genuine identity) ≠ authorization (permission).",
    "Availability is a real security goal — don’t forget it.",
    "Encryption alone ≠ integrity (use a MAC or AEAD).",
    "For any attack, name the pillar it violated."
  ],
  official: {
    outline: [
      "Confidentiality, integrity, availability, authenticity, and non-repudiation"
    ],
    note: "The five pillars are the official ISC² concept for objective 1.2. The DAD triad, the Parkerian Hexad, the FIPS 199 mapping, the mnemonics, and the sample questions are added study material written to standard doctrine."
  },
  refs: [
    "(ISC)² CISSP CBK — Domain 1",
    "ISO/IEC 27000 — Overview and vocabulary",
    "NIST FIPS 199 and FIPS 200",
    "NIST SP 800-53 — control families"
  ]
};

CISSP_MODULES["1.3"] = {
  title: "Evaluate and apply security governance principles",
  simple:
    "Security governance is how senior leadership steers and stays accountable for the security program. It makes sure security supports the business’s goals, that clear people own clear responsibilities, and that the organization practices <b>due care</b> (doing the reasonable, right things) and <b>due diligence</b> (verifying, over time, that those things are actually working). Governance is the board-and-executive layer that sets direction and answers for outcomes — it is not the hands-on technical work.",
  deep: [
    "<b>Why it exists.</b> Security must serve the business, not run as an independent technical silo. Someone accountable has to set direction, allocate budget, define risk appetite, and answer for failures. Governance creates that accountability and alignment; without it, security is unfunded, misaligned, and legally exposed to negligence claims.",
    "<b>Alignment.</b> The security strategy, goals, mission, and objectives must trace back to business strategy. Good governance makes security an <i>enabler</i> — for example, achieving a certification that lets the company enter a regulated market — rather than a pure cost or blocker.",
    "<b>Organizational processes.</b> Governance works through committees and must oversee events that change the risk picture, especially acquisitions and divestitures. Buying a company imports its risk, so a security due-diligence review of the target is a governance requirement before the deal closes.",
    "<b>Roles and responsibilities.</b> The board holds ultimate accountability; senior management/the CEO owns risk and sets the tone at the top; the CISO runs the program and advises; data owners, system owners, custodians, and users each have defined duties. The critical distinction: <b>accountability</b> (being answerable for the outcome) cannot be delegated, whereas <b>responsibility</b> (performing the task) can.",
    "<b>Control frameworks.</b> Governance selects the frameworks that give the program structure and defensibility — ISO/IEC 27001 (an ISMS), NIST CSF and RMF, COBIT (governance), SABSA (business-driven architecture), PCI DSS (payments), and FedRAMP (US government cloud). A framework provides a repeatable, auditable structure — but adopting one is not the same as being secure.",
    "<b>Due care vs due diligence.</b> Due care is taking the actions a prudent person would take — implementing reasonable controls. Due diligence is the ongoing investigation and verification that those actions remain appropriate and effective — assessments, monitoring, and vendor reviews. Failing to exercise due care is negligence under the prudent-person standard and creates liability, including downstream liability when your failure harms a partner or customer.",
    "<b>Common misconceptions.</b> That the CISO (or IT) is ultimately accountable — the board and senior management are. That governance equals management — governance directs and oversees, management executes. That a framework is a silver bullet. That due care and due diligence are the same thing — one is doing, the other is verifying.",
    "<b>Relationship to risk management.</b> Governance sets the risk appetite, tolerance, and ownership that bound every risk decision (1.9), and it consumes the risk register and KRIs as reporting. Governance is the mandate; risk management is the engine.",
    "<b>How ISC² expects you to think.</b> On ‘who is accountable?’ questions, choose senior management/the board, not IT. Security aligns to the business. Due care = do the prudent thing; due diligence = detect/verify it. Governance sets direction — it does not configure firewalls. On organizational-change scenarios (M&A), the governance answer is to run a security due-diligence assessment first."
  ],
  objective:
    "Security governance is senior leadership directing, resourcing, and being accountable for a business-aligned program through clear roles, frameworks, and due care/due diligence.",
  key:
    "Governance sets direction and owns accountability; management executes — and accountability can never be delegated.",
  realWorld:
    "A bank acquires a fintech. Before closing, the board mandates a security due-diligence review: the target’s data classification, breach history, regulatory posture, and control maturity are assessed against the bank’s frameworks (ISO 27001, PCI DSS). Findings feed the deal price and an integration risk plan. After the acquisition, a governance committee assigns owners, aligns the fintech’s controls to the bank’s ISMS, and reports residual risk to the board. Implementing the integration controls is due care; the ongoing assessment proving they work is due diligence.",
  examScenario:
    "A company is acquiring a competitor with unknown security maturity and a rumored past breach, and the CEO wants to sign this week. From a governance standpoint, what should happen before the acquisition completes, and who is ultimately accountable for that decision? Weigh: proceed and fix later; run a security due-diligence assessment; delegate the whole decision to IT; or just buy cyber-insurance and close.",
  analogy:
    "Governance is the board of directors and city council of the security program: they set the zoning laws, the budget, and who is responsible for what, and they answer to citizens if the city floods. They don’t personally lay the pipes — that’s management and engineering. Due care is building the levees a reasonable city would; due diligence is inspecting them every season.",
  traps: [
    "Naming IT or the CISO as ‘ultimately accountable’ — the board/senior management is.",
    "Confusing governance (direction and oversight) with management (execution).",
    "Swapping due care and due diligence: care = do the prudent thing; diligence = verify/monitor it.",
    "Believing that adopting a framework by itself equals compliance or security.",
    "Forgetting that M&A and divestitures trigger a security due-diligence review.",
    "Trying to ‘delegate accountability’ (impossible) — only responsibility can be delegated.",
    "Framing security as a blocker rather than a business-aligned enabler (ISC² prefers alignment)."
  ],
  terms: [
    { t: "Governance", def: "Leadership setting direction for, and being accountable for, the program.", purpose: "Align security to business and assign accountability.", diff: "Directs and oversees; management executes.", exam: "The board/senior management owns accountability." },
    { t: "Due care", def: "Taking the actions a prudent person would take (reasonable controls).", purpose: "Meet the expected standard of care.", diff: "The ‘doing’ half.", exam: "Absence of due care = negligence." },
    { t: "Due diligence", def: "Ongoing investigation and verification that controls remain appropriate and effective.", purpose: "Prove and sustain due care over time.", diff: "The ‘verifying’ half.", exam: "‘Assess/monitor/investigate’ wording → diligence." },
    { t: "Prudent-person rule", def: "The standard of care a reasonable, responsible person would exercise.", purpose: "The yardstick courts use to judge negligence.", diff: "Basis of liability, not a control.", exam: "Ties due care to legal liability." },
    { t: "Downstream liability", def: "Legal exposure when your security failure harms a partner or customer.", purpose: "Explains why third-party and supply-chain security matter.", diff: "Liability flowing outward.", exam: "Motivates vendor due diligence." },
    { t: "Accountability vs responsibility", def: "Answerable for the outcome vs performing the task.", purpose: "Fix ownership correctly.", diff: "Accountability can’t be delegated; responsibility can.", exam: "‘Who answers for it’ → accountable." },
    { t: "Security control framework", def: "A structured, reusable set of controls and processes.", purpose: "Give the program structure and defensibility.", diff: "ISO/NIST/COBIT/SABSA/PCI/FedRAMP differ in focus.", exam: "Choose by context (payments → PCI, US cloud → FedRAMP)." }
  ],
  pairs: [
    { t: "Due care vs Due diligence", def: "Doing the prudent thing vs investigating/verifying it over time.", similar: "Both demonstrate responsibility and reduce liability.", diff: "Action vs verification.", clue: "‘Checked / assessed / monitored / verified’ → diligence.", trick: "Care = Conduct; Diligence = Detect.", ex: "Deploying endpoint protection (care) vs vetting the vendor and confirming it actually works (diligence)." },
    { t: "Accountability vs Responsibility", def: "Answerable for the outcome vs performing the work.", similar: "Both are assigned in a RACI.", diff: "Accountability cannot be delegated.", clue: "‘Who ultimately answers?’ → accountable.", trick: "Accountable = Anchor (it stays at the top).", ex: "The custodian runs backups (responsible); the data owner remains accountable for the data." },
    { t: "Governance vs Management", def: "Setting direction and overseeing vs executing and operating.", similar: "Both are needed and interlock.", diff: "Altitude — strategy/oversight vs day-to-day.", clue: "‘Board / strategy / appetite’ → governance.", trick: "Governance = Guide; Management = Move.", ex: "The board approves the risk appetite (governance); the team configures the controls (management)." }
  ],
  cross: [
    { d: "D1 → Risk management & BC", why: "Governance sets the risk appetite and ownership that bound risk decisions (1.9) and defines the scope for business continuity (1.7)." },
    { d: "D2 → Asset ownership & classification", why: "Governance establishes the ownership model and authorizes the classification scheme that drives protection." },
    { d: "D6 → Assessment & audit", why: "Governance commissions independent assessments and audits and consumes their results as assurance evidence." },
    { d: "D7 → Operations policy & change control", why: "Governance grants the authority behind operational policy and the change-management process." },
    { d: "All domains", why: "Governance provides the mandate, funding, and accountability under which every other domain operates." }
  ],
  frameworks: [
    { fw: "ISO/IEC 27001 (+27014)", how: "Establishes an ISMS with explicit top-management responsibility; 27014 addresses the governance of information security specifically." },
    { fw: "NIST CSF 2.0", how: "Adds a ‘Govern’ function that formalizes risk appetite, roles, and oversight alongside Identify/Protect/Detect/Respond/Recover." },
    { fw: "COBIT 2019", how: "The archetypal governance framework — it separates Governance (Evaluate/Direct/Monitor) from Management (Plan/Build/Run/Monitor)." },
    { fw: "SABSA", how: "A business-driven security architecture that traces every control back to a business attribute and need." },
    { fw: "PCI DSS / FedRAMP", how: "Sector and cloud mandates that governance must ensure the organization satisfies and can evidence." },
    { fw: "ISO/IEC 38500", how: "Corporate governance of IT — principles for the board’s oversight of technology, including security." }
  ],
  impl: {
    people: "The board and audit committee; the CEO/senior management (accountable and the ultimate risk owner); the CISO (program lead with real authority); a cross-functional security steering committee; and named data and system owners.",
    process: "Define a business-aligned security strategy and charter; adopt a control framework; set the policy hierarchy; assign roles via a RACI; fund and resource the program; require due-diligence reviews for M&A and vendors; receive regular risk and assurance reporting; and review at least annually.",
    tech: "A GRC platform, policy-management and attestation tooling, board-level reporting dashboards, and framework-mapping/compliance tooling.",
    evidence: "An approved security strategy/charter, board minutes approving the risk appetite, an org chart/RACI, framework-adoption records, M&A due-diligence reports, and an approved policy set.",
    mistakes: "No executive sponsorship; a CISO with responsibility but no authority; a framework adopted on paper only; security misaligned with the business; skipping due diligence on acquisitions and vendors; and pushing accountability down to IT."
  },
  q1: {
    stem: "A company is about to acquire a smaller competitor that has a rumored history of a data breach and unknown security maturity. The CEO wants to sign this week. What is the BEST governance action before the deal closes, and who is ultimately accountable for it?",
    opts: [
      { t: "Delegate the security decision entirely to the IT department and proceed on their word.", ok: false, why: "Accountability cannot be delegated to IT; senior management/the board remains accountable, and IT alone lacks the mandate to accept enterprise risk." },
      { t: "Conduct a security due-diligence assessment of the target (data, breach history, controls, compliance) to inform the deal, with senior management/the board accountable for the decision.", ok: true, why: "Investigating before acting is the definition of due diligence, and the board/senior management properly owns the accountability for the decision." },
      { t: "Proceed now and remediate any issues after integration.", ok: false, why: "Acting without investigation is a failure of due diligence and due care, importing unknown and unpriced liability." },
      { t: "Buy cyber-insurance to cover any inherited breach and close the deal.", ok: false, why: "A transfer doesn’t discharge the duty to investigate; you cannot properly price or insure risk you have not assessed, and accountability remains with leadership." }
    ],
    best: "Governance requires due diligence before and during action and retains accountability at the senior/board level. B does both; A tries to delegate accountability, C skips due diligence, and D substitutes a transfer for the required investigation."
  },
  q2: {
    stem: "After a breach, a court examines whether a hospital’s leadership met its legal duty. Investigators find the hospital bought security tools but never reviewed logs, tested backups, or reassessed risk for three years. Which principle did leadership most clearly fail, and what is the likely consequence?",
    opts: [
      { t: "Due care — because they never bought enough tools.", ok: false, why: "They did implement controls (some due care); the failure is not the initial purchase decision." },
      { t: "Due diligence — because they never verified, monitored, or reassessed that their controls stayed effective; the likely consequence is a finding of negligence and liability.", ok: true, why: "Buying tools is due care; failing to verify and monitor over time is a due-diligence failure that, under the prudent-person rule, supports a negligence finding." },
      { t: "Least privilege — because access was too broad.", ok: false, why: "Nothing in the facts points to excessive privilege." },
      { t: "Separation of duties — because one person did everything.", ok: false, why: "The scenario doesn’t describe a duties-concentration problem." }
    ],
    best: "The hospital took initial prudent action (due care) but failed the ongoing verification and monitoring that constitute due diligence, which under the prudent-person standard establishes negligence. C and D name controls not at issue in the scenario."
  },
  memory: {
    mnemonic: "‘<b>Care = Conduct</b> (do it); <b>Diligence = Detect</b> (verify it).’ Governance = ‘Direction + Accountability.’",
    visual: "A boardroom setting a compass heading while, below deck, engineers actually sail the ship.",
    oneLine: "Leadership sets direction and owns accountability; due care does, due diligence verifies.",
    fiveSec: "Board is accountable; align to business; care = do, diligence = verify."
  },
  flash: [
    "Governance = leadership sets direction + owns accountability; management executes.",
    "Senior management/the board is ultimately accountable — not IT or the CISO.",
    "Accountability can’t be delegated; responsibility can.",
    "Due care = do the prudent thing; due diligence = verify/monitor it.",
    "No due care = negligence (prudent-person rule) → liability.",
    "M&A and divestitures require a security due-diligence review.",
    "Security must align to business strategy.",
    "Frameworks (ISO/NIST/COBIT/SABSA/PCI) give structure, not a guarantee."
  ],
  official: {
    outline: [
      "Alignment of the security function to business strategy, goals, mission, and objectives",
      "Organizational processes (e.g., acquisitions, divestitures, governance committees)",
      "Organizational roles and responsibilities",
      "Security control frameworks (e.g., ISO, NIST, COBIT, SABSA, PCI, FedRAMP)",
      "Due care / due diligence"
    ],
    note: "The bullets are the official ISC² sub-items for objective 1.3. The prudent-person framing, the RACI/steering-committee detail, the specific framework explanations, and the sample questions are added study material written to standard doctrine."
  },
  refs: [
    "(ISC)² CISSP CBK — Domain 1",
    "ISO/IEC 27001 and ISO/IEC 27014",
    "NIST Cybersecurity Framework 2.0 (Govern function)",
    "COBIT 2019; ISO/IEC 38500"
  ]
};

CISSP_MODULES["1.4"] = {
  title: "Understand legal, regulatory, and compliance issues (holistic context)",
  simple:
    "This objective is about how the law shapes security. Different countries and industries have different rules on cybercrime, who owns ideas (intellectual property), what data may cross borders, and how personal data (privacy) must be handled. Your job is to work out <b>which laws apply</b> to your specific data and systems and to design controls that satisfy them. It is called “holistic” because one company usually faces many overlapping laws at once — driven by where its data lives, where its customers live, and what industry it operates in.",
  deep: [
    "<b>Why it exists.</b> Security operates inside a legal system: non-compliance brings fines, lawsuits, and sometimes criminal liability. Laws also create obligations — breach notification, data-protection duties — that translate directly into control requirements. ISC² wants a professional who spots the legal dimension of a decision, not just the technical one.",
    "<b>Legal-system taxonomy (common-law framing).</b> Civil/code law relies on codified statutes with weak precedent (most of the world). Common law makes judicial precedent binding (US/UK/Canada) and is the most exam-tested. There is also religious law (e.g., Sharia) and customary law. Within these, criminal law treats society as the victim and demands proof beyond a reasonable doubt; civil/tort law is a private dispute decided on a preponderance of evidence with damages (statutory, compensatory, punitive); administrative/regulatory law is agency rules and powers.",
    "<b>The content areas.</b> Cybercrime and breach laws criminalize unauthorized access and impose breach-notification timelines (GDPR’s 72 hours, US state laws, HIPAA). Intellectual property splits into copyright (expression), patent (a public, time-limited invention), trademark (brand identity), and trade secret (protected only while secret). Import/export controls restrict strong cryptography and trade with sanctioned nations. Transborder data-flow rules stop data moving freely — GDPR bars EU transfers without adequacy, Standard Contractual Clauses, or Binding Corporate Rules, and localization laws (China’s PIPL, Russia) force data to stay in-country.",
    "<b>Privacy specifics.</b> GDPR (EU), CCPA/CPRA (California), PIPL (China), POPIA (South Africa), HIPAA (US health), and GLBA (US finance) each impose duties. The pivotal roles: the <b>controller</b> decides why and how personal data is processed and keeps accountability; the <b>processor</b> acts only on the controller’s instructions; the <b>data subject</b> is the individual. GDPR applies by the data subject’s location, not the server’s (extraterritorial reach).",
    "<b>Who is responsible.</b> Legal counsel, a privacy office / Data Protection Officer, and compliance determine obligations; security implements the controls; senior management is accountable. The data owner classifies; the controller/processor split governs privacy duties.",
    "<b>Common misconceptions.</b> That PCI DSS or SOC 2 is a law (both are contractual/industry). That only the country where data is stored applies (subject location and company presence also pull in laws). That controller equals processor. That a privacy notice equals consent. That IP types are interchangeable.",
    "<b>Relationship to governance and risk.</b> Compliance is a governance obligation and legal/regulatory exposure is enterprise risk — a major impact driver that shapes control selection (e.g., encryption to qualify for breach-notification safe harbors). Contracts add private obligations on top of the law.",
    "<b>Cross-domain.</b> Data residency and retention (D2), breach-notification duties inside incident response (D7), licensing of acquired code (D8), and privacy of identity data (D5) are all this objective in action.",
    "<b>How ISC² expects you to think.</b> Determine which law applies from data location, subject citizenship, and sector; comply with the strictest applicable requirement; remember the controller stays accountable in privacy; and know that criminal and civil matters carry different burdens of proof."
  ],
  objective:
    "Determine which laws, regulations, and contracts apply to your data and systems, and design controls that satisfy the strictest applicable obligations.",
  key:
    "Jurisdiction and data location decide the rules — and in privacy, the controller stays accountable.",
  realWorld:
    "A US-based SaaS company processes EU customers’ personal data in a US cloud region. GDPR applies because the data subjects are in the EU (extraterritorial scope). The company is a processor for its business customers (the controllers) and a controller for its own employee data. It signs Data Processing Agreements, uses Standard Contractual Clauses for EU→US transfers, appoints an EU representative, encrypts the data, and builds a 72-hour breach-notification runbook — while also meeting CCPA for California consumers. Legal and security co-design the controls, the DPO oversees them, and senior management is accountable.",
  examScenario:
    "A multinational bank stores German customers’ personal data in a US data center and suffers a breach exposing it. Regulators, customers, and executives all demand action. Which obligation should drive the first 72 hours, and which law governs the German customers’ data even though it is stored in the US? Weigh: only US state law applies; GDPR’s notification duties apply; wait for full forensics before notifying; handle PR first.",
  analogy:
    "Data carries a passport and a visa. Where a person is a citizen (the data subject’s location) and where they travel (where the data is stored and processed) both determine which countries’ rules apply at the border. You cannot move data across a border just because it is convenient — customs (transborder rules) may stop it.",
  traps: [
    "Believing PCI DSS or SOC 2 is a law — both are contractual/industry standards.",
    "Assuming only the country where data is stored applies — subject location and company presence also trigger laws (e.g., GDPR’s extraterritorial reach).",
    "Confusing controller (decides why/how, accountable) with processor (acts on instructions).",
    "Treating a privacy notice as consent — a notice informs, consent is an affirmative agreement.",
    "Mixing up IP: copyright (expression) vs patent (invention) vs trademark (brand) vs trade secret (secrecy, lost on leak).",
    "Confusing burdens: criminal is beyond a reasonable doubt; civil is a preponderance of evidence.",
    "Assuming the least-strict applicable law is enough — comply with the strictest.",
    "Forgetting that cryptography is subject to export controls."
  ],
  terms: [
    { t: "Criminal vs civil vs regulatory law", def: "State-prosecuted crime; private dispute over damages; agency enforcement of rules.", purpose: "Determines who acts and to what standard.", diff: "Beyond-reasonable-doubt vs preponderance vs agency powers.", exam: "Match the scenario to the correct legal track." },
    { t: "Tort", def: "A civil wrong (e.g., negligence) that one party sues another over.", purpose: "Basis for liability and damages.", diff: "A branch of civil law, not a third court system.", exam: "Suing a negligent vendor = a tort (civil)." },
    { t: "Damages (statutory / compensatory / punitive)", def: "Fixed-by-law / actual-loss / punishment-and-deterrence awards.", purpose: "Remedies in civil cases.", diff: "Set by statute vs make-whole vs punish.", exam: "Punitive punishes; compensatory makes whole." },
    { t: "Copyright / Patent / Trademark / Trade secret", def: "Protects expression / inventions / brand / secret information.", purpose: "Different IP protections.", diff: "Trade secrets last only while secret.", exam: "Match the asset to the right IP type." },
    { t: "GDPR", def: "The EU’s data-protection regulation.", purpose: "Protect EU residents’ personal data.", diff: "Applies by subject location; 72-hour breach notice; heavy fines.", exam: "Extraterritorial — server location doesn’t exempt you." },
    { t: "Controller vs Processor", def: "Decides why/how vs acts on instructions.", purpose: "Assign privacy accountability.", diff: "Controller keeps accountability.", exam: "A SaaS vendor is usually a processor for its customers." },
    { t: "Transfer mechanisms (adequacy / SCCs / BCRs)", def: "Legal bases to move personal data across borders.", purpose: "Enable lawful transborder flow.", diff: "Country-level vs contract vs intra-group.", exam: "Needed for EU→non-adequate-country transfers." },
    { t: "Breach notification", def: "A legal duty to report a breach within a set time.", purpose: "Protect and inform affected parties/regulators.", diff: "Timelines vary (GDPR 72h).", exam: "Drives incident-response timing." }
  ],
  pairs: [
    { t: "Criminal vs Civil vs Tort", def: "State prosecutes a crime; private parties dispute; a tort is the civil wrong being sued over.", similar: "All can arise from the same act, and evidence discipline matters in each.", diff: "Beyond reasonable doubt vs preponderance; a tort is inside civil law.", clue: "‘Prosecute/jail’ → criminal; ‘sue for damages’ → civil/tort.", trick: "Tort is a Type of civil, not a third court.", ex: "Prosecuting the hacker (criminal) vs suing the negligent vendor (a tort in civil court)." },
    { t: "Copyright vs Patent vs Trademark vs Trade secret", def: "Expression vs invention vs brand vs secret.", similar: "All protect intellectual property.", diff: "Patents are public and time-limited; trade secrets die on disclosure.", clue: "‘Logo’ → trademark; ‘formula kept secret’ → trade secret.", trick: "Copyright=Content, Patent=Product, Trademark=marK/brand, Secret=Secrecy.", ex: "Source-code text (copyright), a novel algorithm (patent), a logo (trademark), the Coca-Cola formula (trade secret)." },
    { t: "Controller vs Processor", def: "Decides purpose/means vs processes on instruction.", similar: "Both handle personal data and sign a DPA.", diff: "Controller sets purpose and keeps accountability.", clue: "‘Decides why the data is used’ → controller.", trick: "Controller Commands; Processor Performs.", ex: "A retailer (controller) and its email-marketing SaaS (processor)." },
    { t: "Privacy notice vs Consent", def: "One-way transparency vs an affirmative agreement.", similar: "Both relate to lawful processing.", diff: "A notice informs; consent is a chosen lawful basis.", clue: "‘Un-ticked opt-in box’ → consent.", trick: "Notice = Notify; Consent = agree.", ex: "A published privacy policy (notice) vs an opt-in checkbox (consent)." }
  ],
  cross: [
    { d: "D2 → Data residency & retention", why: "Laws dictate where data may live, how long it’s kept, and how it must be classified and protected." },
    { d: "D7 → Breach notification & incident response", why: "Legal notification timelines (e.g., 72 hours) become hard constraints on the incident-response process." },
    { d: "D8 → Licensing & IP in software", why: "Acquired code carries licenses and IP obligations that must be honored in the SDLC." },
    { d: "D5 → Privacy of identity data", why: "Personal data used for identity is subject to the same privacy laws and data-subject rights." },
    { d: "D1 → Governance & contracts", why: "Compliance is a governance duty, and contracts layer private obligations on top of statute." }
  ],
  frameworks: [
    { fw: "GDPR (Regulation 2016/679)", how: "The governing EU privacy law: controller/processor duties, lawful bases, data-subject rights, DPIAs, and 72-hour breach notification." },
    { fw: "ISO/IEC 27701", how: "A privacy extension to the 27001 ISMS that operationalizes controller/processor privacy controls (a PIMS)." },
    { fw: "ISO/IEC 27018", how: "Code of practice for protecting personally identifiable information in public clouds acting as processors." },
    { fw: "NIST Privacy Framework", how: "A risk-based structure (Identify-P, Govern-P, Control-P, Communicate-P, Protect-P) to manage privacy risk alongside the CSF." },
    { fw: "PCI DSS / HIPAA Security Rule", how: "Contractual (PCI) and statutory (HIPAA) mandates that translate into specific technical and administrative controls." }
  ],
  impl: {
    people: "Legal counsel, a privacy office / DPO, compliance, security, and data owners, with senior management accountable.",
    process: "Build a legal/regulatory inventory (which laws apply); map data (where it lives and flows); run DPIAs for high-risk processing; sign DPAs/SCCs; maintain records of processing and retention schedules; prepare breach-notification runbooks; and conduct vendor legal due diligence.",
    tech: "Data discovery and classification, data-flow mapping, DLP, encryption, consent-management, and records-of-processing tooling.",
    evidence: "Records of processing (ROPA), DPIAs, executed DPAs/SCCs, breach-notification logs, retention schedules, and compliance attestations.",
    mistakes: "Having no data map; missing transfer mechanisms; treating PCI as law; ignoring subject-location scope; lacking a breach runbook that meets the 72-hour clock; and confusing controller and processor duties."
  },
  q1: {
    stem: "A US company’s SaaS platform processes the personal data of customers located in the EU. Legal asks the security manager which regulation governs that data and what the highest-priority obligations are. What is the BEST response?",
    opts: [
      { t: "Only US state privacy laws apply because the servers are in the US.", ok: false, why: "GDPR has extraterritorial scope; the data subjects’ EU location triggers it regardless of where the servers sit." },
      { t: "GDPR applies because the data subjects are in the EU; establish a lawful basis, appropriate transfer mechanisms, and a breach-notification capability.", ok: true, why: "It scopes the obligation correctly by subject location and prioritizes the governing duties." },
      { t: "No regulation applies until the company opens an EU office.", ok: false, why: "GDPR applies to processing the data of EU residents whom the company targets, office or not." },
      { t: "PCI DSS governs because payment data may be involved.", ok: false, why: "PCI DSS is a contractual standard for cardholder data, not the governing privacy law for personal data." }
    ],
    best: "ISC² wants obligations scoped by the data subject’s location (GDPR’s extraterritorial reach), not by server location or corporate presence, and expects you to recognize PCI DSS as contractual rather than a privacy law."
  },
  q2: {
    stem: "A hospital’s IT administrator, angry over a demotion, downloads and sells a database of patient records. Leadership wants the strongest accountability for the theft itself. Which legal avenue and evidentiary standard best fit prosecuting the individual for the act?",
    opts: [
      { t: "A civil tort suit decided on a preponderance of evidence.", ok: false, why: "Civil action recovers damages at a lower burden but is not how you ‘prosecute’ the crime itself." },
      { t: "A criminal prosecution under the applicable computer-crime statute, requiring proof beyond a reasonable doubt.", ok: true, why: "Theft and unauthorized access are crimes prosecuted by the state, with the beyond-a-reasonable-doubt standard." },
      { t: "An internal administrative/HR action only.", ok: false, why: "HR discipline cannot deliver criminal accountability for a data-theft crime." },
      { t: "A regulatory fine under HIPAA against the individual.", ok: false, why: "HIPAA enforcement generally targets the covered entity; prosecuting the individual’s criminal act is criminal law." }
    ],
    best: "Prosecuting the individual for the theft is criminal law — the state prosecutes, and the standard is beyond a reasonable doubt. Civil action recovers money at a lower burden but isn’t prosecution; HR and regulatory routes don’t deliver criminal accountability for the act."
  },
  memory: {
    mnemonic: "IP = <b>C-P-T-S</b> (Copyright=expression, Patent=invention, Trademark=brand, Secret=secrecy). Burdens: Criminal = Convinced beyond doubt; Civil = Comparatively likely.",
    visual: "A border checkpoint stamping each data ‘passport’ based on the traveler’s citizenship (the data subject’s location), not where the luggage is stored.",
    oneLine: "Scope by data-subject location and sector, comply with the strictest, and remember the controller stays accountable.",
    fiveSec: "GDPR = subject location; controller accountable; criminal beyond-doubt, civil preponderance; PCI is contractual."
  },
  flash: [
    "Legal systems: civil/code (statutes), common (precedent — most tested), religious, customary.",
    "Criminal = state, beyond reasonable doubt; civil/tort = private, preponderance.",
    "IP: copyright=expression, patent=invention, trademark=brand, trade secret=secrecy.",
    "GDPR scopes by data-subject location (extraterritorial); 72-hour breach notice.",
    "Controller decides why/how and is accountable; processor acts on instructions.",
    "Transborder transfers need a mechanism (adequacy/SCCs/BCRs).",
    "PCI DSS and SOC 2 are contractual/industry, not laws.",
    "Comply with the strictest applicable requirement."
  ],
  official: {
    outline: [
      "Cybercrimes and data breaches",
      "Licensing and intellectual property requirements",
      "Import/export controls",
      "Transborder data flow",
      "Privacy (e.g., GDPR, CCPA, PIPL, POPIA)",
      "Contractual, legal, industry standards, and regulatory requirements"
    ],
    note: "The bullets are the official ISC² sub-items for objective 1.4. The legal-system taxonomy, the specific statutes and transfer mechanisms, and the sample questions are added study material — laws change and vary by jurisdiction, so verify current specifics."
  },
  refs: [
    "(ISC)² CISSP CBK — Domain 1",
    "EU General Data Protection Regulation (2016/679)",
    "ISO/IEC 27701 and ISO/IEC 27018",
    "NIST Privacy Framework; US HIPAA Security Rule"
  ]
};

CISSP_MODULES["1.5"] = {
  title: "Understand requirements for investigation types",
  simple:
    "When something goes wrong — a crime, a policy violation, a lawsuit, a regulator’s inquiry — you may have to investigate. There are different <b>types</b> of investigation, and each has its own rules, its own standard of proof, and its own person in charge. The type you are in decides how carefully you must handle evidence and what you actually have to prove. So the first move is to recognize which type you’re in — it tells you how to run everything else.",
  deep: [
    "<b>Why it exists.</b> The requirements — the evidence standard, who leads, whether law enforcement is involved, and what you must disclose — differ sharply by type. Treating a minor HR matter like a criminal case wastes effort, while treating a criminal case casually destroys the admissibility of your evidence.",
    "<b>The types (official).</b> Administrative (internal HR/policy matters, the lowest bar). Criminal (society/the state is the victim; proof beyond a reasonable doubt; law enforcement leads; strict chain of custody; warrants). Civil (a private dispute between parties; a preponderance of evidence; discovery/e-discovery; damages). Regulatory (an agency investigates compliance using its own rules and powers and can compel records). Industry-standard investigations (e.g., a PCI Forensic Investigator engagement) are contractual.",
    "<b>Burdens of proof (common-law framing).</b> Criminal is beyond a reasonable doubt (the highest bar). Civil is a preponderance of the evidence (more likely than not). Administrative is essentially ‘just cause’ or some evidence (the lowest). Regulatory standards vary by agency.",
    "<b>Evidence discipline.</b> Chain of custody matters in every type but is strictest for criminal because a courtroom will scrutinize it. To be admissible, evidence must be relevant, reliable/authentic, and legally obtained — which is why you work on a verified copy, hash it, and document every handoff, from minute one.",
    "<b>Who is responsible.</b> Administrative — HR, management, and security. Criminal — law enforcement leads; you preserve evidence and assist. Civil — legal counsel with forensic support. Regulatory — the agency with compliance/legal. Legal counsel typically sets overall strategy.",
    "<b>Common misconceptions.</b> That internal investigations don’t need evidence discipline (they can escalate to criminal or civil). That ‘tort’ is a third court system (it’s a branch of civil law). That security leads a criminal case (law enforcement does). That you should reboot or ‘clean up’ a compromised system (that destroys volatile evidence).",
    "<b>Relationship to governance/risk.</b> Which type applies flows from the legal systems in 1.4; mishandling evidence means losing the case and incurring liability, and investigations themselves carry privacy and legal risk that policy must anticipate through clear escalation criteria.",
    "<b>Cross-domain.</b> Digital forensics (D7) performs the actual collection and handling; audit findings (D6) can trigger an investigation; the legal systems in 1.4 set the burdens; and legal holds affect data retention (D2).",
    "<b>How ISC² expects you to think.</b> Identify the investigation type first — it dictates the evidence standard and handling. Preserve evidence to the highest standard the matter could reach, because an administrative issue can become criminal. Criminal is beyond a reasonable doubt; civil is a preponderance; and law enforcement leads criminal cases."
  ],
  objective:
    "Match the investigation type to its rules, its burden of proof, and its owner — and preserve evidence to the highest standard the matter might reach.",
  key:
    "The investigation type sets the standard of proof and how carefully evidence must be handled — decide it first.",
  realWorld:
    "A bank’s fraud team detects an employee funneling funds. The matter can become all four investigation types at once: administrative (terminate the employee), criminal (the state prosecutes the theft — police involved, beyond a reasonable doubt), civil (the bank sues to recover losses — preponderance), and regulatory (a banking-regulator inquiry). Because criminal prosecution is likely, forensics images the drives through write-blockers, hashes them, and maintains chain of custody from the outset, coordinating with law enforcement and counsel. Treating it as a mere HR matter would have destroyed the criminal case.",
  examScenario:
    "A security analyst discovers that an employee’s laptop appears to contain stolen trade secrets. Management hasn’t yet decided whether to fire the person, sue, or press charges. What should the analyst do FIRST with the evidence, and why does the uncertainty about the investigation type raise the bar? Weigh: reboot and inspect the laptop; image and hash it while preserving chain of custody; delete the files; or confront the employee.",
  analogy:
    "Investigation types are different courts and games played with the same ball. Criminal court, civil court, an HR hearing, and a regulator’s inquiry each have their own rules and their own ‘how sure must you be’ threshold. If you might end up in the strictest court, you handle the ball to that court’s rules from the start.",
  traps: [
    "Failing to identify the type first, then running an administrative process that later can’t support a criminal case.",
    "Confusing the burdens: criminal beyond a reasonable doubt vs civil preponderance vs administrative just cause.",
    "Thinking a tort is a separate court system — it’s civil law.",
    "Rebooting or ‘cleaning’ a suspect system, destroying volatile evidence and the chain of custody.",
    "Confusing entrapment (inducing a crime the person wouldn’t otherwise commit — a legal defense) with enticement (luring someone already willing — lawful).",
    "Assuming internal investigations can skip chain of custody.",
    "Believing security leads a criminal case — law enforcement does; you preserve and assist."
  ],
  terms: [
    { t: "Administrative / Criminal / Civil / Regulatory investigation", def: "Internal policy / state crime / private dispute / agency compliance matters.", purpose: "Each sets its own rules and standard.", diff: "Owner and burden differ per type.", exam: "Identify the type first." },
    { t: "Burden of proof", def: "How convincingly a case must be proven.", purpose: "Defines the evidentiary bar.", diff: "Beyond reasonable doubt > preponderance > just cause.", exam: "Match the bar to the type." },
    { t: "Chain of custody", def: "The documented, unbroken control of evidence.", purpose: "Prove evidence wasn’t altered.", diff: "Strictest in criminal cases.", exam: "A gap can render evidence inadmissible." },
    { t: "Admissibility", def: "Whether evidence can be used in a proceeding.", purpose: "Ensure evidence counts.", diff: "Requires relevant + reliable + legally obtained.", exam: "Illegally obtained evidence may be excluded." },
    { t: "Entrapment vs enticement", def: "Inducing an unwilling person vs luring a willing one.", purpose: "Distinguish a defense from lawful conduct.", diff: "Entrapment is a defense; enticement is legal.", exam: "‘Would not have otherwise’ = entrapment." },
    { t: "Exigent circumstances", def: "Warrantless action justified to prevent destruction of evidence or harm.", purpose: "Allow urgent preservation.", diff: "An exception to the warrant requirement.", exam: "Narrow and situation-specific." },
    { t: "e-Discovery", def: "The identification and production of electronically stored information in litigation.", purpose: "Meet civil discovery duties.", diff: "Civil-process specific.", exam: "Legal holds preserve relevant ESI." }
  ],
  pairs: [
    { t: "Criminal vs Civil vs Tort", def: "State-prosecuted crime vs private dispute vs the civil wrong sued over.", similar: "The same act can spawn all three; evidence discipline matters in each.", diff: "Beyond reasonable doubt vs preponderance; tort sits inside civil law.", clue: "‘Jail/prosecute’ → criminal; ‘sue for damages’ → civil/tort.", trick: "Tort is a Type of civil.", ex: "Prosecuting the intruder (criminal) vs suing the negligent vendor (a tort)." },
    { t: "Beyond reasonable doubt vs Preponderance vs Just cause", def: "Highest vs >50% vs some-evidence standards.", similar: "All are thresholds of proof.", diff: "They rise with the stakes of the proceeding.", clue: "Criminal → highest; administrative → lowest.", trick: "Doubt > Half > Some.", ex: "Convicting a hacker vs winning damages vs firing for policy violation." },
    { t: "Entrapment vs Enticement", def: "Inducing an unwilling person vs luring a willing one.", similar: "Both involve creating an opportunity to offend.", diff: "Entrapment is a defense; enticement is lawful.", clue: "‘Pushed a reluctant person’ → entrapment.", trick: "Entrapment traps the innocent.", ex: "Pressuring a reluctant employee (entrapment) vs a honeypot for a willing attacker (enticement)." }
  ],
  cross: [
    { d: "D7 → Digital forensics", why: "Forensics (7.1) performs the imaging, hashing, and chain-of-custody handling these investigations require." },
    { d: "D6 → Assessment & audit", why: "Audit or assessment findings frequently trigger an investigation." },
    { d: "D1 → Legal systems", why: "The legal frameworks in 1.4 define the burdens and procedural rules each investigation must follow." },
    { d: "D2 → Legal hold & retention", why: "Investigations impose legal holds that override normal data-retention/destruction schedules." }
  ],
  frameworks: [
    { fw: "ISO/IEC 27037", how: "Guidelines for the identification, collection, acquisition, and preservation of digital evidence — the backbone of defensible handling." },
    { fw: "ISO/IEC 27041/27042/27043", how: "Assurance of investigation methods, analysis/interpretation of evidence, and overall incident-investigation principles." },
    { fw: "NIST SP 800-86", how: "Integrating forensic techniques into incident response, including evidence acquisition order and handling." },
    { fw: "US Federal Rules of Evidence", how: "Define admissibility concepts such as the best-evidence rule and hearsay exceptions for business/computer records." }
  ],
  impl: {
    people: "Legal counsel (strategy), HR (administrative), law enforcement (criminal), forensic examiners, compliance (regulatory), and management (escalation decisions).",
    process: "Classify the investigation type early; preserve evidence to the highest plausible standard (image, hash, chain of custody); apply legal holds; document everything; coordinate with counsel and law enforcement; and report per legal duties.",
    tech: "Write-blockers, forensic imaging tools, hashing utilities, evidence-management/chain-of-custody systems, and e-discovery platforms.",
    evidence: "Forensic images with hash values, chain-of-custody forms, investigation reports, and legal-hold notices.",
    mistakes: "Acting on the original instead of a copy; no chain of custody; a late legal hold; treating a criminal matter as HR-only; unauthorized ‘hack-back’; and violating employee-privacy laws during collection."
  },
  q1: {
    stem: "A security analyst finds that a departing employee’s workstation likely contains exfiltrated trade secrets. Management has not decided whether to terminate, sue, or refer the matter to law enforcement. What should the analyst do FIRST?",
    opts: [
      { t: "Log in to the workstation and open the files to confirm the theft.", ok: false, why: "Working on the original alters timestamps and other metadata and breaks the chain of custody, potentially making the evidence inadmissible." },
      { t: "Create a forensically sound image, hash it, and preserve the chain of custody before any analysis.", ok: true, why: "Because the matter could become criminal or civil, you preserve evidence to the highest standard from the start." },
      { t: "Delete the trade-secret files to stop further leakage.", ok: false, why: "This destroys evidence and worsens the organization’s legal exposure." },
      { t: "Immediately confront the employee to obtain a confession.", ok: false, why: "This tips off the suspect and preserves nothing; it is not the correct first technical action." }
    ],
    best: "Because the investigation type is undecided and could reach criminal court (the strictest standard), ISC² expects you to preserve evidence to that bar first — image, hash, and chain of custody — before any examination. A and C destroy evidence; D is premature."
  },
  q2: {
    stem: "During a criminal investigation of an intrusion, a manager wants the incident-response team to lead the case and to reboot the compromised server to restore service quickly. What is the BEST guidance?",
    opts: [
      { t: "The IR team should lead the criminal case and reboot to restore uptime.", ok: false, why: "Law enforcement leads criminal cases, and rebooting destroys volatile evidence." },
      { t: "Preserve volatile and disk evidence (image/hash, document), coordinate with law enforcement who lead the criminal investigation, and restore service from clean media only after evidence is secured.", ok: true, why: "It respects correct ownership and the preserve-before-restore order." },
      { t: "Restore service first; forensics can be done from backups later.", ok: false, why: "Prioritizing uptime destroys live evidence and the chain of custody." },
      { t: "Have the IR team obtain a search warrant themselves.", ok: false, why: "Warrants are a law-enforcement/legal function, not an IR responsibility." }
    ],
    best: "In criminal matters, law enforcement leads and evidence preservation precedes remediation; rebooting destroys volatile evidence. B respects both ownership and the preserve-before-restore order, while the others mishandle one or both."
  },
  memory: {
    mnemonic: "Types = <b>A-C-C-R-I</b> (Administrative, Criminal, Civil, Regulatory, Industry). Burdens: Doubt > Half > Some.",
    visual: "Four courtroom doors, each with a different ‘how sure?’ meter above it; the same evidence bag must satisfy the strictest door.",
    oneLine: "Decide the type first, then preserve evidence to the highest bar the matter might reach.",
    fiveSec: "Criminal = beyond-doubt + police; civil = preponderance; admin = just-cause; chain of custody always."
  },
  flash: [
    "Types: Administrative, Criminal, Civil, Regulatory, Industry-standard.",
    "Burdens: criminal beyond reasonable doubt > civil preponderance > administrative just cause.",
    "Identify the investigation type FIRST.",
    "Chain of custody matters in all types; strictest for criminal.",
    "Work on a verified copy; hash it; never the original.",
    "Law enforcement leads criminal cases; you preserve and assist.",
    "A tort is a branch of civil law, not a third court.",
    "Entrapment (induce the unwilling — a defense) vs enticement (lure the willing — lawful)."
  ],
  official: {
    outline: [
      "Administrative",
      "Criminal",
      "Civil",
      "Regulatory",
      "Industry standards"
    ],
    note: "The five types are the official ISC² sub-items for objective 1.5. The burden-of-proof labels reflect a common-law/US framing and vary by jurisdiction; the evidence-handling detail (ISO 27037, chain of custody) and the sample questions are added study material."
  },
  refs: [
    "(ISC)² CISSP CBK — Domain 1",
    "ISO/IEC 27037 — digital evidence handling",
    "NIST SP 800-86 — forensic techniques in incident response",
    "US Federal Rules of Evidence"
  ]
};

CISSP_MODULES["1.6"] = {
  title: "Develop, document, and implement security policy, standards, procedures, and guidelines",
  simple:
    "This is the paperwork hierarchy that turns management’s intent into consistent action. A <b>policy</b> is a short, high-level, mandatory statement of what and why. <b>Standards</b> are the mandatory specifics (exact technologies and settings). <b>Procedures</b> are the mandatory step-by-step how-to. <b>Guidelines</b> are optional advice. Everything below a policy draws its authority from that policy — and only guidelines are optional.",
  deep: [
    "<b>Why it exists.</b> Without written, approved documents, security is inconsistent, unenforceable, and legally indefensible. The hierarchy lets leadership set direction once (policy) while the specifics (standards and procedures) can change without re-approving everything. It is the backbone of due care and of auditability.",
    "<b>The tiers, precisely.</b> A <b>policy</b> is mandatory, high-level management intent, approved by senior management and rarely changed; it comes in organizational (master), issue-specific (e.g., acceptable use), and system-specific flavors. A <b>standard</b> is a mandatory, specific requirement (‘AES-256’, ‘TLS 1.2+’, approved products) that ensures uniformity. A <b>baseline</b> is a mandatory minimum level of security for a category of system (a kind of standard). A <b>procedure</b> is mandatory, detailed, step-by-step instructions. A <b>guideline</b> is recommended, discretionary best practice.",
    "<b>Who is responsible.</b> Senior management approves and owns policy — that approval is exactly what makes it authoritative and enforceable. Subject-matter experts author standards and procedures; everyone must comply; and security/compliance maintains the set with periodic review and version control.",
    "<b>Common misconceptions.</b> That all four tiers are mandatory (guidelines are optional). That a procedure is high-level (it’s the detailed how). That an internal ‘standard’ is the same as an external standard like ISO, or the same as a baseline. That any written document is enforceable (it needs management approval, communication, and acknowledgment).",
    "<b>Relationship to governance.</b> Policy is the primary instrument of governance intent: it must align to strategy, be approved, communicated, enforced, and reviewed. Enforcement requires acknowledgment and defined consequences, which is what makes disciplinary action defensible.",
    "<b>Relationship to risk.</b> Policies and standards encode risk decisions and required controls; gaps and violations are risk, and the documented, approved set is evidence of due care.",
    "<b>Cross-domain.</b> Procedures drive daily operations and change management (D7); compliance and audit test against standards and baselines (D6); data-handling standards enforce classification (D2); and secure-coding standards govern development (D8).",
    "<b>How ISC² expects you to think.</b> Know the exact hierarchy and which tiers are mandatory. ‘Step-by-step how’ is a procedure; ‘optional/recommended’ is a guideline; ‘intent/why’ is a policy. Management approval is what gives a policy authority — so when a document ‘won’t hold up,’ the cause is usually that it was never approved, communicated, or acknowledged."
  ],
  objective:
    "Build and place documents in the mandatory policy → standard → procedure hierarchy (with baselines), plus optional guidelines, to turn management intent into consistent, enforceable, auditable action.",
  key:
    "Policy = mandatory intent; standards and procedures = mandatory specifics and steps; only guidelines are optional.",
  realWorld:
    "A hospital’s board approves an Information Security Policy stating that all systems handling PHI must protect confidentiality and integrity (the intent). A cryptographic Standard then mandates AES-256 at rest and TLS 1.2+ in transit and lists approved products. A hardening Baseline defines the minimum secure configuration for every clinical workstation. Procedures give IT the exact steps to encrypt a new laptop. A Guideline suggests staff consider a privacy screen in public areas. Auditors test the workstations against the Baseline, and management enforces the policy through signed acknowledgment and a disciplinary process.",
  examScenario:
    "A new CISO finds that the company’s acceptable-use ‘policy’ was emailed out by a mid-level manager, never approved by leadership, never acknowledged by staff, and is now being cited to discipline an employee. Why is this likely to fail, and which document-lifecycle steps were missed? Weigh: it’s fine because it’s written; it lacks management approval/communication/acknowledgment; just relabel it a guideline; or it’s actually a standard so it’s binding.",
  analogy:
    "The hierarchy is a country’s legal stack: the Constitution (policy — supreme intent, rarely changed), laws (standards — specific mandatory rules), regulations and manuals (procedures — exactly how to comply), and an advice column (guidelines — helpful but optional). You cannot enforce a ‘law’ the legislature never actually passed.",
  traps: [
    "Thinking all four documents are mandatory — guidelines are optional and discretionary.",
    "Calling detailed step-by-step content a ‘policy’ — that is a procedure.",
    "Confusing an internal Standard (mandatory spec) with an external standard (ISO) or with a Baseline (minimum level).",
    "Assuming any document is enforceable — it needs management approval, communication, and acknowledgment.",
    "Mixing up ‘guideline’ (recommended) with ‘baseline’ (mandatory minimum).",
    "Forgetting periodic review and version control — stale policies fail audits and legal challenges."
  ],
  terms: [
    { t: "Policy", def: "A mandatory, high-level statement of management intent.", purpose: "Set direction and authority.", diff: "The ‘what/why’, not the ‘how’.", exam: "Needs senior-management approval to be enforceable." },
    { t: "Standard", def: "A mandatory, specific requirement (technology/setting).", purpose: "Ensure uniformity.", diff: "Specific and mandatory, unlike a guideline.", exam: "Internal standard ≠ external ISO standard." },
    { t: "Baseline", def: "A mandatory minimum level of security for a class of system.", purpose: "Guarantee a security floor.", diff: "A minimum level, not step-by-step.", exam: "CIS Benchmarks are common baselines." },
    { t: "Procedure", def: "Mandatory, detailed, step-by-step instructions.", purpose: "Make execution consistent and repeatable.", diff: "The detailed ‘how’.", exam: "‘Steps 1–7’ = procedure." },
    { t: "Guideline", def: "Recommended, discretionary best practice.", purpose: "Offer helpful advice.", diff: "The only optional tier.", exam: "‘Consider / where feasible’ = guideline." },
    { t: "Acceptable Use Policy (AUP)", def: "Issue-specific policy governing acceptable use of systems.", purpose: "Set user behavior rules.", diff: "A type of policy.", exam: "Must be acknowledged to enforce." },
    { t: "Exception / waiver", def: "A documented, time-bound approved deviation.", purpose: "Handle justified non-compliance.", diff: "Requires approval and an expiry.", exam: "Undocumented deviation ≠ exception." }
  ],
  pairs: [
    { t: "Policy vs Standard vs Procedure vs Guideline", def: "Mandatory intent vs mandatory specifics vs mandatory steps vs optional advice.", similar: "All are governance documents that flow from policy.", diff: "Only guidelines are optional; procedures are the detailed how.", clue: "‘Step-by-step’ → procedure; ‘consider’ → guideline.", trick: "P-S-P-G: only the last is optional.", ex: "‘Encrypt laptops’ / ‘AES-256’ / ‘BitLocker steps 1–5’ / ‘consider a hardware token’." },
    { t: "Standard vs Baseline", def: "A specific mandatory requirement vs a mandatory minimum level.", similar: "Both are mandatory and drive uniformity.", diff: "A baseline is the floor for a system class; a standard is a specific rule.", clue: "‘Minimum secure config for all workstations’ → baseline.", trick: "Baseline = the Bottom line.", ex: "‘Use AES-256’ (standard) vs ‘the minimum hardened workstation build’ (baseline)." },
    { t: "Guideline vs Baseline", def: "Optional advice vs a mandatory minimum.", similar: "Both describe ‘good’ configurations.", diff: "One is discretionary, the other is required.", clue: "‘Recommended’ → guideline; ‘minimum required’ → baseline.", trick: "Guideline = Guidance; Baseline = Binding floor.", ex: "‘Consider MFA everywhere’ (guideline) vs ‘MFA required on all admin accounts’ (baseline/standard)." }
  ],
  cross: [
    { d: "D7 → Operations & change management", why: "Procedures run day-to-day operations, and changes to standards/baselines go through the change-management process." },
    { d: "D6 → Compliance & audit", why: "Auditors test systems against the organization’s standards and baselines to measure compliance." },
    { d: "D2 → Data handling", why: "Handling standards per classification level operationalize the data-protection policy." },
    { d: "D8 → Secure coding", why: "Secure-coding standards translate the software-security policy into enforceable developer requirements." },
    { d: "D1 → Governance & due care", why: "The approved policy set is the primary instrument of governance intent and evidence of due care." }
  ],
  frameworks: [
    { fw: "ISO/IEC 27001 (Annex A.5)", how: "Requires a documented set of information-security policies, approved by management and reviewed at planned intervals." },
    { fw: "NIST SP 800-53 (xx-1 controls)", how: "Every control family opens with a Policy and Procedures control (e.g., AC-1), embedding the hierarchy into the control set." },
    { fw: "NIST SP 800-12 / 800-100", how: "Foundational guidance on developing security policies, standards, and program structure." },
    { fw: "CIS Benchmarks", how: "Widely used configuration baselines that organizations adopt as their mandatory minimum standards." }
  ],
  impl: {
    people: "Senior management approves policy; subject-matter experts author standards and procedures; security/compliance maintains the set; all staff comply; internal audit tests.",
    process: "Draft → review → management approval → publish and communicate → acknowledge → enforce → periodically review with version control → manage exceptions with expiry dates.",
    tech: "A policy-management/GRC platform, e-signature/attestation tooling, configuration-baseline scanners (e.g., CIS benchmarks), and version control.",
    evidence: "An approved policy set with sign-off, acknowledgment records, baseline configurations and scan results, an exception register, and version/review history.",
    mistakes: "Unapproved or uncommunicated policies; no acknowledgment; stale, unreviewed documents; procedures that don’t match reality; guidelines written as if mandatory; and no exception process."
  },
  q1: {
    stem: "A company’s acceptable-use rules were drafted and emailed by a team lead, never formally approved by management, never acknowledged by employees, and are now being used to justify terminating an employee. From a policy-governance standpoint, what is the BEST assessment?",
    opts: [
      { t: "The rules are valid because they are written and were distributed.", ok: false, why: "Being written and emailed doesn’t make a policy enforceable; it lacks management approval and acknowledgment." },
      { t: "The rules are likely unenforceable because they were never approved by management, communicated as policy, or acknowledged — the document lifecycle (approve → communicate → acknowledge → enforce) wasn’t followed.", ok: true, why: "It identifies the missing authority and the skipped lifecycle steps that make disciplinary use indefensible." },
      { t: "Reclassify the document as a guideline so it becomes enforceable.", ok: false, why: "Guidelines are optional — that would make it even less enforceable." },
      { t: "It’s actually a standard, so it’s automatically binding.", ok: false, why: "Mislabeling it doesn’t create authority, and it still lacks approval and acknowledgment." }
    ],
    best: "A policy becomes authoritative only through senior-management approval, communication, and acknowledgment; without those, disciplinary use is indefensible. B names the exact lifecycle failure, while A overvalues mere existence, C weakens it further, and D mislabels it and still lacks approval."
  },
  q2: {
    stem: "An auditor asks how to classify three items: ‘all databases must use AES-256 encryption at rest,’ ‘run steps 1–7 in the DBA console to enable Transparent Data Encryption,’ and ‘consider enabling encrypted backups where feasible.’ How should they be classified?",
    opts: [
      { t: "All three are policies.", ok: false, why: "Policies are high-level intent, not specific settings or step-by-step instructions." },
      { t: "The AES-256 requirement is a standard; the 7-step console instructions are a procedure; the ‘consider…where feasible’ statement is a guideline.", ok: true, why: "Each maps to the correct tier — a specific mandatory spec, mandatory steps, and optional advice." },
      { t: "AES-256 = procedure; the steps = standard; the advice = baseline.", ok: false, why: "This reverses standard and procedure and mislabels the guideline." },
      { t: "All three are guidelines because they concern encryption details.", ok: false, why: "Two of them are mandatory (a standard and a procedure); only the ‘consider’ statement is a guideline." }
    ],
    best: "The tiers are defined by role, not topic: a specific mandatory requirement is a standard, mandatory step-by-step is a procedure, and optional advice is a guideline. B maps each correctly; the others confuse the tiers."
  },
  memory: {
    mnemonic: "Top-down <b>P-S-P-G</b> — ‘Policies Steer, Procedures Guide’ — only the final G (guideline) is optional.",
    visual: "A pyramid: Policy at the capstone, then Standards, then Procedures, with Guidelines drawn as a dotted box off to the side (optional).",
    oneLine: "Intent (policy) → specifics (standard) → steps (procedure) → advice (guideline); only advice is optional.",
    fiveSec: "Only guidelines are optional; step-by-step = procedure; management approval makes a policy real."
  },
  flash: [
    "Hierarchy: Policy → Standard → Procedure → Guideline (plus Baseline = mandatory minimum).",
    "Policy = mandatory high-level intent; needs management approval.",
    "Standard = mandatory specifics; Baseline = mandatory minimum level.",
    "Procedure = mandatory step-by-step how.",
    "Guideline = optional / recommended.",
    "Only guidelines are optional.",
    "Enforceability needs approval + communication + acknowledgment.",
    "Review and version documents; manage exceptions with an expiry."
  ],
  official: {
    outline: [
      "Security policy",
      "Standards",
      "Procedures",
      "Guidelines"
    ],
    note: "ISC² states objective 1.6 without further sub-bullets; the four document types named in the objective are the official content. Baselines, the document lifecycle (approve → communicate → acknowledge → enforce → review), and the sample questions are added study material written to standard doctrine."
  },
  refs: [
    "(ISC)² CISSP CBK — Domain 1",
    "ISO/IEC 27001 — Annex A.5 (policies)",
    "NIST SP 800-12 and SP 800-53 (xx-1 policy controls)",
    "CIS Benchmarks (baselines)"
  ]
};

CISSP_MODULES["1.7"] = {
  title: "Identify, analyze, assess, prioritize, and implement Business Continuity (BC) requirements",
  simple:
    "Business continuity is planning so the organization can keep operating — or recover quickly — when something disrupts it: a fire, an outage, a cyberattack, a pandemic. This objective is the front end: you run a <b>Business Impact Analysis (BIA)</b> to work out which business processes are most critical, how fast they must come back, and how much data you can afford to lose. Those numbers then drive every recovery plan and every dollar of recovery spending. BC starts with the business, not with IT.",
  deep: [
    "<b>Why it exists.</b> Disruptions are inevitable, and unplanned recovery is chaotic and slow. BC ensures the organization survives by deciding what matters most and setting recovery targets before disaster strikes. For many industries it is also a due-care and legal expectation.",
    "<b>Where it sits.</b> BC planning is a project with phases; this objective is the scoping front end — identify, analyze, assess, prioritize, and implement the requirements — and the BIA is its heart.",
    "<b>The BIA.</b> It identifies critical business functions and processes, their dependencies (people, systems, suppliers, facilities), and the impact of losing them <i>over time</i> — impact grows the longer a process is down. It produces the recovery metrics: <b>MTD</b> (Maximum Tolerable Downtime — the longest a process can be down before unacceptable harm), <b>RTO</b> (Recovery Time Objective — the target time to restore, which must be ≤ MTD), <b>RPO</b> (Recovery Point Objective — the maximum acceptable data loss measured in time), and <b>WRT</b> (Work Recovery Time — time to verify and catch up after systems return, where RTO + WRT ≤ MTD).",
    "<b>External dependencies.</b> Suppliers, utilities, telecom, and cloud providers are part of your continuity — their outage is your outage — which links BC to supply-chain risk management (1.11).",
    "<b>Who is responsible.</b> Senior management sponsors the program and sets priorities (BC is a business decision); a BC coordinator or committee runs the BIA; business-process owners supply the impact data; and IT/DR implements the technical recovery to meet the targets. Management approves the recovery strategy and the residual risk.",
    "<b>Common misconceptions.</b> That BC equals DR (DR is the IT subset; BC is the whole business). That the BIA is a technical/IT exercise (it measures business impact). That RTO equals RPO (time-to-restore vs data-loss). That you buy recovery technology first (the BIA sets the numbers first). That impact is static (it grows over time).",
    "<b>Relationship to governance and risk.</b> BC is a governance obligation with board sponsorship and policy, and the BIA quantifies the impact used in risk decisions (1.9); BC is, in effect, the risk treatment for availability.",
    "<b>Cross-domain.</b> Operations implements the DR strategies (7.10–7.13) that meet the BIA’s targets and tests them (7.12); process criticality feeds asset classification (D2); facilities host the recovery sites (D3); and risk analysis (D1) consumes the BIA’s impact figures.",
    "<b>How ISC² expects you to think.</b> The BIA comes first and drives strategy and spend — never pick technology before the BIA. RTO must fit inside MTD, and RPO is about data loss, not uptime. Senior management sets priorities because BC is business-led."
  ],
  objective:
    "Run a Business Impact Analysis to identify critical processes and set MTD/RTO/RPO/WRT, which then drive every recovery strategy and investment.",
  key:
    "The BIA comes first and sets the numbers (MTD/RTO/RPO); recovery technology is chosen to meet them, never before.",
  realWorld:
    "A bank’s BC program starts with executive sponsorship and a BIA workshop with each business line. The trading desk’s order-matching process has an MTD of two hours and an RPO near zero (no lost trades), so IT designs synchronous replication and a hot site. The corporate-newsletter process has an MTD of two weeks, so a cold recovery is fine. External dependencies (the market-data feed, telecom) get continuity clauses in their contracts. Senior management approves the recovery strategy and residual risk, the plan is tested (7.12), and the BIA is revisited annually.",
  examScenario:
    "An IT director wants to buy a mirrored hot-site solution for every system ‘to be safe,’ and requests budget this quarter. The CISO pushes back. From a BC standpoint, what should be completed before selecting and funding any recovery solution, and what outputs would justify (or reduce) that hot-site spend? Weigh: buy the hot site now; run the BIA to set MTD/RTO/RPO first; buy insurance; or ask IT to guess the RTOs.",
  analogy:
    "The BIA is ER triage for the business: before spending on ambulances and operating rooms (recovery solutions), you assess which ‘patients’ (processes) will die soonest without care (the shortest MTD) and treat those first. Buying equipment before triage wastes money on the wrong patients.",
  traps: [
    "Equating BC with DR — DR (IT recovery) is a subset of BC (the whole business).",
    "Running the BIA as an IT exercise — it’s a business-impact exercise led with process owners.",
    "Buying recovery technology before the BIA sets the targets.",
    "Confusing RTO (time to restore service) with RPO (acceptable data loss, in time).",
    "Setting RTO greater than MTD — RTO must be ≤ MTD, and RTO + WRT ≤ MTD.",
    "Treating impact as constant — the BIA measures impact growing over time.",
    "Ignoring external dependencies (supplier, utility, and cloud continuity).",
    "Thinking IT or the BC coordinator sets priorities — senior management/the business does."
  ],
  terms: [
    { t: "BIA (Business Impact Analysis)", def: "The analysis that ranks processes by impact over time and sets recovery targets.", purpose: "Drive the whole BC/DR strategy.", diff: "Business-impact focused, not threat-focused.", exam: "The BIA is done first." },
    { t: "MTD", def: "Maximum Tolerable Downtime before unacceptable harm.", purpose: "The outer limit for recovery.", diff: "The ceiling RTO must fit under.", exam: "RTO ≤ MTD." },
    { t: "RTO", def: "Recovery Time Objective — target time to restore a service.", purpose: "Set the recovery speed goal.", diff: "About uptime, not data.", exam: "Must be ≤ MTD." },
    { t: "RPO", def: "Recovery Point Objective — maximum acceptable data loss in time.", purpose: "Set backup/replication frequency.", diff: "About data, not uptime.", exam: "RPO near zero → replication." },
    { t: "WRT", def: "Work Recovery Time — time to verify and catch up after restore.", purpose: "Account for post-restore work.", diff: "Follows RTO.", exam: "RTO + WRT ≤ MTD." },
    { t: "Critical business function", def: "A process whose loss quickly causes unacceptable harm.", purpose: "Focus recovery on what matters.", diff: "Identified and ranked by the BIA.", exam: "Prioritized by shortest MTD." },
    { t: "External dependency", def: "A third party (supplier, utility, cloud) your operations rely on.", purpose: "Extend continuity beyond your walls.", diff: "Outside your direct control.", exam: "Links BC to supply-chain risk." }
  ],
  pairs: [
    { t: "BIA vs Risk assessment", def: "Impact over time and recovery needs vs threat × likelihood × impact.", similar: "Both feed planning and both consider impact.", diff: "The BIA measures business impact and sets recovery targets; the RA weighs threats.", clue: "‘MTD/RTO/RPO’ → BIA.", trick: "BIA = Business Impact; RA = Risk (threats).", ex: "‘Payroll intolerable after 48h’ (BIA) vs ‘phishing is likely + high impact’ (RA)." },
    { t: "MTD vs RTO vs RPO", def: "Downtime ceiling vs restore target vs data-loss ceiling.", similar: "All are time-based BC metrics from the BIA.", diff: "MTD is the limit, RTO the restore goal (≤ MTD), RPO the tolerable data loss.", clue: "‘Restore within’ → RTO; ‘lose no more than’ → RPO.", trick: "RTO looks forward (uptime), RPO looks backward (data).", ex: "MTD 4h, RTO 2h, RPO 15min → replicate every 15min, restore within 2h." },
    { t: "BCP vs DRP", def: "Keep the business running vs restore the IT.", similar: "Both are recovery plans driven by the BIA.", diff: "DRP is the IT subset of the broader BCP.", clue: "‘Manual workaround for the business’ → BCP; ‘rebuild the datacenter’ → DRP.", trick: "DR is a subset of BC.", ex: "Invoicing manually during an outage (BCP) vs failing over to the hot site (DRP)." }
  ],
  cross: [
    { d: "D7 → DR strategies & testing", why: "Recovery sites, backups, and HA (7.10–7.11) are engineered to meet the BIA’s RTO/RPO, and DR tests (7.12) validate them." },
    { d: "D2 → Asset classification", why: "Process criticality from the BIA feeds how assets are classified and prioritized for protection." },
    { d: "D3 → Facility & site design", why: "Physical facilities and recovery sites must be engineered to host the required recovery capability." },
    { d: "D1 → Risk management", why: "The BIA’s impact figures feed risk analysis (1.9), and BC is the treatment for availability risk." }
  ],
  frameworks: [
    { fw: "ISO 22301", how: "The Business Continuity Management System standard — governance, BIA, strategy, plans, exercising, and improvement." },
    { fw: "ISO/TS 22317", how: "Specific guidance on conducting the Business Impact Analysis itself." },
    { fw: "NIST SP 800-34", how: "The contingency-planning process for information systems, including BIA and recovery strategy selection." },
    { fw: "ISO/IEC 27031", how: "ICT readiness for business continuity — aligning IT recovery capability to business continuity needs." },
    { fw: "NIST CSF (Recover function)", how: "Outcomes for restoring capabilities and services after an incident, consuming BC/DR targets." }
  ],
  impl: {
    people: "An executive sponsor, a BC coordinator/committee, business-process owners (who supply impact data), IT/DR teams, facilities, and key suppliers.",
    process: "Charter and policy → identify processes and dependencies → run the BIA (impact over time; set MTD/RTO/RPO/WRT) → prioritize by criticality → select recovery strategies that meet the targets → document the plans → train and test (7.12) → maintain and review at least annually and on change.",
    tech: "BIA/BC tooling, replication and backup, hot/warm/cold sites or cloud DR, failover/HA, and emergency-notification systems.",
    evidence: "A BIA report with MTD/RTO/RPO per process, a criticality ranking, dependency maps, recovery-strategy approvals, test results, and current plans.",
    mistakes: "No executive sponsorship; an IT-only BIA; buying DR before the BIA; setting RTO greater than MTD; ignoring external dependencies; never testing or updating; and treating BC and DR as identical."
  },
  q1: {
    stem: "An IT director proposes buying a fully mirrored hot site for every system ‘to be safe’ and wants budget approval this quarter. As the security leader, what should you insist is completed FIRST, and why?",
    opts: [
      { t: "Approve the hot site immediately, because more resilience is always better.", ok: false, why: "Uniform hot sites are wasteful; spending before analysis isn’t risk-based, and many processes don’t need that level of recovery." },
      { t: "Complete a Business Impact Analysis to set each process’s MTD/RTO/RPO, then match recovery strategies (hot/warm/cold) to those targets.", ok: true, why: "The BIA determines which processes justify a hot site and which don’t, aligning spend to business need." },
      { t: "Buy cyber-insurance instead of any recovery capability.", ok: false, why: "A transfer doesn’t restore operations or meet availability targets." },
      { t: "Ask IT to estimate RTOs for each system and proceed.", ok: false, why: "Recovery targets come from business impact (process owners), not IT guesses." }
    ],
    best: "BC is business-led and BIA-first: the BIA sets MTD/RTO/RPO, which determine where a hot site is justified versus overkill. B aligns spend to impact, while A overspends blindly, C confuses transfer with recovery, and D sources the targets from the wrong place."
  },
  q2: {
    stem: "A retailer’s BIA finds that its e-commerce order system has an MTD of 4 hours and can lose no more than 5 minutes of transactions, while its internal HR portal has an MTD of 3 days and can tolerate a full day of data loss. Which recovery design BEST fits?",
    opts: [
      { t: "Give both systems identical nightly-backup, cold-site recovery.", ok: false, why: "Nightly backups give roughly a 24-hour RPO and slow restores, violating the order system’s 5-minute RPO and 4-hour MTD." },
      { t: "Order system: near-real-time replication with a hot/warm site (RPO ~minutes, RTO < 4h); HR portal: nightly backup with cold/warm restore (RPO ~1 day, RTO < 3 days).", ok: true, why: "It matches each system’s RTO/RPO to an appropriate, cost-justified strategy." },
      { t: "Give both systems synchronous replication and hot sites.", ok: false, why: "This over-provisions the HR portal, wasting money for no business benefit." },
      { t: "Order system: nightly backup; HR portal: real-time replication.", ok: false, why: "This inverts the requirements, missing the critical system’s targets." }
    ],
    best: "Recovery design must map to each process’s RTO/RPO from the BIA. B meets the order system’s tight targets while cost-optimizing the tolerant HR portal; A and D miss the critical targets, and C wastes money over-protecting a non-critical system."
  },
  memory: {
    mnemonic: "‘BIA Before Buying.’ Timeline rule: RTO ≤ MTD, and RTO + WRT ≤ MTD; RPO = data you can lose.",
    visual: "A timeline with the disaster at zero: RPO looks backward (data lost before the event) while RTO and WRT look forward (time to restore) — all of it must fit inside the MTD wall.",
    oneLine: "The BIA first sets MTD/RTO/RPO; buy recovery to meet them, never before.",
    fiveSec: "BIA first; RTO ≤ MTD; RPO = data-loss-in-time; BC ⊃ DR."
  },
  flash: [
    "BC keeps the business running; the BIA is its heart.",
    "The BIA is business-led and identifies critical processes and dependencies.",
    "Impact grows over time — the BIA measures that.",
    "MTD = max tolerable downtime; RTO = restore target (≤ MTD).",
    "RPO = max data loss in time; RTO + WRT ≤ MTD.",
    "The BIA sets the numbers BEFORE choosing or buying recovery solutions.",
    "Include external dependencies (suppliers, utilities, cloud).",
    "DR (IT recovery) is a subset of BC; management sets priorities."
  ],
  official: {
    outline: [
      "Business Impact Analysis (BIA)",
      "External dependencies"
    ],
    note: "The two bullets are the official ISC² sub-items for objective 1.7. The MTD/RTO/RPO/WRT definitions, the BIA-first heuristic, the framework references, and the sample questions are added study material written to standard doctrine."
  },
  refs: [
    "(ISC)² CISSP CBK — Domain 1",
    "NIST SP 800-34 Rev.1 — Contingency Planning",
    "ISO 22301 and ISO/TS 22317 (BIA)",
    "ISO/IEC 27031 — ICT readiness for business continuity"
  ]
};
