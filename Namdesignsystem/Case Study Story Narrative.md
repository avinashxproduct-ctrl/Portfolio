# AI4UI & Inspiro: The Story (case study round narrative)

**For:** design managers and hiring managers
**Length:** about 20 to 25 minutes spoken, plus questions
**Source:** `index.html` (latest case study), `Portfolio _ DS.pdf`, and the earlier `Case Study Presentation Script.md`
**How to use it:** Read it aloud once, then compress each chapter into your own words. The *italic lines in brackets* are slide and demo cues. The **bold lines** are the ones to land.

---

## The shape of the story

Tell it as one arc, with seven chapters:

| Chapter | The beat | One-line takeaway |
|---|---|---|
| 1 | The hook | Banking products are old before they launch |
| 2 | The setting and my role | What AI4UI and Inspiro are, and what I owned |
| 3 | The real problem | Two problems that feed each other |
| 4 | The investigation | I found entropy, with evidence from three sources |
| 5 | The decision | Four gaps became four goals |
| 6 | The build | Five pillars, the heart of the story |
| 7 | The ending | What changed, what I learned |

If you only remember one sentence, remember this one: **"I wasn't building a component library. I was building a system that code could understand."**

---

## Chapter 1: The hook (about 1 minute)

*[Slide: cover. "Design system from Figma to code. Zero drift with Locofy AI." Let the three stat cards sit on screen: 95%+, 80+, 100%.]*

"Imagine you're a bank. Your team spends about six months designing a set of screens. Then development takes another six months, sometimes a full year. By the time the product goes live, customer expectations have already moved. It's **outdated on day one**.

I want to be clear that those numbers are illustrative. They're the typical pattern, not a measured result from one project. But anyone who has worked in enterprise banking will recognise the shape of it.

That's the problem I'm going to walk you through. It's a project where the design system wasn't just a library of components. It was an **engine that lets code be generated from design**.

The project is called **AI4UI and Inspiro**. I'll show you how we got there, the decisions I made along the way, and what changed for the teams who used it."

**Delivery:** Say "six months" and "a year" slowly. Pause after "outdated on day one."

**Say once, early:** "This is NAM Corporate Banking work under NDA. The names and screens you'll see are representative, not production data."

---

## Chapter 2: The setting and my role (about 1.5 minutes)

*[Slide: At a glance. Problem, solution and role cards. Then the Overview with the INSPIRO guidelines card.]*

"First, the setting. This was **NAM Corporate Banking**. It's a B2B SaaS web product, and the company was heading toward a **white-label platform**. That means one product that can be rebranded and shipped to multiple banks.

You'll hear two names.

**AI4UI** is a code generation framework. It bridges the gap between design and deployment by making UI development automated and scalable.

**Inspiro** is the custom UX design language I built to unlock it. Its job is simple to say and hard to do: make sure every design is **machine-readable and ready for code generation**.

My role was UX designer. I **led the machine-readable design standards for AI4UI**, and I **architected Inspiro from the ground up**. I worked with three other designers and a manager. It started as a proof of concept and grew into one of the most ambitious transformations in the organisation.

The outcome was a modular, token-driven system of **80+ components**, built on semantic tokens, strict naming and a layered atomic architecture. It became the **single source of truth** for design and code, backed by product managers and engineering.

I framed the mission as four things, and I'll come back to them:

1. A **token-first, atomic** design architecture
2. A system that could be **rapidly rebranded**
3. A **machine-readable** system, with Figma layer structures optimised for component-level code generation using **Locofy AI**
4. A handoff with **zero visual or structural drift**"

**Delivery:** "I" for decisions, "we" for delivery. That keeps ownership clear without overclaiming.

**Optional moment:** On the Overview slide, there are two Scrabble-style tiles (F and S) by the Inspiro card. If the interviewer notices them, you can say they're a nod to the Scrabble idea behind the compliance plugin you'll meet in Chapter 6.

---

## Chapter 3: The real problem (about 2.5 minutes)

*[Slide: Problem. Show the time-to-market bars first, then the four gap cards.]*

"The problem had two layers, and each one fed the other.

**Layer one is time to market.** Design takes around six months. Development takes six months to a year. They run one after the other. Every month spent hand-building screens and then hand-coding them is another month the market keeps moving. In banking and fintech, customer expectations shift fast, so a product that launches a year late feels old on arrival. *(On the slide, the third bar is red: 'Market has moved on.')*

