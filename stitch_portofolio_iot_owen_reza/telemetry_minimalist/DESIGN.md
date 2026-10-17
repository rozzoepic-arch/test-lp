---
name: Telemetry Minimalist
colors:
  surface: '#0c1321'
  surface-dim: '#0c1321'
  surface-bright: '#323949'
  surface-container-lowest: '#070e1c'
  surface-container-low: '#151b2a'
  surface-container: '#19202e'
  surface-container-high: '#232a39'
  surface-container-highest: '#2e3544'
  on-surface: '#dce2f6'
  on-surface-variant: '#bbc9cd'
  inverse-surface: '#dce2f6'
  inverse-on-surface: '#2a3040'
  outline: '#859397'
  outline-variant: '#3c494c'
  surface-tint: '#2fd9f4'
  primary: '#8aebff'
  on-primary: '#00363e'
  primary-container: '#22d3ee'
  on-primary-container: '#005763'
  inverse-primary: '#006877'
  secondary: '#93ccff'
  on-secondary: '#003351'
  secondary-container: '#3198dc'
  on-secondary-container: '#002c47'
  tertiary: '#68f5b8'
  on-tertiary: '#003824'
  tertiary-container: '#46d89d'
  on-tertiary-container: '#005a3d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a2eeff'
  primary-fixed-dim: '#2fd9f4'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5a'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#93ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0c1321'
  on-background: '#dce2f6'
  surface-variant: '#2e3544'
typography:
  display:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-mono-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system delivers a high-precision, technical aesthetic tailored for an engineering portfolio at the intersection of embedded systems, telecommunications, and connected hardware. The visual atmosphere evokes advanced laboratory instruments, clean schematic layouts, and real-time telemetry monitors.

The audience consists of engineering leads, hardware architects, academic researchers, and tech recruiters. The interface must communicate rigor, signal clarity, and deep systems-level competence. 

Drawing from technical minimalism and refined glass-circuit styling, the interface employs deep navy spatial planes, razor-thin luminous traces, and tactical cyan accents. It rejects visual clutter, relying instead on deliberate structural grids, micro-etched dividers, and crisp hierarchy to showcase hardware schematics, firmware architectures, and live device telemetry.

## Colors

The palette is engineered for high legibility in a low-light console context:

- **Primary (`#22D3EE` - Signal Cyan):** The primary focal point. Used for terminal active states, key interactive indicators, telemetry live dots, metrics, and high-priority action elements.
- **Secondary (`#0284C7` - Deep Telemetry Blue):** Complements the primary cyan for secondary interactive states, gradient vector traces, and active badge fills.
- **Tertiary (`#10B981` - Logic High Green):** Functional accent reserved strictly for node status pings, successful packet transmissions, online connectivity indicators, and validation signals.
- **Background Base (`#0B1220` - Abyss Navy):** Deep, non-distracting canvas tone minimizing eye strain while grounding the luminous components.
- **Surface Elevation (`#111C2E` - Substrate Navy):** Structural card, drawer, and module background delivering distinct contrast from the base canvas.
- **Surface Highlight (`#1E2C44` - Trace Blue):** Used for hovered surfaces, selected segments, and elevated chips.
- **Border / Trace Token (`rgba(34, 211, 238, 0.16)` / Solid `#1E2D45`):** Subdued circuit-like wireframes defining boundaries without visual weight.
- **Text Tokens:**
  - Primary Content: `#F3F7FC` (Crisp Signal White) for 100% legibility on technical copy and titles.
  - Secondary Content: `#B9C7D9` (Muted Data Silver) for schematics, metadata, parameter labels, and body descriptions.
  - Tertiary/Muted: `#64748B` (Inactive Pin Slate) for timestamps, passive pin designations, and placeholder states.

## Typography

The typographic hierarchy couples **Inter** for core UI and editorial prose with **JetBrains Mono** for data structures, telemetry readouts, pinouts, and system metrics.

- **Inter** provides neutral, machined precision with optimal screen geometry. Negative letter-spacing on display tokens tightens visual hierarchy, preventing large headings from feeling loose.
- **JetBrains Mono** provides deliberate character distinction for code snippets, register addresses, frequency bands (e.g., `868 MHz`, `LoRaWAN`, `SPI/I2C`), and packet logs.
- All uppercase metadata labels must use `label-mono-sm` with explicit tracked-out spacing (`0.06em`) to echo PCB silk-screen typography.

## Layout & Spacing

The system is governed by a **fixed-width, centered architectural grid** constrained to a strict `1120px` maximum viewport width for primary content delivery:

- **Desktop (>= 1024px):** 12-column layout, `1120px` max-width, `1.5rem` (`24px`) gutters, auto outer margins with a baseline safe boundary of `2rem`.
- **Tablet (768px - 1023px):** 8-column layout, fluid margins scaling between `1.5rem` and `2rem`, `1.5rem` gutters.
- **Mobile (< 768px):** 4-column layout, `1.25rem` (`20px`) outer margin, `1rem` (`16px`) gutters.

