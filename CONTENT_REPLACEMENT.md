# 📝 Content Replacement Checklist

This document lists ALL placeholders you need to replace with your actual information.

## 🎯 Quick Find & Replace

Use **VS Code's Find and Replace** (Ctrl+Shift+H):

1. Type placeholder in "Find" field
2. Type your actual value in "Replace" field
3. Click "Replace All"

## ✅ Required Replacements

### 1. Personal Name

**Placeholder**: `[YOUR_NAME]`  
**Replace with**: Your full name (e.g., "John Smith")  
**Found in**: About section, various text

### 2. Brand Name

**Placeholder**: `[YOUR_BRAND]`  
**Replace with**: Your brand/company name (e.g., "CryptoExperts Pro")  
**Found in**: Navbar, Footer, Hero section

### 3. Email Address

**Placeholder**: `[YOUR_EMAIL]`  
**Replace with**: Your email (e.g., "john@example.com")  
**Found in**: Contact section, Footer, SocialLinks component

### 4. WhatsApp Phone

**Placeholder**: `+[YOUR_PHONE]`  
**Replace with**: Your WhatsApp number with country code (e.g., "+1234567890")  
**Found in**: Contact section, Footer, SocialLinks component

### 5. Telegram Username

**Placeholder**: `@[YOUR_TELEGRAM]`  
**Replace with**: Your Telegram username (e.g., "@johnsmith")  
**Found in**: Contact section, Footer, SocialLinks component

## 🔧 Optional Replacements

### 6. Social Media Links

**File**: `src/sections/Footer.jsx` (around line 80-120)

Replace these URLs:

```javascript
https://github.com/yourusername          → Your GitHub profile
https://linkedin.com/in/yourusername     → Your LinkedIn profile
https://twitter.com/yourusername         → Your Twitter profile
```

### 7. Portfolio Projects

**File**: `src/sections/PortfolioSection.jsx` (line 15-80)

Update the `portfolioItems` array with your actual projects:

```javascript
{
  id: 1,
  title: 'Your Project Name',
  category: 'Crypto Projects', // Choose: Crypto Projects, Community Management, Graphics Design, Video Editing, Web Development, App Development
  description: 'Brief project description (2-3 sentences)',
  image: 'https://example.com/image.jpg', // Your image URL or local path
  link: '#', // Your project link
}
```

**Image Tips**:

- Use Unsplash for free stock images: https://unsplash.com
- Or upload your own to Imgur or Cloudinary
- Recommended size: 800x600px minimum
- Use HTTPS URLs for images

### 8. EmailJS Configuration

**File**: `.env.local` (create from `.env.local.template`)

```
REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

Get these from [EmailJS Dashboard](https://www.emailjs.com) after creating account.

## 📍 Files Containing Placeholders

Here's where each placeholder appears:

### `[YOUR_NAME]`

- `src/sections/AboutSection.jsx`
- `src/sections/HeroSection.jsx`

### `[YOUR_BRAND]`

- `src/components/Navbar.jsx` (line 58)
- `src/sections/Footer.jsx` (line 18, 101)
- `src/sections/HeroSection.jsx`

### `[YOUR_EMAIL]`

- `src/components/SocialLinks.jsx` (line 8)
- `src/sections/ContactSection.jsx`
- `src/sections/Footer.jsx` (line 65)
- `src/sections/HireMeSection.jsx` (line 142)

### `+[YOUR_PHONE]`

- `src/components/SocialLinks.jsx` (line 13)
- `src/sections/ContactSection.jsx`
- `src/sections/Footer.jsx` (line 72)

### `@[YOUR_TELEGRAM]`

- `src/components/SocialLinks.jsx` (line 18)
- `src/sections/ContactSection.jsx`
- `src/sections/Footer.jsx` (line 79)

## 🎨 Customization Tips

### Update Service Descriptions

**File**: `src/sections/ServicesSection.jsx`

Each service has a `description` field you can customize:

```javascript
{
  icon: Shield,
  name: 'Crypto Project Support',
  description: 'Your custom description here...',
}
```

### Modify About Section

**File**: `src/sections/AboutSection.jsx`

Update:

- Years of experience (change "3+ years" to your actual experience)
- Team composition (if you have different team structure)
- Highlight cards (modify titles and descriptions to match your strengths)

### Change Why Section

**File**: `src/sections/WhySection.jsx`

Modify the `reasons` array to highlight your unique selling points.

### Update Hero Headline

**File**: `src/sections/HeroSection.jsx` (line 47-49)

```javascript
<h1>
  <span>Transform Your Crypto Project</span>
  <span className="gradient-text">From Idea to Community</span>
</h1>
```

Change to match your brand voice.

## ✨ Advanced Customizations

### Change Color Scheme

**File**: `tailwind.config.js`

```javascript
colors: {
  dark: {
    900: '#0a0f1f', // Main background - change this
    800: '#1a1f3a', // Secondary background
    700: '#2d3561', // Accent background
  },
  neon: {
    cyan: '#00d4ff', // Primary accent color
    blue: '#0099ff', // Secondary accent
    purple: '#a855f7', // Tertiary accent
  },
}
```

### Add More Portfolio Categories

**File**: `src/sections/PortfolioSection.jsx`

Just add projects with new category names:

```javascript
{ category: 'Your New Category', ... }
```

The filter buttons will automatically include new categories.

### Update Footer Copyright

**File**: `src/sections/Footer.jsx` (line 101)

```javascript
© 2024–{currentYear} [YOUR_BRAND]. All rights reserved.
```

Replace `2024` with your actual start year.

## 🔍 Search Strategy

### Method 1: Global Search in VS Code

1. Press `Ctrl+Shift+F`
2. Search for `[YOUR_`
3. Replace all occurrences

### Method 2: Find and Replace

1. Press `Ctrl+Shift+H`
2. Find: `[YOUR_NAME]`
3. Replace: `Your Actual Name`
4. Click "Replace All"
5. Repeat for each placeholder

### Method 3: Manual Review

1. Check each file in `src/sections/`
2. Check `src/components/SocialLinks.jsx`
3. Check `src/components/Navbar.jsx`

## ✅ Final Checklist

Before launching:

- [ ] Replaced `[YOUR_NAME]` with actual name
- [ ] Replaced `[YOUR_BRAND]` with brand name
- [ ] Replaced `[YOUR_EMAIL]` with email address
- [ ] Replaced `+[YOUR_PHONE]` with WhatsApp number
- [ ] Replaced `@[YOUR_TELEGRAM]` with Telegram username
- [ ] Updated social media links in Footer
- [ ] Updated portfolio projects with real work
- [ ] Configured EmailJS (`.env.local` file)
- [ ] Tested email form submission
- [ ] Updated service descriptions if needed
- [ ] Changed color scheme (optional)
- [ ] Verified all images load correctly
- [ ] Tested on mobile, tablet, and desktop
- [ ] Built project (`npm run build`)
- [ ] Deployed to hosting platform

## 🚀 Ready to Launch!

Once all placeholders are replaced and customizations are done:

1. Test locally: `npm start`
2. Build production: `npm run build`
3. Deploy to Vercel/Netlify
4. Share your premium portfolio! 🎉

---

**Need help?** Check `SETUP_GUIDE.md` for detailed instructions.
