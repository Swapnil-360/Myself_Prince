# Prince's Portfolio - Customization Guide

## 📋 Portfolio Details

This is a personalized portfolio for **Subrata Barman Prince**, an All-in-One Digital Marketing & Web Expert from Bangladesh.

### Current Setup

- **Name**: Prince (Subrata Barman Prince)
- **Title**: All-in-One Digital Marketing & Web Expert
- **Email**: princevarman615@gmail.com
- **Phone/WhatsApp**: +8801764587767
- **Location**: Bangladesh 🇧🇩

## 🎨 Customized Sections

### 1. **Hero Section**

- Personalized greeting with Prince's name
- Custom tagline describing digital marketing and web expertise
- Services highlight (Web Design, SEO, E-Commerce, Social Media Marketing)
- Note: Profile image at `/public/images/prince-profile.jpg` needs to be replaced with Prince's actual photo

### 2. **Services Section**

The portfolio now features **8 specialized services** across 3 categories:

#### Category 1: Web Design & Development

- Website Design & Development
- Website Redesign + SEO Setup
- Landing Page Design

#### Category 2: SEO & Growth Services

- SEO Optimization
- YouTube SEO & Growth
- Google My Business Setup

#### Category 3: E-Commerce & Marketing Services

- E-Commerce Store Setup
- Social Media Marketing
- Complete Digital Branding

### 3. **Contact Information**

- Email: princevarman615@gmail.com
- WhatsApp: +8801764587767
- Social links can be added in `/src/config/siteConfig.js`

## 📝 Next Steps to Customize Further

### 1. **Profile Picture**

Replace the placeholder image:

- Location: `/public/images/prince-profile.jpg`
- Upload Prince's professional photo here

### 2. **Portfolio Projects**

Edit `/src/sections/PortfolioSection.jsx` to add Prince's portfolio examples

### 3. **Social Media Links**

Update `/src/config/siteConfig.js` with social media handles:

```javascript
export const SOCIAL_LINKS = {
  email: "princevarman615@gmail.com",
  phone: "+8801764587767",
  facebook: "[facebook-profile-url]",
  // Add other social links as needed
};
```

### 4. **Environment Variables**

Create a `.env.local` file (if using environment variables):

```
REACT_APP_CONTACT_EMAIL=princevarman615@gmail.com
REACT_APP_CONTACT_PHONE=+8801764587767
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### 5. **Hire Me Section**

The form at `/src/sections/HireMeSection.jsx` needs EmailJS configuration

- Service ID, Template ID, and Public Key from [EmailJS](https://www.emailjs.com/)

### 6. **Page Title & Meta**

Update `/public/index.html`:

- Title is already set to "Prince - Digital Marketing & Web Expert Portfolio"
- Consider adding meta description

## 🚀 Running the Portfolio

```bash
# Navigate to the project directory
cd D:\Projects\MyselfPrince

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm build
```

## 🎨 Theme & Styling

- Light/Dark theme toggle is already built in
- Colors and gradients can be customized in `tailwind.config.js`
- Animations powered by Framer Motion

## 📱 Responsive Design

The portfolio is fully responsive and works on:

- Mobile phones
- Tablets
- Desktop screens
- All modern browsers

## 💡 Tips

- Keep the portfolio updated with latest projects
- Add testimonials/reviews from clients
- Update portfolio section with successful project examples
- Consider adding blog section for SEO benefits
- Regularly refresh content to improve search rankings

---

**Created**: March 2, 2026
**Version**: 1.0.0
**Status**: Ready for Customization