Component internals adhere strictly to an 8px vertical rhythm. Clean sensor circuit lines serve as organizational axes: 1px continuous hairline rules run vertically or horizontally between sections, acting as pseudo-buses with terminal nodes (4px dots) positioned at intersections.

## Elevation & Depth

Depth in this system avoids heavy drop shadows, instead using **planar substrate layering, low-contrast electrical outlines, and ambient cyan glow**.

1. **Base Layer (L0):** Canvas `#0B1220` with optional structural dot-matrix grid overlay at 4% opacity (`rgba(243, 247, 252, 0.04)` with 24px pitch).
2. **Substrate Layer (L1 - Cards, Panels):** Solid `#111C2E` framed with a 1px border of `rgba(243, 247, 252, 0.08)`. No directional shadow.
3. **Active/Interactive Layer (L2):** Surface `#152238` bordered with `rgba(34, 211, 238, 0.3)`. Emits an ambient, omnidirectional glow: `0 0 24px -4px rgba(34, 211, 238, 0.12)`.
4. **Overlay/Modal/Floating Layer (L3):** `#111C2E` augmented with `backdrop-filter: blur(12px)` and bordered with `rgba(34, 211, 238, 0.5)`. Shadow: `0 16px 32px -8px rgba(3, 7, 18, 0.6)`.

Trace lines connecting interactive cards utilize gradient strokes fading from `rgba(34, 211, 238, 0.4)` to `transparent`.

## Shapes

The primary structural container uses a defined **16px (`1rem` / `rounded-lg`)** border radius as requested, imparting a modern, tactile enclosure resembling polished industrial hardware instrumentation:

- **Primary Cards & Containers:** Exactly `16px` radius.
- **Nested Inner Surfaces (Metrics tiles, preview blocks):** `8px` (`0.5rem`) to maintain proportional concentricity with outer 16px boundaries.
- **Input Fields & Action Controls:** `8px` (`0.5rem`) or `10px` for mechanical firmness.
- **Badges, Status Chips, & Pin Indicators:** Fully rounded (`9999px` pill) to contrast against architectural card boundaries.

## Components

### Buttons
- **Primary Action:** Solid cyan background (`#22D3EE`), dark navy text (`#0B1220`), font weight 600, 8px radius. Hover: subtle bloom `0 0 16px rgba(34, 211, 238, 0.4)` and `#38BDF8` fill.
- **Secondary / Outline:** Background transparent, 1px border `rgba(34, 211, 238, 0.4)`, text `#22D3EE`. Hover: background `rgba(34, 211, 238, 0.08)`, border `#22D3EE`.
- **Icon / Telemetry Trigger:** 40x40px square with 8px radius, `#111C2E` background, 1px trace border.

### Project & Sensor Cards
- Built on `#111C2E` background with a mandatory **16px** corner radius.
- Top header features monospaced schematic metadata (`[SYS_ID: IOT-902]`, `868 MHz LoRa`) rendered in `label-mono-sm` at `#64748B`.
- Integrated 1px divider styled as a circuit bus (`rgba(243, 247, 252, 0.08)`).
- Hover state transitions border to `rgba(34, 211, 238, 0.4)` with ambient cyan edge illumination.

### Chips & Status Badges
- Height: 24px, pill-shaped (`9999px`), padding: 0 10px.
- **Online/Active Node:** `rgba(16, 185, 129, 0.1)` background, `#10B981` text, prefixed with a pulsing 6px `#10B981` solid dot.
- **Protocol Tag (e.g., MQTT, FreeRTOS, BLE 5.2):** `rgba(34, 211, 238, 0.08)` background, `#22D3EE` text, 1px border `rgba(34, 211, 238, 0.2)`.

### Lists & Technical Specs
- Key-value telemetry layout: Left-aligned parameter in `#B9C7D9`, dotted trace bridge filler (`rgba(243, 247, 252, 0.15)`), right-aligned monospace value in `#F3F7FC`.
- No standard generic bullet points; list markers are replaced with small cyan chevrons (`>`) or circuit contact glyphs (`+`).

### Form Inputs & Terminal Fields
- Background `#0B1220`, 1px border `#1E2D45`, text `#F3F7FC`, 8px radius.
- Focus: Border snaps to `#22D3EE` with `box-shadow: 0 0 0 2px rgba(34, 211, 238, 0.2)`.
- Monospace placeholder text in `#64748B`.

### Domain-Specific Components
- **Pinout Grid Module:** Dual-column hardware header component showing pin designations, voltages, and GPIO allocations with color-coded logic states.
- **Telemetry Sparkline:** Embedded minimalist SVG line chart in `#22D3EE` with a gradient fade to `transparent` and a real-time glowing coordinate tip.