# Light/Dark Theme Guide

Your portfolio website now features a **beautiful dual-theme system** with automatic persistence!

## 🎨 Theme Overview

### Light Mode (Default)

Modern, colorful, and professional design perfect for daylight viewing:

**Colors:**

- **Primary Text**: Gray-900 (near black)
- **Secondary Text**: Gray-600/700
- **Tertiary Text**: Gray-500
- **Accents**: Cyan-600, Blue-600, Purple-600, Pink-600, Orange-500, Green-500
- **Backgrounds**: White, Light Gray (50-100 range), Soft Blue/Purple gradients
- **Service Icons**: Each service has unique colorful gradients
- **Inputs**: White backgrounds with gray borders
- **Cards**: White/80 transparency with glassmorphism

**Perfect For:**

- Professional presentations
- Daylight viewing
- Client meetings
- Portfolio showcases

### Dark Mode

Sleek neon aesthetic with glassmorphism effects for stunning nighttime experience:

**Colors:**

- **Primary Text**: White
- **Secondary Text**: Gray-300
- **Tertiary Text**: Gray-400
- **Accents**: Cyan-400, Blue-500, Neon effects
- **Backgrounds**: Dark-900 (#0a0f1f), Dark-800 (#1a1f3a)
- **Service Icons**: Cyan-to-Blue gradients with glow effects
- **Inputs**: Dark-800 semi-transparent with cyan borders
- **Cards**: Dark with cyan/blue neon borders and blur effects

**Perfect For:**

- Low-light environments
- Evening browsing
- Tech-savvy audience
- Modern aesthetic preference

## 🔧 How It Works

### Theme Toggle

- **Location**: Theme toggle button in the navigation bar (both desktop and mobile)
- **Icon**: Sun icon in dark mode, Moon icon in light mode
- **Interaction**: Click/tap to instantly switch themes
- **Animation**: Smooth color transitions (300ms duration)

### Persistence

- Theme preference is automatically saved to browser's `localStorage`
- Returns to your last selected theme on every visit
- Works across all pages and sections

## 🎯 Key Features

### 1. Automatic Theme Detection

```javascript
// Default theme: light mode
// Falls back to localStorage if available
const [theme, setTheme] = useState(() => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme || "light";
});
```

### 2. Smooth Transitions

All color changes use:

```css
transition-colors duration-300
```

### 3. Complete Coverage

Every section supports both themes:

- ✅ Navbar
- ✅ Hero Section
- ✅ Services Section (with colorful icons in light mode)
- ✅ Portfolio Section
- ✅ Hire Me Section (all form elements)
- ✅ Contact Section
- ✅ Footer
- ✅ All components (Button, AnimatedCard, Section)

## 📝 Technical Implementation

### Theme Context

Located at: `src/context/ThemeContext.jsx`

Provides:

- `theme` - Current theme ("light" or "dark")
- `toggleTheme()` - Function to switch themes

### Tailwind Configuration

Enabled in `tailwind.config.js`:

```javascript
darkMode: "class";
```

### Usage in Components

```jsx
import { useTheme } from "../context/ThemeContext";

function MyComponent() {
  const { theme, toggleTheme } = useTheme();

  return <div className="text-gray-900 dark:text-white">{/* Content */}</div>;
}
```

### CSS Class Pattern

```jsx
// Text colors
className = "text-gray-900 dark:text-white"; // Headings
className = "text-gray-600 dark:text-gray-300"; // Body text
className = "text-gray-500 dark:text-gray-400"; // Captions

// Backgrounds
className = "bg-white/80 dark:bg-dark-800/50"; // Cards
className = "bg-gray-100 dark:bg-dark-800/50"; // Inputs

// Borders
className = "border-gray-300 dark:border-cyan-500/20"; // Input borders
className = "border-cyan-400/40 dark:border-cyan-500/30"; // Card borders

// Accents
className = "text-cyan-600 dark:text-cyan-400"; // Links/highlights
```

## 🎨 Color Palette Reference

### Light Mode Palette

```
Primary Text:    #111827 (gray-900)
Secondary Text:  #4b5563 (gray-600)
Tertiary Text:   #6b7280 (gray-500)
Accent Cyan:     #0891b2 (cyan-600)
Accent Blue:     #2563eb (blue-600)
Accent Purple:   #9333ea (purple-600)
Accent Pink:     #db2777 (pink-600)
Background:      #ffffff (white)
Surface:         #f9fafb (gray-50)
```

### Dark Mode Palette

```
Primary Text:    #ffffff (white)
Secondary Text:  #d1d5db (gray-300)
Tertiary Text:   #9ca3af (gray-400)
Accent Cyan:     #22d3ee (cyan-400)
Accent Blue:     #3b82f6 (blue-500)
Accent Purple:   #a855f7 (purple)
Background:      #0a0f1f (dark-900)
Surface:         #1a1f3a (dark-800)
```

## 🔥 Service Icons - Colorful Light Mode

In light mode, each service category uses unique gradient colors:

**Crypto Growth Services:**

- Service 1: Cyan → Blue
- Service 2: Purple → Pink
- Service 3: Orange → Red

**Creative Media Services:**

- Service 4: Green → Teal
- Service 5: Indigo → Purple

**Frontend Development:**

- Service 6: Cyan → Blue
- Service 7: Purple → Pink

In dark mode, all services use the consistent Cyan → Blue neon gradient.

## 🚀 Browser Compatibility

Theme system works in all modern browsers:

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari (Desktop & Mobile)
- ✅ Opera
- ✅ Samsung Internet

Requires:

- CSS Variables support
- localStorage support
- ES6 JavaScript

## 📱 Mobile Experience

- Theme toggle button positioned alongside mobile menu
- Same functionality as desktop
- Touch-optimized button size
- Smooth animations on mobile devices

## 🎓 Customization Tips

### Change Default Theme

Edit `src/context/ThemeContext.jsx`:

```javascript
const [theme, setTheme] = useState(() => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme || "dark"; // Change to "dark" for dark default
});
```

### Add System Preference Detection

```javascript
const [theme, setTheme] = useState(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme;

  // Detect system preference
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  return systemPrefersDark ? "dark" : "light";
});
```

### Modify Colors

Edit `tailwind.config.js` to customize the color palette for both themes.

## 🐛 Troubleshooting

**Theme not persisting?**

- Check browser localStorage is enabled
- Clear cache and reload

**Colors not switching?**

- Verify `darkMode: 'class'` in `tailwind.config.js`
- Check that root element has theme class

**Flashing on load?**

- This is normal - theme applies after React hydrates
- Can be minimized with SSR or blocking script

---

**Enjoy your beautiful dual-theme portfolio! 🎨✨**
