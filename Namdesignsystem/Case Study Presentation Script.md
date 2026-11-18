# AI4UI & Inspiro: Presentation Script (15 to 20 minutes)

**Audience:** design recruiters and hiring managers
**Pace:** about 140 words per minute, so roughly 2,600 words. Pause on the slide changes and the numbers.
**Source:** `index.html` (latest version of the case study) and `Portfolio _ DS.pdf`.

## Timing map

| # | Section | Time | Goal for the listener |
|---|---|---|---|
| 0 | Opening hook | 1 min | Know what this is and why it matters |
| 1 | Context and my role | 1.5 min | Understand the scope and my ownership |
| 2 | The problem | 2.5 min | Feel the business pain |
| 3 | Discovery and audit | 2.5 min | See how I research, not just design |
| 4 | Goals | 1 min | See a clear definition of success |
| 5 | Strategy and architecture (5 pillars) | 6 min | See my systems thinking and craft |
| 6 | Impact | 1.5 min | Remember the numbers |
| 7 | Learnings and close | 1.5 min | See reflection and growth |
| 8 | Q&A buffer | 2 to 3 min | |

---

## 0. Opening hook (1 min)

> "Imagine you're a bank. You spend about six months designing a set of screens. Then development takes another six months to a year. By the time your product ships, the market has already moved on. It's outdated on day one.
>
> That's the problem I'm going to walk you through today. It's a project where the design system wasn't just a library of components. It was an engine that lets code be generated from design.
>
> The project is called **AI4UI and Inspiro**. I'll take you through how we got there, the decisions I made, and what changed for the teams that used it."

**Delivery note:** Say the six-month and one-year numbers slowly. They set up everything that follows.

---

## 1. Context and my role (1.5 min)

> "First, some context. This was at **NAM Corporate Banking**. The product was growing fast, and the company was moving toward a **white-label platform**. That means one product that can be rebranded and shipped to multiple banks.
>
> There are two names you'll hear. **AI4UI** is a code generation framework. It automates and scales UI development. **Inspiro** is the custom UX design language I built to make AI4UI work. Its job is to make sure every design is **machine-readable and ready for code generation**.
>
> My role was UX designer. I **led the machine-readable design standards** for AI4UI and **architected Inspiro from the ground up**. I worked with three designers and a manager. The project ran about six months.
>
> It started as a proof of concept and grew into one of the most ambitious transformations in the organisation."

**Talking point if asked about team size:** The strategy and architecture decisions were mine. The scale of adoption came from working with designers, PMs and engineers.

> "I'd frame the mission in four goals: a token-first atomic architecture, a system that could be rebranded quickly, a machine-readable structure for component-level code generation using Locofy AI, and a handoff with zero visual or structural drift."

---

## 2. The problem (2.5 min)

> "The problem had two layers, and they fed each other.
>
> **Layer one is time to market.** Designing screens takes around six months. Development takes six months to a year. They happen one after the other, so every month spent hand-building screens and then hand-coding them is a month the market keeps moving. In banking and fintech, customer expectations shift quickly. A product that launches a year late feels old on arrival. *(These durations are illustrative figures from the case study, not measured results. I show them to explain the shape of the problem.)*
>
> **Layer two is why it couldn't get faster.** Underneath the timeline, the design foundation was fragmented. I summarised it as four gaps."

Walk through the four gaps with one line each:

1. **No shared mental model.** Each team designed in isolation. The result was inconsistency and duplication.
2. **No structural logic.** Components weren't built for machines or for reuse. Developers rebuilt everything by hand.
3. **No foundation for theming.** White-labelling was reinvented for every client. A new bank meant starting over.
4. **No governance framework.** Naming, structure and documentation were inconsistent. Delivery slowed, and the user experience fragmented.

> "So the question wasn't 'how do we make a nicer component library.' It was: **how do we cut chaos, create clarity, and bridge design with code?**"

**Delivery note:** This is the "why this matters to the business" moment. Recruiters and managers listen for whether you understand business outcomes, so state them plainly.

---

## 3. Discovery and audit (2.5 min)

> "Before I touched a single component, I zoomed out. I wanted to understand how design was actually being done across the platform. What I found wasn't just inconsistency. It was entropy.
>
> I ran **three discovery activities**."

### 3.1 Cross-team UX audit

> "First, a **cross-team UI audit** across tracks and modules. I compared button styles, input fields, table patterns and modals. I looked at spacing, colour usage and typography hierarchy. I also looked at the Figma files themselves: how components were grouped and how layers were named."

What the audit found:
- **Redundant components.** The same element was designed five different ways.
- **Manual overrides.** Auto-layout was often broken or not used at all.
- **Semantic misalignment.** Layer names didn't map cleanly to code.
- **Non-tokenised styling.** Values were hardcoded, with no foundation for theming.

### 3.2 Developer feedback and Locofy evaluation

> "Second, I partnered with front-end developers. We took the existing Figma files and ran them through **Locofy AI** to see how they performed. The results made the technical debt visible. Components failed to render properly because of improper grouping and nesting. Inconsistent naming made mapping to code unpredictable. And the lack of structure created manual work at conversion."

