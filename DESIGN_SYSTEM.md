# Sudo Create design system

Sudo Create uses warm paper, black ink, and orange accents. The script logo and the workshop’s graph paper, hard rules, punch holes, ticket forms, and offset shadows set the visual direction.

## Color

| Color | Value | Role |
| --- | --- | --- |
| Workshop Black | `#111211` | Primary ink, outlines, footer, and text on orange |
| Sudo Orange | `#FF6908` | Conversion buttons, the final homepage panel, and graphic marks |
| Warm Paper | `#F7F5EF` | Page background and light text on dark surfaces |
| Pure White | `#FFFFFF` | Forms, cards, and review paper |
| Charcoal | `#242624` | Inverse surfaces and illustration fields |
| Warm Concrete | `#D8D5CD` | Dividers, disabled states, and paper details |
| Secondary Text | `#555650` | Supporting copy and field borders |
| Deep Orange | `#963600` | Orange text on light surfaces |

Use the semantic variables in `client/src/styles/global.css` for page, surface, inverse, text, borders, primary and secondary buttons, hover, disabled, focus, and selection states. Tailwind v4 exposes the workshop, orange, and paper colors through the same variables. Standard primary buttons use black text on orange. The button inside the orange homepage panel uses warm paper on black.

## Type and composition

- Bricolage Grotesque Variable for display headings and Instrument Sans Variable for body text. The system monospace stack supports functional process numbering.
- Start sections with the main heading. Keep project classification, form labels, and other functional metadata where readers need it.
- Use squared controls, warm surfaces, short text measures, and whitespace. Put the work itself first when approved screenshots are available. Use studio illustrations as covers or supporting visual material.
- Keep link and control focus visible on both light and dark surfaces. Use native disclosures for FAQs and mobile reviews, and respect reduced-motion preferences.

## Logos and media

Use the original transparent `sudo_black.png` on light backgrounds and the existing reversed `sudo_white.png` on dark backgrounds. The logo colors and proportions remain intact. WebP derivatives serve responsive versions of the founder portrait and Tourpass screenshot. Preserve the colors of client assets and project screenshots.

## Voice

Use plain language about what people are trying to build and why it matters. Shawn speaks in the first person when introducing himself or describing what happens after an inquiry.
