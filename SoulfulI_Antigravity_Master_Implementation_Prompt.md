# SoulfulI --- Antigravity Full Implementation Prompt

## Project

**Stitch Project:** SoulfulI Wellness Editorial Landing\
**Stitch Project ID:** `12466135132261216371`

The Stitch project is the primary visual reference. The existing local
project is the production codebase.

## Current State

The frontend foundation has already been created and verified:

-   React + Vite
-   React Router
-   Tailwind CSS
-   Stitch design tokens
-   EB Garamond
-   Manrope
-   Material Symbols
-   Shared components
-   Development server working
-   Production build passing

The project is located in the current Antigravity workspace.

------------------------------------------------------------------------

# MASTER IMPLEMENTATION INSTRUCTIONS

You are a Senior Frontend Engineer, UI Implementation Architect, and
Visual QA Engineer.

Your task is to turn the approved Stitch project into the actual
production frontend in the current codebase.

## Sources of Truth

Use these sources in this order:

1.  **Stitch project** --- visual source of truth
2.  **design.md** --- UI/UX rules and design system
3.  **PRD.md** --- product requirements and functionality
4.  **Existing codebase** --- technical architecture and reusable
    implementation

Do not invent product requirements.

Do not redesign approved Stitch screens.

Do not replace the existing technology stack unless a genuine technical
blocker requires it.

Do not create fake features just to fill space.

------------------------------------------------------------------------

# CRITICAL STITCH RULE

The Stitch project may be changed during development.

Whenever I say that a Stitch screen has been updated, changed,
regenerated, or redesigned:

1.  Use Stitch MCP to inspect the latest version.
2.  Treat the latest Stitch version as the new visual source of truth.
3.  Compare the current implementation against the latest design.
4.  Update the code to match the latest design.
5.  Do not preserve an older implementation merely because it already
    exists.
6.  Do not modify unrelated screens unless the updated design requires a
    shared-component change.

For the Home page specifically, the latest version of the Home screen in
Stitch must replace any previous Home implementation.

------------------------------------------------------------------------

# EXISTING SHARED FOUNDATION

Reuse the existing shared components wherever possible.

Current shared components include:

-   `HeaderNav`
-   `MobileNavDrawer`
-   `Footer`
-   `Button`
-   `PillTag`
-   `AudioPlayerWidget`

Do not duplicate these components inside individual pages.

If a shared component needs a small change to accurately support the
latest Stitch design, update the shared component instead of creating a
duplicate.

------------------------------------------------------------------------

# DESIGN SYSTEM

Maintain the established Mindful Editorial Sanctuary visual language.

## Typography

Headings/storytelling:

-   EB Garamond

Body/control text:

-   Manrope

Preserve the typography scale already configured in the project and
design.md.

## Colors

Use the established Stitch tokens rather than hardcoded random colors.

Primary visual direction:

-   Warm mineral linen / cream backgrounds
-   Deep contemplative mauve
-   Muted mauve
-   Warm charcoal typography
-   Warm taupe-gray secondary text
-   Soft editorial borders

Do not introduce unrelated colors.

## Layout

Respect the established:

-   Canvas width
-   Reading width
-   Prose width
-   Mobile gutters
-   Desktop gutters
-   Vertical spacing cadence
-   Border radius
-   Shadows
-   Responsive breakpoints

------------------------------------------------------------------------

# IMPLEMENTATION RULES

For every screen:

1.  Inspect the corresponding Stitch screen using Stitch MCP.
2.  Inspect relevant requirements in PRD.md.
3.  Inspect relevant design rules in design.md.
4.  Identify reusable existing components.
5.  Implement the page.
6.  Run the application.
7.  Verify the route.
8.  Check console/runtime errors.
9.  Check responsive behavior.
10. Compare visually with Stitch.
11. Fix discrepancies.
12. Only then move to the next screen.

Do not implement every screen in one uncontrolled operation.

Work in logical phases.

------------------------------------------------------------------------

# PHASE 1 --- HOME SANCTUARY

Route:

`/`

Stitch screen:

**SoulfulI --- Home Sanctuary**

IMPORTANT:

The Home page has been updated in Stitch.

Use the **latest/current Home screen from Stitch MCP**, not an older
version or previous implementation.

Implement the current design exactly as represented in Stitch.

Verify:

-   Header
-   Hero
-   Hero typography
-   Hero imagery
-   CTA placement
-   Philosophy content
-   Pillar/tenet sections
-   EQ Audit CTA
-   Featured editorial content
-   Newsletter area
-   Footer
-   All responsive layouts
-   Mobile navigation
-   Spacing and typography
-   Visual hierarchy
-   Image sizing/cropping

