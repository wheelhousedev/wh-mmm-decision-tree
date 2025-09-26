# Wheelhouse DMG Design System

## Color Palette

### Primary Colors
- **Primary Green**: `#003d31` - Deep forest green (main brand color)
- **Secondary Sage**: `#c0d8d7` - Soft sage/mint green
- **Accent Yellow**: `#fed448` - Bright golden yellow (CTAs, highlights)

### Supporting Colors
- **Dark Green**: `#071e16` - Near-black dark green (dark backgrounds, headers)
- **Brand White**: `#f9f9f9` - Off-white (light backgrounds)
- **Light Accent**: `#f2f7f7` - Very light mint (subtle backgrounds)

### Utility Colors
- **Subtle Text**: `#8c8ca1` - Medium gray (secondary text, metadata)
- **Light Gray**: `#d9d9d9` - Light gray (borders, dividers)
- **White**: `#ffffff` - Pure white
- **Dark Text**: `#333333` - Dark gray (primary text on light backgrounds)

## Typography

### Font Family
**Primary Font**: Outfit (Google Fonts)
- Modern, clean sans-serif
- Weights used: 100-800 (primarily 400, 500, 600, 700)

### Type Scale

#### Headings
- **H1**: 
  - Mobile: 2.875rem (46px), line-height: 43px
  - Desktop: 4rem (64px), line-height: 70px
  - Font-weight: 500

- **H2**: 
  - Mobile: 2rem (32px), line-height: 35px
  - Desktop: 2.5rem (40px), line-height: 45px
  - Font-weight: 500

- **H3**: 
  - 1.5rem (24px)
  - Font-weight: 600
  - Letter-spacing: 0

- **H5**: 
  - 1.5rem (24px)
  - Font-weight: 500

#### Body Text
- **Regular**: 1rem (16px), line-height: 22px, weight: 400
- **Desktop**: 1.125rem (18px)
- **Bold**: 1rem, weight: 600
- **Small**: 0.875rem (14px), weight: 500
- **Small Bold**: 0.875rem, weight: 700

#### Special Styles
- **Pre-title**: 
  - Size: 0.875rem
  - Weight: 400
  - Letter-spacing: 3px
  - Text-transform: uppercase
- **Tags**: 
  - Size: 0.75rem
  - Weight: 400
  - Letter-spacing: 0.36px
  - Text-transform: uppercase

## Component Styles

### Buttons
**Common Properties:**
- Border-radius: 30px
- Padding: 12px 24px
- Font-weight: 700
- Font-size: 1rem
- Letter-spacing: 0.65px
- Border: 2px solid
- Text-decoration: none

**Button Variants:**
1. **Primary**: 
   - Background: `#003d31`
   - Text: `#f9f9f9`
   - Border: `#003d31`

2. **Secondary**: 
   - Background: `#f9f9f9`
   - Text: `#003d31`
   - Border: `#003d31`

3. **Tertiary**: 
   - Background: `#c0d8d7`
   - Text: `#003d31`
   - Border: `#c0d8d7`

4. **CTA/Fourth**: 
   - Background: `#fed448`
   - Text: `#003d31`
   - Border: `#fed448`

### Cards & Containers
- **Border-radius**: 20px (cards, images)
- **Box-shadow**: `0 4px 6px rgba(0,0,0,0.2), 5px 5px 10px rgba(0,0,0,0.19)`
- **Borders**: 1px solid `#d9d9d9`
- **Dark cards**: Background `#071e16` with white text

### Forms
- **Input fields**: 
  - Border-radius: 20px-30px
  - Padding: 10px
  - Background: `#f9f9f9`
  - Border: 1px solid `#d9d9d9`

## Spacing System

### Padding/Margin Scale
- 4px (0.25rem)
- 8px (0.5rem)
- 16px (1rem)
- 24px (1.5rem)
- 32px (2rem)
- 40px (2.5rem)
- 48px (3rem)
- 56px (3.5rem)
- 64px (4rem)
- 72px (4.5rem)
- 80px (5rem)
- 96px (6rem)
- 144px (9rem)

### Common Section Padding
- Mobile: 56px top/bottom, 16px left/right
- Tablet: 75px top/bottom, 24px left/right
- Desktop: 144px top/bottom, 96px left/right

## Layout

### Container Widths
- Max-width: 1920px (full sections)
- Content max-width: 1440px
- Text content max-width: 850px-960px

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Large: 1280px+
- XL: 1440px+

## Visual Characteristics

### Design Principles
- **Shape Language**: Heavily rounded corners (soft, approachable)
- **Whitespace**: Generous padding and margins
- **Contrast**: High contrast between dark greens and light backgrounds
- **Hierarchy**: Clear visual hierarchy through size, weight, and color

### Brand Personality
- Professional yet approachable
- Natural/earthy aesthetic (green palette)
- Modern and clean
- Energetic accents (yellow CTAs)
- Trustworthy and stable

## Implementation Notes

### CSS Variables Suggestion
```css
:root {
  --color-primary: #003d31;
  --color-secondary: #c0d8d7;
  --color-accent: #fed448;
  --color-dark: #071e16;
  --color-light: #f9f9f9;
  --color-white: #ffffff;
  --color-gray-light: #d9d9d9;
  --color-gray-medium: #8c8ca1;
  
  --border-radius-sm: 20px;
  --border-radius-lg: 30px;
  
  --font-family: 'Outfit', sans-serif;
}
```

### Accessibility Considerations
- Ensure color contrast ratios meet WCAG guidelines
- Yellow (`#fed448`) on white may need adjustment for text
- Focus states should be clearly visible
- Maintain semantic HTML structure