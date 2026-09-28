# Emmanuel KENGNE -- Graphic Designer & Visual Media Creator Portfolio

A modern Graphic Designer, Creative Direction & Media Innovation portfolio landing page built with **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

## Features

- **Typography & Theme**: Google Fonts *Kanit* (weights 300-900), deep dark theme (`#0C0C0C`), and fluid typography using `clamp()`.
- **Hero Section**:
  - Full viewport height (`h-screen`) with sticky responsive navbar (`About`, `Services`, `Tools`, `Projects`, `Contact`).
  - Massive `.hero-heading` with metallic gradient text: `"Hi, i'm emmanuel"`.
  - Centered hero portrait with interactive **Magnet** physics (cursor proximity attraction).
  - Bottom bar with fluid copy and the custom pill gradient **ContactButton**.
- **Marquee Section**:
  - Two parallel rows of curated visual GIFs scrolling in opposite directions based on scroll velocity and offset.
- **About Section**:
  - 4 floating decorative elements positioned in the corners with directional entrance animations.
  - Character-by-character scroll-driven opacity reveal (**AnimatedText**) based on Emmanuel KENGNE's creative background.
  - Expandable creative philosophy & bio insights.
- **Services Section**:
  - Crisp white background (`#FFFFFF`) with heavy rounded top corners.
  - Giant typographic numbering (`01`-`05`), tailored service descriptions, and interactive badges for all 13 core competencies.
- **Tools Section (Creative Stack)**:
  - Software suite showcasing **Adobe Photoshop**, **Adobe Illustrator**, **Adobe Premiere Pro**, **CapCut**, **Wondershare Filmora**, **Adobe After Effects**, **Adobe InDesign**, **Figma**, **Canva Pro**, and **Lightroom**.
  - Crisp official vector logos, categorized filter pills, proficiency tags, and ambient backglows.
- **Projects Section**:
  - Sticky-stacking card physics with scroll-driven scale transforms (`useTransform` & `useScroll`).
  - 2-column image layout (40% stacked pair + 60% tall hero shot) with rounded-[60px] borders.
  - Integrated **Key Accomplishments** grid highlighting the "Best Teacher" recognition, Teach Connect Studio setup, and *The Chalk Line* storytelling format.
- **Interactive Modals**:
  - **ContactModal**: Quick email copy button, inquiry form, and dispatch confirmation.
  - **ProjectModal**: Case study deep dive with high-resolution imagery and role scope.

## Development & Running

```bash
# Navigate to the project directory
cd "C:\Users\CHRISTELLE\.gemini\antigravity-ide\scratch\emmanuel-portfolio"

# Start the dev server
npm run dev

# Build for production
npm run build
```
