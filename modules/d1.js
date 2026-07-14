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
