---
name: Emerald & Gold Editorial
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#404944'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#707974'
  outline-variant: '#bfc9c3'
  surface-tint: '#2b6954'
  primary: '#003527'
  on-primary: '#ffffff'
  primary-container: '#064e3b'
  on-primary-container: '#80bea6'
  inverse-primary: '#95d3ba'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#2e2f2a'
  on-tertiary: '#ffffff'
  tertiary-container: '#44453f'
  on-tertiary-container: '#b3b2ab'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b0f0d6'
  primary-fixed-dim: '#95d3ba'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#0b513d'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e4e3db'
  tertiary-fixed-dim: '#c8c7bf'
  on-tertiary-fixed: '#1b1c17'
  on-tertiary-fixed-variant: '#474742'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
  emerald-deep: '#064E3B'
  gold-metallic: '#D4AF37'
  gold-light: '#F2E2B0'
  cream-bg: '#FFFDF5'
  ink-black: '#1A1A1A'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 2rem
  margin-mobile: 1.25rem
  stack-lg: 4rem
  stack-md: 2rem
  stack-sm: 1rem
---

## Brand & Style

This design system is crafted for a high-end personal brand in the luxury event hosting space. The personality is **commanding, sophisticated, and polished**, reflecting the poise required of a professional Emcee. 

The visual style leans into a **Modern Luxury** aesthetic. It combines the structured elegance of high-fashion editorial layouts with a rich, jewel-tone color palette. The interface uses a heavy emphasis on white space (using a cream base) to allow deep emerald and gold accents to feel intentional and premium. Subtle depth is created through soft, diffused shadows and light-catching gradients, evoking the atmosphere of a gala or high-profile corporate event.

## Colors

The palette is rooted in a "New Money vs. Old World" balance. 

- **Primary Emerald:** Used for hero backgrounds, primary buttons, and critical structural elements to ground the design in authority.
- **Rich Gold:** Used sparingly for highlights, icons, and call-to-action accents. Use a linear gradient (45deg) from `#D4AF37` to `#F2E2B0` for decorative borders or primary labels to simulate metallic sheen.
- **Soft Cream:** Replaces pure white as the primary surface color to reduce eye strain and add a warm, "stationery" quality to the digital experience.
- **Ink Black:** Reserved strictly for high-contrast typography to ensure absolute legibility against the cream background.

## Typography

The typography strategy relies on the high-contrast pairing of a high-contrast Serif and a geometric Sans-Serif.

- **Headlines:** Use **Playfair Display**. It provides the "editorial" feel essential for a luxury brand. For large display titles, use tight letter spacing to create a sense of density and impact.
- **Body & UI:** Use **Montserrat**. It offers a clean, contemporary counterpoint to the serif headings. Its wide apertures ensure legibility even in dense informational sections like FAQs or bios.
- **Labels:** Meta-information and small eyebrow headers should always use `label-caps` in Montserrat with generous letter spacing to evoke the feeling of luxury brand packaging.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain an intentional, magazine-like composition. 

- **Grid:** A 12-column grid with 32px gutters. Content should be centered with wide margins to create a "canvas" feel.
- **Rhythm:** Use a vertical rhythm based on 8px increments. Larger sections (e.g., between Hero and About) should use `stack-lg` to provide breathing room.
- **Mobile Adaptivity:** On mobile, margins shrink to 20px, and typography scales down. Section headers should remain centered to maintain the formal tone.
- **Density:** Maintain low density. Avoid overcrowding elements; every component should feel like it has been "curated" onto the page.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Ambient Shadows**.

- **Surfaces:** Most content sits on `cream-bg`. Secondary cards or sections use a very subtle shift to a slightly darker cream or a desaturated emerald tint.
- **Shadows:** Use extremely diffused shadows (Blur: 30px+, Opacity: 0.05) with a slight emerald tint (`#064E3B`) rather than pure black. This creates a "glow" effect rather than a "drop" effect, making elements feel like they are floating elegantly.
- **Dividers:** Instead of solid lines, use hairline gold gradients or generous white space to separate sections. If a border is required, use a 0.5px solid stroke in `gold-metallic` at 30% opacity.

## Shapes

The shape language is **Soft (0.25rem)**. 

Luxury design often avoids overly rounded "bubbly" corners. This system uses a minimal radius to take the edge off sharp corners while maintaining a formal, structured appearance. Buttons and cards should feel like high-quality cardstock—crisp but not aggressive. Full-circle pill shapes are reserved exclusively for small badges or tags (like a "Verified" status) to differentiate them from primary action buttons.

## Components

- **Buttons:** Primary buttons use the Emerald background with Gold text. Hover states should introduce the Gold gradient as a subtle background shift. Use the `label-caps` typography style for button labels.
- **Cards:** Cards should have no visible border, relying on the ambient shadow and a slightly lighter cream background to distinguish themselves from the page.
- **Input Fields:** Use "Material-style" bottom-only borders in Gold for a more sophisticated, minimal look compared to fully boxed inputs.
- **Chips/Badges:** Use a solid Emerald fill with Gold text, or a Gold outline with Emerald text. Keep these small and uppercase.
- **Lists:** Use custom Gold-colored icons (e.g., stars or diamonds) instead of standard bullet points to reinforce the premium theme.
- **Interactive Elements:** Links should have a persistent gold underline that grows in thickness (from 1px to 2px) on hover, rather than a color change.