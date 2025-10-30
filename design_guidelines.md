# Design Guidelines: Weather API Documentation Website

## Design Approach

**Selected Approach:** Design System - Inspired by Stripe API Documentation and Tailwind CSS Documentation

**Justification:** API documentation requires clarity, scannability, and efficient information access. Developers prioritize quick reference over visual storytelling. This utility-focused application benefits from established documentation patterns that reduce cognitive load.

**Key Design Principles:**
- Information hierarchy over decoration
- Scannable content with clear visual separation
- Progressive disclosure - show essential info first
- Consistent, predictable navigation patterns
- Developer-friendly code presentation

## Typography

**Font Stack:**
- Primary: Inter (via Google Fonts CDN) - excellent readability at all sizes
- Monospace: JetBrains Mono (via Google Fonts CDN) - optimized for code

**Type Scale:**
- Hero Heading: text-5xl font-bold (48px)
- Page Titles: text-4xl font-bold (36px)
- Section Headings: text-2xl font-semibold (24px)
- Subsection Headings: text-xl font-semibold (20px)
- Body Text: text-base (16px)
- Small Text: text-sm (14px)
- Code: font-mono text-sm

**Hierarchy Rules:**
- Use font-semibold for all headings
- Body text uses regular weight (400)
- Code inline: font-mono with subtle background differentiation
- Endpoint URLs: font-mono text-base font-medium

## Layout System

**Spacing Primitives:** Consistently use Tailwind units of 2, 4, 6, 8, 12, and 16
- Component padding: p-4 to p-8
- Section spacing: py-12 to py-16
- Element gaps: gap-4 to gap-8
- Container margins: mx-4 to mx-8

**Grid Structure:**
- Home Page: Single column, max-w-6xl centered
- Documentation Page: Two-column layout (sidebar + content)
  - Sidebar: w-64 fixed on desktop, collapsible on mobile
  - Content area: flex-1 with max-w-4xl for optimal reading
- Mobile: Stack to single column with hamburger navigation

**Container Strategy:**
- Page wrapper: min-h-screen
- Content sections: max-w-6xl mx-auto px-4 md:px-8
- Code blocks: Full width of content column
- API cards: grid-cols-1 md:grid-cols-2 for endpoint overview

## Component Library

### Navigation
- **Header:** Sticky top navigation (h-16) with logo left, nav links right
- **Mobile:** Hamburger menu icon, slide-in drawer
- **Desktop:** Horizontal nav items with subtle hover underline
- **Active state:** Font-semibold with visual indicator

### Home Page Components
- **Hero Section:** 
  - Height: min-h-[60vh] not full viewport
  - Layout: Centered content with max-w-3xl
  - Elements: Title, subtitle (text-xl), primary CTA button, secondary link
  - No background image - focus on typography and clear value proposition

- **Features Grid:**
  - 3 columns on desktop (grid-cols-1 md:grid-cols-3)
  - Icon + Title + Description pattern
  - Icons: Use Heroicons via CDN (outline style)
  - Spacing: gap-8 between cards, p-6 within cards
  - Each card: Subtle border, rounded-lg

- **Quick Start Section:**
  - Code example with syntax highlighting
  - Copy button positioned top-right of code block
  - Step-by-step numbered list before code
  - Spacing: py-16 section padding

### Documentation Page Components

- **Sidebar Navigation:**
  - Sticky positioning (sticky top-16)
  - Nested list structure with indentation
  - Clear visual hierarchy: Section headers (font-semibold), sub-items (regular)
  - Active page indicator with visual accent

- **API Endpoint Cards:**
  - Border with rounded-lg corners
  - Header: Method badge (GET/POST) + endpoint URL
  - Content sections: Description, Parameters table, Response format
  - Spacing: p-6 internal, mb-8 between cards

- **Method Badges:**
  - Inline-block badges with rounded-full
  - Size: px-3 py-1 text-xs font-semibold uppercase
  - Different visual treatment for GET/POST/PUT/DELETE

- **Parameter Tables:**
  - Full-width responsive tables
  - Columns: Name (font-mono), Type, Required, Description
  - Row spacing: py-3 with border-b
  - Header row: font-semibold with distinct background

- **Code Blocks:**
  - Pre-formatted with rounded-lg borders
  - Padding: p-4
  - Font: font-mono text-sm
  - Copy button: Absolute positioned top-right (top-2 right-2)
  - Include language label (top-left)
  - Multiple code examples: Use tab interface

- **Tabbed Code Examples:**
  - Tab bar: flex gap-2 with border-b
  - Individual tabs: px-4 py-2 rounded-t-lg
  - Active tab: Distinct styling, inactive tabs subdued
  - Content area: Smooth transition between tabs

### Common Components

- **Buttons:**
  - Primary: px-6 py-3 rounded-lg font-semibold
  - Secondary: px-6 py-3 rounded-lg with border
  - Icon buttons: p-2 rounded-lg for copy, expand actions
  - Always include proper hover/active states

- **Cards:**
  - Standard: rounded-lg with border, p-6
  - Hover state: Subtle elevation change via shadow
  - Spacing: mb-6 between stacked cards

- **Input Fields (if needed for search):**
  - Height: h-10
  - Padding: px-4
  - Border: rounded-lg with focus ring
  - Icon: Left-aligned search icon

### Footer
- Compact footer: py-8
- Two-column on desktop: Links left, social/info right
- Single column on mobile
- Links: text-sm with subtle hover underline
- Include: Documentation, API Status, GitHub, Support

## Responsive Behavior

**Breakpoints:**
- Mobile: Base (< 768px) - Single column, stacked layout
- Tablet: md (768px) - Two columns where appropriate
- Desktop: lg (1024px+) - Full layout with sidebar

**Mobile Adaptations:**
- Hide sidebar, show hamburger menu
- Stack all grid layouts to single column
- Reduce padding: py-8 instead of py-16
- Full-width code blocks with horizontal scroll
- Collapse navigation to drawer

## Images

**No hero images required** - This is a documentation site focused on clarity and information delivery. Visual elements are limited to:
- Logo/brand mark in header
- Icons for feature cards (Heroicons library)
- Potential diagram/illustration for "How it Works" section (optional SVG)

If adding visual elements:
- Use simple, geometric illustrations
- Maintain consistent icon style throughout
- SVG format for scalability
- Minimal decoration - prioritize content

## Animations

**Minimal Animations Only:**
- Sidebar/mobile menu: Smooth slide-in (300ms)
- Code copy button: Quick success feedback
- Tab switching: Subtle fade transition
- Avoid scroll animations, parallax, or decorative effects

This design prioritizes developer experience with clear information architecture, scannable content, and efficient navigation patterns proven in industry-leading API documentation sites.