### 3.3 Stakeholder workshops

> "Third, **mini discovery sessions** with designers across tracks, product owners with client-specific branding needs, and developers facing delays in implementation."

> "The conclusion was clear. We didn't just need a design system. We needed a **code-aligned interface architecture** that could adapt, scale and generate output with precision."

**Delivery note:** This is the part to slow down on for hiring managers. It shows you validated the problem with evidence from three sources (design, engineering, stakeholders) before proposing a solution.

---

## 4. Goals (1 min)

> "I turned those four gaps into four goals, one for each."

| Gap | Goal |
|---|---|
| No shared mental model | **One unified design language.** A single source of truth every team designs from. |
| No structural logic | **Development-ready, machine-readable components.** UI generated, not hand-coded. |
| No foundation for theming | **Built for white-labelling.** Token-first, alias-driven theming with light and dark modes. |
| No governance framework | **Governed naming and structure.** A layered architecture and consistent documentation. |

> "Every decision from here on traces back to one of these four."

---

## 5. Strategy and architecture (6 min)

> "The question I asked myself was: **is this a design system or a code engine? Why not both?** The strategy has five pillars. I'll go through each, and for each I'll give you the result."

### Pillar 1: Token-first architecture (about 1.25 min)

> "Everything starts with tokens. All theming, spacing, typography and UI logic come from tokens. That means dark and light modes, client customisation and brand changes **never require changing component logic**.
>
> I designed a **three-tier token structure**."

- **Core tokens.** Raw values such as colour, spacing and typography.
- **Semantic tokens.** Intent-driven names such as `primary-action`, `error-bg`, `label-text`.
- **Alias tokens.** These let a single component be re-themed across multiple brands.

> "In Figma these are organised into typography and typescale tokens, shape tokens, and colour tokens split into **primitives, alias and mapped**."

**Why it matters:** *(show the tokens slide)* "A component never says 'purple'. It says 'primary action'. To rebrand, you change what primary action points to. That's why **rebranding timelines dropped from weeks to hours**."

### Pillar 2: Atomic and layered architecture (about 1.25 min)

> "Second, structure. I extended Atomic Design into a **four-layer architecture**."

1. **Foundation.** Tokens, grids and breakpoints.
2. **Components.** Universal atoms and molecules.
3. **Patterns.** Functional flows, such as a table with filters.
4. **Templates.** Page-level scaffolds.

> "Let me use the credit card example from the case study. An **atom** is a status tag, an icon or a toggle. A **molecule** combines atoms, for example a credit card column with the card logo, the last four digits and a 'New' tag. An **organism** composes those into a card row. A **template** is the full Credit Cards page. Each layer only uses the layer below it, so reuse is predictable and handoffs are clear."

**Result:** frictionless reuse, scalable composition and clean developer handoffs.

### Pillar 3: Machine-readable by design (about 1.5 min)

> "This is the pillar that makes the project unusual. Every component had to be **machine-readable, not just pixel-perfect**. I structured Figma files to align with **DOM semantics**, so Locofy AI could read them directly and engineers had less to interpret."

Standards we enforced:
- Consistent naming for layers and variants
- Strict use of auto-layout
- Clean hierarchy with logical nesting
- No hardcoded values. Only tokens and semantic styles

> "I called the working method **Frame them, Clean them, Name them, Group them**. Frame with auto-layout, do basic artboard hygiene, follow the naming convention, and keep grouping and ordering right.
>
> The naming convention itself is simple but strict. Prefixes tell you what a layer is. **Static** is for static text. **Dynamic** is for dynamic text. **Input** is for user input. **Submit** is a suffix for buttons that call an API. So a layer named `Dynamic-Account-Balance` tells both a developer and the AI that this value comes from data. *(Examples are representative, because of the NDA.)*
>
> I also used Figma **component properties**, meaning text, variants, booleans and swaps. Combined with the layer structure, that makes a file dev-ready with minimal friction."

**Result:** **95%+ component fidelity** on Locofy code export, with minimal post-processing.

**How the pipeline works** *(show the flow diagram)*:

> "The pipeline has three steps. In **Figma**, the product is structured into atoms, molecules, patterns and templates, following the Inspiro guidelines. In **Locofy**, layers are tagged and synced to the builder, which generates base code in React, HTML or Next.js. In **AI4UI**, the AI engine checks and optimises text naming and layer nomenclature so everything is cleanly structured for handoff. And there's a feedback loop. When something fails, we revise the guidelines and push back into Figma.
>
> This is also a shift from a 'design thinking' model to a **'design doing' model**, where we move quickly between the concept world and the real world instead of staying in the concept world."

### Pillar 4: Plugin-driven compliance checks (about 1 min)

> "Guidelines only work if people can follow them. So I built a **custom internal Figma plugin**, essentially a **design linter**."

It could:
- Scan for improper token usage, such as hardcoded values
- Flag inconsistent auto-layout and frame usage
- Enforce naming conventions
- Highlight missing semantic tokens
- **Score components for code-generation readiness**

> "Designers could audit their own work in real time, without waiting for a review. **Every component became Locofy-ready by design**, and we raised quality without adding review overhead."

