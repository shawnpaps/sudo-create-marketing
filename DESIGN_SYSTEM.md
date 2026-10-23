# Sudo Create design system

## Source of truth

The supplied stylescape is the visual authority. Its key cues are warm stock, graph-paper grids, workwear/navy blues, safety yellow, compact utility typography, hand-drawn marks, archival office objects, stitched patches, labels, and sturdy shop-made forms. The intended feeling is a trusted neighborhood shop with excellent tools—not a nostalgia costume and not a generic glossy technology brand.

## Palette

| Token | Value | Role |
| --- | --- | --- |
| Paper | `#F1EDE2` | Primary canvas; warm uncoated stock |
| Paper deep | `#DFD6C2` | Punch holes, subtle depth |
| Ink | `#172238` | Type, hard rules, shadows |
| Workwear blue | `#244766` | Primary brand field |
| Denim blue | `#315C76` | Project-image field |
| Safety yellow | `#E7A21B` | Calls to action, labels, highlights |
| Chalk | `#FFFDF7` | High-contrast type and cards |

## Typography

- Display: Bricolage Grotesque Variable, heavy and tightly tracked.
- Body: Instrument Sans Variable, open and conversational.
- Utility: the system monospace stack for work-order numbers, labels, and metadata.

## Shape language

- Two-pixel ink rules and squared cards form the core structure.
- Offset hard shadows feel screen-printed rather than glassy.
- Shield/badge silhouettes echo the stylescape’s workwear patches.
- Punch holes, dashed rules, ledger rows, and graph grids reference work orders and older office tools.
- Hand-drawn SVG loops are used sparingly as human marks.

## Voice

Warm, plainspoken, capable, and lightly playful. Explain what Sudo Create does in everyday language. Prefer “pull up a chair,” “shop floor,” and “built to be used” over agency jargon. Never position photography or videography as current services.

## Accessibility

- Ink/paper and chalk/blue pairs provide strong contrast.
- Keyboard focus uses the same visible safety-yellow and ink language as hover states.
- Layouts collapse to a single clear reading order below tablet width.
- Motion respects `prefers-reduced-motion`.
- Texture layers do not carry information and ignore pointer input.