Do not reuse assumptions from the previous Home design if the new Stitch
design differs.

After completing Home:

-   run `npm run build`
-   verify `/`
-   check desktop
-   check tablet
-   check mobile
-   compare with Stitch
-   fix visual differences

Stop and verify before continuing.

------------------------------------------------------------------------

# PHASE 2 --- OUR STORY

Route:

`/our-story`

Stitch screen:

**SoulfulI --- Our Story**

Implement the latest Stitch version.

Include the specified:

-   Brand origin/story
-   Founder letter
-   Somatic research notes
-   Living tenets
-   Editorial pull quotes
-   Images/assets
-   Navigation
-   Footer
-   Responsive layouts

Match Stitch closely.

Do not invent additional sections.

------------------------------------------------------------------------

# PHASE 3 --- WHY SOULFULI

Route:

`/why-soulfuli`

Stitch screen:

**SoulfulI --- What Makes Us Different**

Implement the latest Stitch version.

Preserve the intended comparison/differentiation between SoulfulI's
unhurried somatic practice and productivity/self-care alternatives.

Match:

-   Editorial hierarchy
-   Comparison content
-   Typography
-   Cards/sections
-   CTA
-   Responsive behavior
-   Navigation/footer

Do not invent competitor claims or product features.

------------------------------------------------------------------------

# PHASE 4 --- LIVING OFFERINGS

Main route:

`/living-offerings`

Detail route:

`/living-offerings/eq-audit`

## Living Offerings

Implement:

-   Offerings overview
-   EQ Audit
-   Somatic Soundscapes
-   Guided Stillness
-   Reflective Journaling
-   Relevant CTAs
-   Responsive layouts

## EQ Audit Detail

Implement:

-   Offering introduction
-   Curriculum/detail content
-   Audio preview
-   Guide information
-   Pricing tiers
-   Relevant CTAs
-   Responsive behavior

Use Stitch for exact visual layout.

------------------------------------------------------------------------

# PHASE 5 --- EQ AUDIT INTERACTIVE FLOW

Routes:

`/eq-audit/assessment`

`/eq-audit/results`

This phase contains actual interaction.

## Assessment

Implement:

-   Multi-step questions
-   Progress indicator
-   Radio/selection controls
-   Slider controls if present in Stitch
-   Next/back navigation where specified
-   Current-step state
-   Validation
-   Responsive behavior

Use React state for the frontend interaction.

Do not add backend persistence unless explicitly required later.

## Results

Implement:

-   Synthesis/calculation state
-   Personalized archetype
-   Score summary
-   Result content
-   Download report CTA if represented in the requirements/design

The calculation must be deterministic and based on the requirements.

Do not invent scoring rules that are not defined.

If scoring rules are missing, stop and report the missing requirement
rather than silently inventing business logic.

------------------------------------------------------------------------

# PHASE 6 --- JOIN COMMUNITY

Route:

`/join-community`

Confirmation:

`/join-community/confirmation`

Error state:

`/join-community` with inline validation state

Implement:

-   Subscription form
-   Tier cards
-   Free Monthly Letter
-   Full Sanctuary Practice
-   Input fields
-   Validation
-   Error state
-   Success/confirmation state
-   Inbox reminder
-   Responsive behavior

Do not connect to a real backend or payment system unless explicitly
requested.

Use frontend/mock submission behavior only where backend functionality
has not yet been implemented.

------------------------------------------------------------------------

# PHASE 7 --- MOBILE NAVIGATION / GLOBAL STATES

Ensure the global navigation works across all pages.

Verify:

-   Desktop header
-   Mobile drawer
-   Open/close behavior
-   Navigation links
-   Search field if represented
-   Audio preview if represented
-   Focus states
-   Keyboard accessibility
-   Overlay behavior
-   Correct active/current route

Do not duplicate navigation code inside pages.

------------------------------------------------------------------------

# PHASE 8 --- 404

Route:

`*`

Implement:

**SoulfulI --- 404 Sanctuary Wayfinding**

Use the latest Stitch design/reference.

Include the appropriate:

-   Editorial message
-   Wayfinding/return links
-   Header/footer behavior where appropriate
-   Responsive layout

------------------------------------------------------------------------

# ROUTE CHECKLIST

The completed frontend should support:

