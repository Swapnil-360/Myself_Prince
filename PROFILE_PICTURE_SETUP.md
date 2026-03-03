# 📸 Profile Picture Setup Guide

## Current Status

Your hero section now displays a profile picture placeholder. Here's how to add your actual photo:

## Option 1: Replace with Your Image URL (Easiest)

### If you have an image hosted online:

1. Open `src/sections/HeroSection.jsx`
2. Find line ~142 with:
   ```jsx
   src =
     "https://ui-avatars.com/api/?name=Prince&size=400&background=00d4ff&color=0a0f1f&bold=true&font-size=0.4";
   ```
3. Replace with your image URL:
   ```jsx
   src = "https://your-image-url.com/your-photo.jpg";
   ```

### Recommended image hosting services (Free):

- **Imgur**: https://imgur.com (Upload → Right-click → Copy image address)
- **Cloudinary**: https://cloudinary.com
- **GitHub**: Upload to a repository and use the raw URL

## Option 2: Use Local Image

### Step 1: Add Your Image

1. Place your profile picture in: `public/images/`
2. Name it something simple like: `prince-profile.jpg` or `profile.png`

### Step 2: Update the Code

In `src/sections/HeroSection.jsx` (around line 142):

```jsx
src = "/images/prince-profile.jpg";
```

## Image Requirements

✅ **Recommended specs:**

- **Format**: JPG or PNG
- **Size**: 400x400px to 800x800px (square)
- **File size**: Under 500KB for fast loading
- **Quality**: High resolution, professional photo
- **Background**: Solid color or clean background works best

✅ **Photo tips:**

- Use a professional headshot
- Good lighting
- Clear facial features
- Neutral or professional background
- Face centered in frame

## Image Optimization (Optional)

Use these free tools to optimize your image:

1. **TinyPNG**: https://tinypng.com (Compress without quality loss)
2. **Squoosh**: https://squoosh.app (Advanced compression)
3. **Remove Background**: https://remove.bg (If you want clean background)

## Example Code (Full Section)

```jsx
<motion.div
  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-glow-lg"
  whileHover={{ scale: 1.05, rotate: 5 }}
  transition={{ duration: 0.3 }}
>
  {/* Replace this src with your image */}
  <img
    src="/images/prince-profile.jpg"  {/* <-- Your image here */}
    alt="Prince - Crypto Project Specialist"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent"></div>

  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 glass-card px-4 py-2 rounded-full border border-cyan-400/50">
    <p className="text-sm font-semibold text-cyan-400">3+ Years Experience</p>
  </div>
</motion.div>
```

## Test Your Image

After adding your image:

1. Save the file
2. Refresh your browser (`npm start` if not running)
3. Check if image loads correctly
4. Test on mobile (responsive design)

## Troubleshooting

### Image not showing?

- Check file path is correct
- Ensure image is in `public/images/` folder
- Try hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check browser console for errors (F12)

### Image looks stretched?

- Change `object-cover` to `object-contain` in className
- Or ensure your source image is square (1:1 aspect ratio)

### Image too large (slow loading)?

- Compress using TinyPNG or Squoosh
- Reduce dimensions to 800x800px max
- Convert to WebP format for better compression

## Advanced: Multiple Images (Future)

If you want to add multiple images later:

```jsx
// Create images array
const images = [
  "/images/profile1.jpg",
  "/images/profile2.jpg",
  "/images/profile3.jpg",
];

// Use state to rotate
const [currentImage, setCurrentImage] = useState(0);
```

## Current Placeholder

The current placeholder is a generated avatar with:

- Your name initial: "P"
- Cyan background matching your theme
- Auto-generated at: https://ui-avatars.com

**This is temporary** - replace it with your actual professional photo for best results!

---

**Quick Reminder**:
After changing the image, the file to edit is:
`src/sections/HeroSection.jsx` (around line 142)