**Layer two is why it couldn't get faster.** Underneath the timeline, the design foundation was fragmented. As the product scaled across teams and features, and toward white-labelling, the audit crystallised **four critical gaps**."

*[Walk through the four gap cards, one line each. Each card has a cause and an effect.]*

1. **No shared mental model.** Each team designed in isolation. *Effect: inconsistency and duplication across the product.*
2. **No structural logic.** Components weren't built for machines or for reuse. *Effect: unclear handoff, so developers rebuilt everything by hand.*
3. **No foundation for theming.** White-labelling was reinvented for each client. *Effect: rebranding for a new bank meant starting over.*
4. **No governance framework.** Naming, structure and documentation were inconsistent. *Effect: slower delivery and a fragmented user experience.*

"Put together: long handoff cycles made products outdated at launch, and without a shared, machine-readable foundation those cycles could not be shortened.

So the question was never 'how do we make a nicer component library?' It was: **how do we cut chaos, create clarity, and bridge design with code?**"

**Delivery:** This is the "why it matters to the business" moment. Hiring managers listen for whether you understand business outcomes, so say it plainly.

---

## Chapter 4: The investigation (about 2.5 minutes)

*[Slide: Discovery. Three cards, then the four findings, then the dark callout.]*

"Before I touched a single component, I zoomed out. I wanted to understand how design was actually being done across the platform. What I found wasn't just inconsistency. It was **entropy**.

I used three lenses, so I wasn't relying on my own opinion."

### Lens 1: Cross-team UX audit

"A UI audit across tracks and modules. I compared button styles, input fields, table patterns and modals. I compared layout spacing, colour usage and typography hierarchy. And I looked inside the Figma files themselves: how components were grouped, and how layers were named."

### Lens 2: Developer feedback and a Locofy evaluation

"I partnered with front-end developers and ran our existing Figma files through **Locofy AI**, to see how a machine would read what we'd drawn. The results made the technical debt visible:

- Components **failed to render** because of improper grouping and nesting
- **Non-uniform naming** made mapping to code unpredictable
- **Lack of structure** created manual overhead at conversion"

### Lens 3: Stakeholder workshops

"Mini-discovery sessions to break the silos, with designers across tracks, product owners who had client-specific branding needs, and developers who were facing delays turning designs into code."

### What came out of it

*[Slide: four finding cards.]*

"What emerged was a fragmented ecosystem:

- **Redundant components.** The same element, designed five different ways.
- **Manual overrides.** Auto-layout was often broken, or not used at all.
- **Semantic misalignment.** Layer names didn't map cleanly to code.
- **Non-tokenised styling.** Hardcoded values, with no foundation for theming."

*[Slide: dark callout.]*

"And that led to the conclusion that shaped everything after it: **we didn't just need a design system. We needed a code-aligned interface architecture** that could adapt, scale and generate output with precision."

**Delivery:** Slow down here. This is where a hiring manager decides whether you research or just design. Three sources (design, engineering, stakeholders) is the point.

---

## Chapter 5: The decision (about 1 minute)

*[Slide: Objective statement panel, then the four goal cards.]*

"The objective was one sentence: **reduce time to market with a system that code can understand.** Use AI-driven code generation, and close the four gaps behind the delay by building a modular, machine-readable design system that makes UI development automated and scalable.

I turned each gap into a goal. One for one."

| The gap | The goal |
|---|---|
| No shared mental model | **One unified design language.** A single source of truth every team designs from, so inconsistency stops at the root. |
| No structural logic | **Development-ready, machine-readable components.** UI is generated, not hand-coded. |
| No foundation for theming | **Built for white-labelling.** Token-first, alias-driven theming with light and dark modes. |
| No governance framework | **Governed naming and structure.** Strict naming, a layered architecture, consistent documentation. |

"Every decision from here on traces back to one of these four."

---

## Chapter 6: The build, five pillars (about 8 to 9 minutes)

*[Slide: Strategy. Headline: "A design system or a code engine? Why not both?"]*

"This is the part I'm proudest of. The question I kept asking was: **is this a design system, or a code engine? Why not both?** The audit became the foundation for a modular, machine-readable system that scales across teams, breaks silos, and serves designers and developers equally. There are five pillars. For each, I'll give you what we did and what it produced."

### Pillar 1: Token-first architecture (the foundation)

*[Slide: tokens screenshot of Figma variable collections.]*