-   `/`
-   `/our-story`
-   `/why-soulfuli`
-   `/living-offerings`
-   `/living-offerings/eq-audit`
-   `/eq-audit/assessment`
-   `/eq-audit/results`
-   `/join-community`
-   `/join-community/confirmation`
-   `*` 404

------------------------------------------------------------------------

# RESPONSIVE QA

Every page must work on:

## Desktop

Check:

-   Full-width layouts
-   Maximum content widths
-   Navigation
-   Grid alignment
-   Image proportions
-   Typography
-   Section spacing

## Tablet

Check:

-   Navigation transition
-   Grid changes
-   Content widths
-   Typography scaling
-   Image behavior
-   Touch targets

## Mobile

Check:

-   Mobile drawer
-   No horizontal overflow
-   Correct typography
-   Correct spacing
-   Stacked sections
-   Button widths
-   Form usability
-   Image cropping
-   Touch target sizes
-   Footer layout

Never solve responsive problems by simply shrinking everything.

Follow the Stitch mobile layouts.

------------------------------------------------------------------------

# VISUAL QA

After implementation, perform a visual comparison against Stitch.

Check every screen for:

-   Overall layout
-   Visual hierarchy
-   Typography
-   Font weight
-   Font size
-   Line height
-   Colors
-   Backgrounds
-   Spacing
-   Margins
-   Padding
-   Borders
-   Radius
-   Shadows
-   Images
-   Image cropping
-   Icons
-   Buttons
-   Forms
-   Cards
-   Navigation
-   Footer
-   Responsive behavior

Fix the highest-impact visual differences first.

Do not redesign the UI during QA.

------------------------------------------------------------------------

# FUNCTIONAL QA

Verify:

-   All routes work
-   Navigation works
-   Mobile drawer works
-   Buttons navigate correctly
-   Forms validate correctly
-   EQ Audit progresses correctly
-   Assessment state is preserved during the flow
-   Results calculate correctly according to defined rules
-   Audio widget controls work where implemented
-   Confirmation state works
-   404 works
-   No broken links
-   No broken images
-   No console errors

------------------------------------------------------------------------

# CODE QUALITY

Maintain:

-   Reusable components
-   Clear component responsibilities
-   Sensible folder structure
-   No unnecessary duplication
-   No dead code
-   No unnecessary dependencies
-   Existing project conventions
-   Accessible semantic HTML
-   Keyboard accessibility
-   Clear naming

Do not rewrite working code without a reason.

Do not create one huge component containing the entire website.

------------------------------------------------------------------------

# BUILD VERIFICATION

At the end of each major phase:

Run:

`npm run build`

Also run the development server and verify the relevant route.

Before declaring the frontend complete:

1.  Production build passes.
2.  No console errors.
3.  All routes work.
4.  Responsive behavior works.
5.  Stitch visual comparison has been completed.
6.  Shared components are consistent.
7.  No obvious accessibility problems remain.

------------------------------------------------------------------------

# WORKING METHOD

Follow this sequence:

``` text
Latest Stitch Screen
        ↓
Inspect design
        ↓
Check PRD
        ↓
Check design.md
        ↓
Check existing components
        ↓
Implement
        ↓
Run website
        ↓
Visual comparison
        ↓
Fix
        ↓
Build verification
        ↓
Next screen
```

Do not skip the visual comparison stage.

------------------------------------------------------------------------

# IMPORTANT CHANGE HANDLING

If I later say:

"Home page changed in Stitch"

you must:

1.  Inspect the latest Home screen through Stitch MCP.
2.  Identify what changed.
3.  Compare against the current implementation.
4.  Update only what is necessary.
5.  Preserve existing functionality.
6.  Run the Home page.
7.  Verify responsive behavior.
8.  Run the build.

Do not ask me to manually describe the new design if Stitch MCP can
provide it.

The same rule applies to every Stitch screen.

------------------------------------------------------------------------

# FINAL DELIVERY

When all frontend phases are complete, provide:

## Completed Pages

List every completed route.

## Components

List reusable components created/updated.

## Functionality

List implemented interactions.

## Verification

Report:

-   `npm run build`
-   Route verification
-   Responsive verification
-   Visual QA
-   Console/runtime status

## Remaining Issues

List only genuine remaining issues or requirements.

Do not claim something is complete if it has not been verified.

------------------------------------------------------------------------

# CURRENT TASK

The immediate task is:

**Implement the latest updated Home Sanctuary design from Stitch into
the existing React/Vite project.**

Do not start the other pages until the updated Home page has been
implemented and visually verified.
