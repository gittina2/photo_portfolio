---
name: Martina Paganin Portfolio
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#39393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1b1b1c'
  surface-container: '#1f1f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#bfc8c8'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#303031'
  outline: '#899292'
  outline-variant: '#3f4849'
  surface-tint: '#96d1d3'
  primary: '#96d1d3'
  on-primary: '#003738'
  primary-container: '#004b4d'
  on-primary-container: '#7fbabc'
  inverse-primary: '#2a6769'
  secondary: '#ffb68c'
  on-secondary: '#532200'
  secondary-container: '#753401'
  on-secondary-container: '#fb9f66'
  tertiary: '#ffb68d'
  on-tertiary: '#532200'
  tertiary-container: '#703100'
  on-tertiary-container: '#ff9451'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b1edef'
  primary-fixed-dim: '#96d1d3'
  on-primary-fixed: '#002021'
  on-primary-fixed-variant: '#084f51'
  secondary-fixed: '#ffdbc9'
  secondary-fixed-dim: '#ffb68c'
  on-secondary-fixed: '#321200'
  on-secondary-fixed-variant: '#753401'
  tertiary-fixed: '#ffdbc9'
  tertiary-fixed-dim: '#ffb68d'
  on-tertiary-fixed: '#321200'
  on-tertiary-fixed-variant: '#763400'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  headline-xl:
    fontFamily: Epilogue
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Epilogue
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Newsreader
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  headline-lg-mobile:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
spacing:
  margin-desktop: 80px
  margin-mobile: 24px
  gutter: 32px
  stack-xl: 120px
  stack-md: 48px
---

## Brand & Style
The brand identity for Martina Paganin is defined by a "Modern Celtic Noir" aesthetic—a fusion of ancestral echoes and contemporary precision. It targets high-end editorial clients and private collectors who value storytelling through landscape and street photography. 

The design style is a hybrid of **Minimalism** and **High-Contrast Editorial**. It leverages heavy whitespace (negative space) not just as a layout tool, but as a structural element to frame the "moody" photography. The visual response should be one of quiet authority, mystery, and professional elegance.

The logo mark must be a singular, geometric execution: an outer circle representing a camera lens/aperture, where the internal blades or "petals" of the iris transition into the jagged, rising peaks of a mountain range. This symbolizes the photographer's eye as the bridge between technology and the raw horizon.

## Colors
The palette is rooted in a cinematic, low-key atmosphere. 
- **Background:** A deep charcoal/dark grey (`#1A1A1B`) provides a sophisticated canvas that is less harsh than pure black, allowing shadow details in photography to breathe.
- **Primary (Ottanio):** A deep, saturated teal (`#004B4D`) used for subtle interactive elements and secondary backgrounds. It evokes the cold depths of landscape waters.
- **Secondary/Tertiary (Rame):** Dark copper and burnt orange tones (`#8B4513`, `#D2691E`) are used as "sparks" of warmth, mimicking the golden hour or street lamps in the dark.
- **Text:** An off-white/silver-grey is used for readability, preventing the high-vibration eye strain of pure white on dark grey.

## Typography
The typography strategy balances modern legibility with a subtle Celtic influence. 
- **Headlines:** Use **Epilogue**. Its sharp terminals and geometric structure provide a contemporary edge that feels "carved," subtly nodding to runes or stone inscriptions without being literal.
- **Body:** Use **Newsreader**. This serif font adds a literary, professional quality. Its elegant transitions make long-form descriptions of photographic expeditions comfortable to read.
- **Labels/Data:** Use **Space Grotesk**. Its technical, slightly quirky character is used for metadata (ISO, Aperture, Location), bridging the gap between the art of the photo and the technicality of the craft.

## Layout & Spacing
The layout follows a **Fixed Grid** system (12 columns for desktop) with an emphasis on asymmetric balance. 
- **Generous Whitespace:** Spacing between sections (`stack-xl`) is intentionally large to create a "gallery" feel, ensuring the user focuses on one image or one narrative at a time.
- **Image Treatment:** Images should never touch the edges of the viewport unless intentionally used as a full-bleed hero. 
- **Alignment:** Text elements often align to the 2nd or 3rd column to create "breathing room" on the left, mimicking the margins of a high-end photo book.
- **Mobile:** Reflows to a single-column stack with significantly reduced margins, but maintains the "sharp corner" philosophy.

## Elevation & Depth
In this dark, moody environment, depth is achieved through **Tonal Layers** rather than shadows. 
- **Surfaces:** Use slightly lighter shades of charcoal to define "containers" for information (e.g., image captions or contact forms).
- **Glassmorphism:** Reserved strictly for navigation overlays. A very subtle backdrop blur with the Deep Teal (`#004B4D`) at 20% opacity creates a sense of looking through a camera filter.
- **No Shadows:** To maintain the "sharp" and "minimal" requirement, shadows are discarded in favor of crisp borders or tonal shifts.

## Shapes
The shape language is strictly **Sharp (0px)**. 
- All images, buttons, input fields, and containers must have 90-degree corners. 
- This reinforces the professional, architectural nature of the landscapes and the "frame" of the camera's viewfinder. 
- Visual interest is created through the intersection of lines and the contrast between dark backgrounds and bright, sharp image edges.

## Components
- **Buttons:** Rectangular, sharp corners. Primary buttons use a Deep Teal background with a Copper hover state. Ghost buttons use a 1px Copper border.
- **Image Cards:** No borders, no shadows. Titles and metadata should be placed below the image in **Space Grotesk** to emphasize the "archival" nature of the portfolio.
- **Navigation:** A minimal top bar. Links use uppercase **Space Grotesk** with a Copper underline on hover.
- **Input Fields:** Bottom-border only (underlined style) to maintain a clean, airy aesthetic.
- **Chips/Tags:** Used for "Series" or "Location." Sharp rectangular boxes with a thin teal border and small-cap text.
- **Image Masonry:** For street photography, use a tight grid with consistent `gutter` spacing, ensuring vertical and horizontal lines are perfectly aligned.