"Everything starts with tokens. All theming, spacing, typography and UI logic come from tokens. That means dark and light mode, client customisation and brand changes **never require changing component logic**.

I designed a **three-tier token model**:

- **Core tokens:** raw values such as colour, spacing and typography.
- **Semantic tokens:** intent-driven names such as `primary-action`, `error-bg` and `label-text`.
- **Alias tokens:** these let one component be re-themed across multiple brands and UIs.

In Figma, you can see this in the variable collections: typeface, shape and typescale tokens, and colour tokens split into three tiers: **Primitives, Alias and Mapped**.

The way to think about it: a component never says 'purple.' It says 'primary action.' To rebrand, you change what primary action points to. That's why **rebranding timelines dropped from weeks to hours.**"

### Pillar 2: Atomic and layered architecture (the structure)

*[Slide: the four stacked images, one at a time: atoms and molecules, organism, template, page.]*

"Second, structure. I scaled Atomic Design into a **four-layer architecture**, from tokens to templates:

1. **Foundation:** tokens, grids and breakpoints
2. **Components:** universal UI atoms and molecules
3. **Patterns:** functional flows, such as a table with filters
4. **Templates:** page-level scaffolds

Let me show you with one real example, the Corporate Banking **Credit Cards** screen.

- **Atoms** are the smallest parts: a favourite icon, a toggle, a status tag, a radio button, an expand control, a logo, a 'more' menu.
- **Molecules** combine atoms. For example, the credit card column (logo, last four digits, 'New' tag) and the available limit column.
- An **organism** composes those into a full credit card table row.
- A **template** is the credits cards table, with search, filters, column headers, rows and pagination.
- And finally the **page**: the full Credit Cards screen with navigation, tabs and the table.

Each layer only uses the layer below it. So reuse is predictable, and handoffs are clear. **Result: frictionless reuse, scalable composition and clean developer handoffs.**"

### Pillar 3: Machine-readable by design (the one that makes this unusual)

"This is the pillar that makes the project different. Every component had to be **machine-readable, not just pixel-perfect.** I structured our Figma files to align with **DOM semantics**, so Locofy AI could read them directly, and engineers had less to interpret.

The standards we enforced:

- Consistent naming for layers and variants
- Strict use of auto-layout
- Clean hierarchy, with logical component nesting
- **No hardcoded values.** Only tokens and semantic styles

**The result was 95%+ component fidelity on Locofy code export, with minimal post-processing.**"

#### How the whole process works

*[Slide: interactive flow. Click through the four steps: 1 Figma, 2 Locofy, 3 AI Engine, 4 Feedback loop.]*

"The pipeline has three stages, and a loop.

1. **Figma.** The white-label product lives here, structured as atoms, molecules, patterns and templates. Designs must follow the Inspiro guidelines before they move on.
2. **Locofy.** Layers are tagged and synced to the builder, which generates base code in React, HTML or Next.js.
3. **AI engine.** Text naming and layer nomenclature are checked and optimised for AI4UI, so the output is cleanly structured for handoff.
4. **The feedback loop.** When something fails, we don't patch the code. We **revise the guidelines** and push the fix back into Figma. That's the dashed arrow at the top of the diagram, labelled 'Revised guidelines.'"

#### From design thinking to design doing

*[Slide: interactive diagram. Click Concept World, then Real World.]*

"This also changed how we worked. There's a familiar model: **design thinking** lives in the concept world. You start with why, then research, analyse, form a hypothesis, and experiment. Then comes the key point, **Build**, where the concept meets the real world.

What happens after Build is **design doing**: new ideas from feedback, reflection, and analysis of what actually happened, looping back round. Our job was to move quickly between those two worlds, instead of staying in the concept world."

#### The guidelines: Frame them, Clean them, Name them, Group them

*[Slide: banner, "After multiple iterations and trial and error, we were able to formalise a set of guidelines." Then the four expandable cards.]*

"Those guidelines didn't appear on day one. They came from **multiple iterations, trial and error.** In a nutshell: **Clean them, Frame them, Name them, Group them.**

- **Frame them:** design in frames and follow auto-layout diligently.
- **Clean them:** basic artboard-level hygiene. Nothing complicated. Many designers are already doing it.
- **Name them:** adhere to the correct naming conventions.
- **Group them:** follow the right grouping and ordering structure, so components and patterns are consistent."

