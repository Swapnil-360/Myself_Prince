# Premium Crypto Services Portfolio Website

A stunning, modern, fully responsive animated portfolio website for crypto project support specialists with creative design and development services.

## 🚀 Features

- **Light/Dark Theme**: Beautiful theme switcher with modern colorful design in light mode and neon aesthetics in dark mode
- **Premium Design**: Modern glassmorphism, gradient effects, and professional styling
- **Fully Responsive**: Mobile-first design that works perfectly on all screen sizes
- **Smooth Animations**: Powered by Framer Motion with scroll reveals and interactive elements
- **Interactive Portfolio**: Filter system to browse work by category
- **Email Integration**: EmailJS integration for project request submissions
- **Fast & Optimized**: Built with React and Tailwind CSS for maximum performance
- **Easy Customization**: Placeholder-based branding for quick personalization

## 📋 Sections

1. **Hero** - Personalized introduction with profile picture and team services showcase
2. **Services** - 7 services organized in 3 categories with premium animated cards
3. **Portfolio** - Interactive gallery with category filters and hover effects
4. **Hire Me / Order Now** - Form with service selection and file upload (EmailJS integrated)
5. **Contact** - Multiple contact methods (Email, WhatsApp, Telegram)
6. **Footer** - Professional footer with quick links and copyright

## 🎨 Theme System

The website features a **beautiful light/dark theme toggle**:

- **Light Mode**: Modern, colorful design with vibrant gradients, clean backgrounds, and excellent readability
  - Cyan, Blue, Purple, Pink, Orange, and Green color accents
  - White/light gray backgrounds
  - Perfect for professional daylight viewing

- **Dark Mode**: Sleek neon aesthetic with glassmorphism effects
  - Cyan and Blue neon accents
  - Dark backgrounds with gradient overlays
  - Optimized for low-light environments

Theme preference is **automatically saved** to localStorage and persists across sessions. Toggle anytime using the Sun/Moon button in the navigation bar.

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Intersection Observer** - Scroll animation triggers
- **EmailJS** - Email service integration

## 📦 Installation & Setup

### 1. Install Dependencies

The project is already initialized with all required packages. Install any remaining:

```bash
cd portfolio
npm install
```

### 2. Configure EmailJS (Important!)

To enable email functionality:

1. **Go to** [emailjs.com](https://www.emailjs.com) and sign up (free)

2. **Connect Gmail Account**:
   - In EmailJS dashboard, go to **Email Services**
   - Click **Create New Service**
   - Choose **Gmail** and connect your account

3. **Create Email Template**:
   - Go to **Email Templates**
   - Click **Create New Template**
   - Use these template variables:

     ```
     Subject: New Service Request - {{services}}

     Name: {{client_name}}
     Email: {{client_email}}
     Phone: {{phone}}

     Services Requested:
     {{services}}

     Project Description:
     {{description}}

     Portfolio Request: {{portfolio_request}}
     ```

4. **Get Your Credentials**:
   - Copy your **Service ID**
   - Copy your **Template ID**
   - Go to Account Settings → API Keys → Copy **Public Key**

5. **Update .env.local**:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### 3. Update Placeholders

Find and replace these values throughout the site:

- `[YOUR_NAME]` → Your name
- `[YOUR_BRAND]` → Your brand name
- `[YOUR_EMAIL]` → Your email
- `+[YOUR_PHONE]` → Your WhatsApp number
- `@[YOUR_TELEGRAM]` → Your Telegram username

**Key files to update:**

- `src/sections/HeroSection.jsx`
- `src/sections/HireMeSection.jsx`
- `src/sections/ContactSection.jsx`
- `src/components/Navbar.jsx`
- `src/components/SocialLinks.jsx`
- `src/sections/Footer.jsx`

## 🚀 Running the Website

```bash
# Start development server
npm start

# Build for production
npm run build
```

The website opens at `http://localhost:3000`

## 📦 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Navbar.jsx
│   ├── Button.jsx
│   ├── Section.jsx
│   ├── AnimatedCard.jsx
│   └── SocialLinks.jsx
├── sections/            # Page sections
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── ServicesSection.jsx
│   ├── WhySection.jsx
│   ├── PortfolioSection.jsx
│   ├── HireMeSection.jsx
│   ├── ContactSection.jsx
│   └── Footer.jsx
├── App.js              # Main component
├── index.css           # Global styles
└── index.js            # Entry point
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` theme.extend.colors

### Animations

Edit `src/index.css` for custom keyframes

### Portfolio Items

Update `src/sections/PortfolioSection.jsx` with your projects

## 📱 Responsive Design

- Mobile: 375px
- Tablet: 768px
- Desktop: 1024px
- Large: 1280px+

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
netlify deploy --prod --dir=build
```

## 📝 Available Commands

- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

## 🔒 Security

- EmailJS Public Key is safe to expose
- Environment variables in `.env.local`
- File uploads limited to 5MB
- Email validation prevents spam

## 💬 Support & Troubleshooting

**Emails not sending?**

- Verify .env.local credentials
- Check EmailJS dashboard for errors
- Ensure Gmail is connected properly

**Animations not smooth?**

- Check browser DevTools Performance tab
- Verify GPU acceleration is enabled

**Mobile issues?**

- Test in DevTools (Ctrl+Shift+M)
- Check Tailwind responsive utilities

---

**Built to impress and convert visitors into clients! 🚀**

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
