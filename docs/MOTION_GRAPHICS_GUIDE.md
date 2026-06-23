# Motion Graphics Guide for Kunj Patel's Portfolio

This portfolio supports lightweight Lottie and dotLottie motion graphics through the reusable `MotionGraphic` component.

Use motion graphics as subtle support for the AI workspace feeling. They should not cover text, slow down scrolling, or distract from projects.

## 1. Create an Animation in Figma

Recommended animation ideas for this portfolio:

- AI orbit system for the hero section
- Neural network lines for the research section
- Document intelligence flow for Lumina AI
- Transformer/NLP token animation for MoodLens
- Pose estimation skeleton for AI Fitness Coach

Figma setup:

1. Create a frame with a square size such as `512 x 512`.
2. Keep shapes simple: circles, lines, nodes, cards, document icons, or glowing paths.
3. Use portfolio colors:
   - Cyan: `#67E8F9`
   - Violet: `#A78BFA`
   - Mint: `#6EE7B7`
   - Dark background: `#030712`
4. Avoid huge blur effects and heavy gradients.
5. Keep animation loops smooth and slow.
6. Design the animation so it still looks good at small sizes.

## 2. Export with the LottieFiles Plugin

In Figma:

1. Install the `LottieFiles` plugin.
2. Select the animated frame.
3. Preview the animation in the plugin.
4. Check that the loop is smooth.
5. Export the animation.

Keep animation duration short:

- Small card animation: `2-5 seconds`
- Hero animation: `4-8 seconds`
- Research background animation: `4-8 seconds`

## 3. Recommended Export Format

Preferred:

```text
.lottie
```

Also supported:

```text
.json
```

Use `.lottie` when possible because it is optimized for web delivery. Use `.json` only if the plugin or design workflow requires it.

## 4. Where to Place Files

Place exported files here:

```text
public/animations/
```

Example:

```text
public/animations/ai-orbit.lottie
public/animations/neural-network.lottie
public/animations/document-intelligence.lottie
public/animations/computer-vision.lottie
public/animations/transformer-nlp.lottie
```

Files in `public/` are served from the site root, so the app uses paths like:

```text
/animations/ai-orbit.lottie
```

## 5. How to Use MotionGraphic

The component lives here:

```text
src/components/MotionGraphic.jsx
```

Basic usage:

```jsx
import MotionGraphic from './MotionGraphic.jsx';

<MotionGraphic
  src="/animations/ai-orbit.lottie"
  className="hero-motion-graphic"
  loop
  autoplay
/>
```

Card usage:

```jsx
<MotionGraphic
  src="/animations/document-intelligence.lottie"
  className="project-motion-graphic"
  loop
  autoplay
/>
```

The component automatically:

- Uses `DotLottieReact` from `@lottiefiles/dotlottie-react`
- Supports `.lottie` and `.json`
- Stays responsive
- Avoids blocking clicks
- Clips animation overflow
- Adds `aria-hidden="true"` for decorative animations
- Shows a glassmorphism fallback if a file is missing or still a placeholder

## 6. Naming Convention

Use clear, lowercase, hyphenated filenames:

```text
ai-orbit.lottie
neural-network.lottie
document-intelligence.lottie
computer-vision.lottie
transformer-nlp.lottie
```

Good names:

```text
fastapi-pipeline.lottie
pose-estimation.lottie
document-summary-flow.lottie
```

Avoid:

```text
final-animation-new-copy-2.lottie
animation.json
figma-export-latest.lottie
```

## Portfolio Placement Map

Current motion graphic areas:

| Area | File | Purpose |
| --- | --- | --- |
| Hero | `/animations/ai-orbit.lottie` | Cosmic AI system beside the dashboard |
| Lumina AI card | `/animations/document-intelligence.lottie` | Document intelligence signal |
| MoodLens card | `/animations/transformer-nlp.lottie` | NLP/transformer signal |
| AI Fitness Coach card | `/animations/computer-vision.lottie` | Pose estimation signal |
| Research Mindset | `/animations/neural-network.lottie` | Neural research layer |

## Performance Rules

- Keep files small.
- Prefer vector shapes over embedded images.
- Avoid complex masks when possible.
- Keep opacity subtle.
- Do not animate large full-screen areas unless necessary.
- Test the site after adding files with:

```bash
npm run build
```

If `npm` is unavailable on the machine, use the local Vite build command:

```bash
node ./node_modules/vite/bin/vite.js build
```

## Replacing Placeholder Files

The current files in `public/animations/` are placeholders. Replace them with real `.lottie` exports using the exact same filenames.

Do not change the React code if the filename stays the same.