*[Light moment, optional: on the slide there's a small auto-rickshaw with the line "mmm... that's some fine CNG you are burning." CNG is a pun on Clean, Name, Group. If you click it, the rickshaw drives. It's a good way to show the guidelines were made to be remembered, and that you can be human in a system.]*

#### Naming creates clarity

*[Slide: interactive naming demo. Hover over the UI on the left and the layer on the right lights up. Use the filter chips: all, static-, dynamic-, input-, action-.]*

"The most important rule is naming, because **naming creates clarity to interpret.** You break a component into its atomic elements, and you label each layer so a human and a machine both understand it. Effective layer naming significantly helps code generation.

It's strict but simple. Four prefixes:

- `static-` stays unchanged in the UI
- `dynamic-` updates from backend data. It's also used for all helper text beneath an input or dropdown
- `input-` changes in response to the user typing or choosing
- `action-` responds to user actions such as clicks or drags. Use it for any text element the user can interact with

Look at this loan payment card. 'Due in 9 days' is `dynamic-Tag-detail`. 'Loan Payment' is `static-payment-type`. The name, the account number and the balance are all `dynamic-`. The amount field is `input-amount`. And the button is `action-pay-now`.

So a layer called `dynamic-account-balance` tells both a developer and the AI that this value comes from data. *(These are representative examples because of the NDA. The `input-` and `action-` layers were added to the demo to illustrate their rules.)*"

#### Component properties

*[Slide: TextField component beside its Figma property panel.]*

"The last piece of this pillar is **Figma component properties**: text, variants, booleans and swaps. Here you can see a TextField with Size and States dropdowns. Combined with proper layer structure, they make files machine-readable and dev-ready, with minimal friction."

### Pillar 4: Plugin-driven compliance checks (automation)

*[Slide: four screens of the plugin.]*

"Guidelines only work if people can follow them. Rules on a page get ignored. So to operationalise the system and reduce human error, we built a **custom internal Figma plugin**, essentially a **design linter**. We called it the **Scrabble Compliance Checker.**

It audits tokens, layers and structure in real time. It can:

- Scan for improper token usage, such as hardcoded values
- Flag inconsistent auto-layout and frame usage
- Enforce naming conventions
- Highlight missing semantic tokens in components
- **Score components for code-generation readiness**

Walk through the four screens: first, the guidelines and instructions. Second, a list of selected frames, with Clean, Frame, Name and Group checks. Third, the 'Frame them' violations tab. And fourth, a 'Componentize changing elements' list. You can jump straight to the offending layers.

The point is that designers can audit themselves, in real time, without waiting for a review. **System rules get enforced at scale, designers are empowered with self-serve audits, and every component becomes Locofy-ready by design.**"

### Pillar 5: Single source of truth (governance)

"The last pillar is governance. Fragmentation across tracks had caused duplicate components, mismatched patterns and inconsistent visuals. So we created a **centralised, governed Figma library** with standard documentation, and rituals to keep it alive:

- **Component version tagging.** Every component is tagged **Draft** or **Final**, so nobody builds on something unfinished.
- **Usage guidelines** for new designers.
- Regular **design system hours** and an **RFC process** for proposing changes.

**Reuse became the default. Design became a system, not just files.**"

*[Slide: closing line for the section.]*

"This strategy didn't just organise the design system. It made it **intelligent, composable and development-ready.** Every decision reinforced scale, clarity and code-friendliness. The system worked with the tools we used, not against them."

---

## Chapter 7: The ending (about 3 minutes)

### The impact

*[Slide: six metric cards.]*

"So, beyond screens, did the system truly scale? This wasn't only a design system launch. It was a shift in how teams thought, built and shipped. Here's what we measured."

| Metric | Value |
|---|---|
| Components | **80+** |
| Scalable design tokens | **120+** |
| Faster design handoff | **80%** |
| Code-ready accuracy | **95%+** |
| Faster development cycle time | **60%** |
| Consistency | **100%** |

"Beyond the numbers, it became a **new language of collaboration** between design and engineering. Rebranding went from weeks to hours. Handoff went from a bottleneck to a workflow. And scaling across markets became something teams could plan for, not dread."

**Delivery:** Pick two numbers to emphasise: **80% faster handoff** and **weeks to hours for rebranding.** People remember two, not six.

### What I learned

*[Slide: four learning cards.]*

"Four things I took away.

1. **Code-ready components improved handoff.** Structuring components for machines reduced design-to-dev drift to near zero. Handoff went from a bottleneck to a seamless workflow.
2. **Token-first architecture accelerated theming.** Core, semantic and alias tokens let us rebrand entire platforms in hours, not weeks.
3. **Governance made reuse the default.** Centralised libraries with version control eliminated duplicate work. Designers spent time building new patterns, not remaking old ones.
4. **Automation reinforced quality.** The plugin acted as a design linter. It caught token misuse and structural inconsistencies early, and raised quality without adding review overhead."

### The one-line close

"If I had to compress it into one lesson: **a design system is only as strong as its rules, and rules only hold when tooling enforces them.** Designers shouldn't have to be perfect. The system should make it easy to be right.

This project changed how I think about my role. I'm not only designing interfaces. I'm designing the **systems that let interfaces be built faster, more consistently and at scale.**

Thank you. I'd love your questions."

*[Slide: Thank you. "AI4UI & Inspiro: Revolutionizing UX for Code Generated Interfaces."]*

---

## Likely questions and honest answers

**1. What was your contribution versus the team's?**
"I led the machine-readable standards for AI4UI and architected Inspiro: the token model, the layer and naming conventions, and the compliance approach. The three designers, the manager, PMs and engineers then applied and extended it across tracks."

**2. How did you get people to adopt it?**
"With evidence first. The audit and the Locofy test showed the cost of the current state. Then workshops, so each group helped shape the rules. And the plugin and design system hours made following the rules easier than ignoring them."

**3. Why Locofy, and what are its limits?**
"It generates code from Figma structure, so output quality depends directly on file quality. That dependency is exactly why naming, auto-layout and tokens matter. A human still reviews the code."

**4. How did you measure 80% faster handoff and 60% faster development?**
Use your real baseline and method (for example, handoff time or sprint data, before versus after). If you don't have the exact method, say so, and describe what you compared. **Don't invent one.**

**5. What would you do differently?**
"I'd bring engineers into token naming earlier. And I'd instrument adoption from week one: plugin usage, component reuse rate, so the impact story is even stronger."

**6. How did you handle dark mode and multiple brands?**
"Components reference semantic tokens, and semantic tokens point to alias tokens per theme or brand. We swap the mapping, not the component."

**7. Why is it called 'design doing'?**
"Because the loop after Build is where the real learning is: feedback, reflection, analysis. Staying in the concept world means you never find out if it works."

**8. What failed?**
"The Locofy evaluation of our original files: components didn't render, naming was unpredictable, structure was missing. That failure was the starting point. And the guidelines themselves took multiple iterations and trial and error before we formalised them."

---

## Check before you present

These are inconsistencies across your sources. Pick one and stay consistent.

| Item | What the sources say | What I used |
|---|---|---|
| **Your title** | `index.html` role card says "UX Designer". Its footer says "Senior UX Designer, 2024 to 2025". The portfolio PDF says "Lead Designer". | "UX Designer". Change it if another title is correct. |
| **Component count** | PDF says 60+ in impact and 80+ in overview. `index.html` says 80+. | **80+** |
| **Code-ready accuracy** | PDF says 90%+ in impact and 95%+ in pillar 3. `index.html` says 95%+. | **95%+** |
| **Duration** | The PDF says 6 months. `index.html` doesn't state it. | 6 months (PDF). The footer says 2024 to 2025, so confirm. |
| **Finacle logo** | The Inspiro card shows a Finacle logo, but the case study says NAM Corporate Banking. | Be ready to explain the relationship, and confirm that you can show it under your NDA. |
| **Traditional timelines** | Labelled "illustrative" on the slide. | Present as a typical pattern, not a result. |

Also:

- The `Inspiro - UI that AI Understands Case Study.pdf` file has no extractable text, so I couldn't read it. If it has slides that aren't in `index.html`, tell me and I'll add them.
- The 80%, 60% and 100% figures need a method you can defend (see question 4).

---

## Delivery tips

- **Open with the hook, not your résumé.** Six months plus a year gets attention.
- **Problem, evidence, decision, result.** In that order, every time. Managers follow your reasoning more than your visuals.
- **Show at most three visuals per pillar.** The strongest are the tokens screenshot, the atoms-to-page stack, the flow diagram, the naming demo and the plugin screens.
- **Use the interactive pieces sparingly.** The flow stepper and the naming hover demo are the two that earn their time. The rickshaw is a five-second smile, not a segment.
- **Rehearse to about 20 minutes.** That leaves room for questions and natural pauses.