### Pillar 5: Single source of truth (about 1 min)

> "Last is governance. Fragmentation had caused duplicate components and mismatched patterns, so I created a **centralised, governed Figma library** with standard documentation."

Rituals and standards:
- Component version tagging: **Draft** and **Final**
- Usage guidelines for new designers
- Regular **design system office hours** and an **RFC process** for changes

> "The outcome is that reuse became the default. **Design became a system, not just files.**"

**Closing line for this section:**
> "Every decision reinforced scale, clarity and code-friendliness. The system worked with the tools we used, not against them."

---

## 6. Impact (1.5 min)

> "So, did it scale? Here's what we measured."

| Metric | Value |
|---|---|
| Components | **80+** |
| Scalable design tokens | **120+** |
| Faster design handoff | **80%** |
| Code-ready accuracy | **95%+** |
| Faster development cycle time | **60%** |
| Consistency | **100%** |

> "Beyond the numbers, there's something harder to measure. It became a **new language of collaboration** between design and engineering. Rebranding went from weeks to hours. Handoff went from a bottleneck to a workflow. And scaling across markets became something teams could plan for, not dread."

**Delivery note:** Pick two numbers to emphasise, for example *80% faster handoff* and *weeks to hours for rebranding*. People remember two, not six.

---

## 7. Learnings and close (1.5 min)

> "Four things I took away."

1. **Code-ready components improved handoff.** Structuring components for machines reduced design-to-dev drift to near zero.
2. **A token-first architecture accelerated theming.** Core, semantic and alias tokens let us rebrand whole platforms in hours.
3. **Governance made reuse the default.** Version control and centralised libraries meant designers built new patterns instead of remaking old ones.
4. **Automation reinforced quality.** The plugin caught issues early without adding review overhead.

> "If I had to compress it into one lesson: a design system is only as strong as its rules, and rules only hold when tooling enforces them. Designers shouldn't have to be perfect. The system should make it easy to be right.
>
> This project changed how I think about my role. I'm not only designing interfaces. I'm designing the **systems that let interfaces be built faster, more consistently and at scale**.
>
> Thank you. I'd love to take questions."

---

## Likely questions and suggested answers

**1. What was your specific contribution versus the team's?**
"I led the machine-readable standards for AI4UI and architected Inspiro: the token model, the layer and naming conventions, and the compliance approach. The team and I then applied and extended it across tracks, working with PMs and engineering."

**2. How did you convince people to adopt it?**
"I started with evidence: the audit and the Locofy test showed the cost of the current state. I ran workshops with each group, so they shaped the rules. The plugin and office hours made following the rules easier than ignoring them."

**3. Why Locofy, and what are its limits?**
"Locofy was the tool we evaluated against. It generates code from Figma structure, so output quality depends directly on file quality. That dependency is why the naming, auto-layout and token rules matter. It also means a human still reviews the code."

**4. How did you measure the 80% and 60% improvements?**
Be ready with your actual baseline and method (for example, sprint data or handoff time before and after). If you don't have the exact method, say so, and describe what you compared. Don't invent one.

**5. What would you do differently?**
Suggested angle: "I'd bring engineers into the token naming earlier, and I'd instrument adoption, such as plugin usage and component reuse rate, from the first week so the impact story is even stronger."

**6. How did you handle dark mode and multiple brands?**
"Components reference semantic tokens, and semantic tokens point to alias tokens per theme or brand. So we swap the mapping, not the component."

---

## Items to double-check before you present

These differ between your two source files, so pick one and keep it consistent:

| Item | `Portfolio _ DS.pdf` | `index.html` | Used in this script |
|---|---|---|---|
| Component count | 60+ (impact), 80+ (overview) | 80+ | **80+** |
| Code-ready accuracy | 90%+ (impact), 95%+ (pillar 3) | 95%+ | **95%+** |
| Your role | Lead Designer, Design System, Visual Design | UX Designer | **UX Designer** (change to Lead Designer if that is accurate) |
| Team | Named teammate | 3 designers + manager | **3 designers + manager** |
| Duration | 6 months | not stated in the summary | **6 months** (PDF) |

Also confirm:
- **The 6-month and 6-to-12-month traditional timelines** are labelled "illustrative" in the case study. Present them as the typical industry pattern, not a measured result.
- **NDA.** Naming examples are representative. Say so once, early, so nobody asks for real screens.
- **The Inspiro PDF** (`Inspiro - UI that AI Understands Case Study.pdf`) has no extractable text, so this script is built from `index.html` and the portfolio PDF. If it contains content you want to cover (for example, extra slides), tell me and I'll add it.

---

## Delivery tips

- **Open with the hook, not your résumé.** The six-months-plus-a-year story gets attention immediately.
- **Tell the story in order:** problem, evidence, decision, result. Hiring managers follow the reasoning more than the visuals.
- **Show 3 visuals max per pillar.** Tokens, the atoms-to-template layers, and the pipeline diagram are the strongest.
- **Say "I" for decisions and "we" for delivery.** This keeps your ownership clear without overclaiming.
- **Rehearse to 17 minutes.** That leaves room for questions and for natural pauses.
