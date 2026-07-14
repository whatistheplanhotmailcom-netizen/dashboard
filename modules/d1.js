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
