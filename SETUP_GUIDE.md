# 🎯 Quick Setup Guide

## Step 1: Install Dependencies (If Not Done)

```bash
cd d:\Projects\MyselfPrince
npm install
```

## Step 2: Configure EmailJS

### A. Create EmailJS Account

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up for FREE account
3. Verify your email

### B. Connect Gmail

1. Go to **Email Services** → **Add New Service**
2. Select **Gmail**
3. Click **Connect Account**
4. Allow EmailJS to access your Gmail
5. **Copy the Service ID** (e.g., `service_abc123`)

### C. Create Email Template (Website-Style Design)

1. Go to **Email Templates** → **Create New Template**
2. Template Name: `Portfolio Contact Form - Premium`
3. Set subject:

```text
🚀 New Project Request • {{client_name}} • {{service_count}} service(s)
```

4. Set **To Email** as:

```text
{{to_email}}
```

5. Enable **HTML editor** and paste this template:

```html
<div
  style="margin:0;padding:0;background:#0a0f1f;font-family:Inter,Segoe UI,Arial,sans-serif;"
>
  <table
    role="presentation"
    width="100%"
    cellspacing="0"
    cellpadding="0"
    style="background:linear-gradient(135deg,#0a0f1f,#1a1f3a);padding:32px 16px;"
  >
    <tr>
      <td align="center">
        <table
          role="presentation"
          width="640"
          cellspacing="0"
          cellpadding="0"
          style="max-width:640px;width:100%;background:#10172a;border:1px solid rgba(0,212,255,.2);border-radius:16px;overflow:hidden;"
        >
          <tr>
            <td
              style="padding:20px 24px;background:linear-gradient(90deg,#00d4ff,#0099ff);color:#0a0f1f;font-weight:800;font-size:20px;"
            >
              New Portfolio Lead
            </td>
          </tr>

          <tr>
            <td style="padding:24px;color:#e2e8f0;">
              <p style="margin:0 0 12px;font-size:15px;color:#94a3b8;">
                A new request was submitted from your website.
              </p>
              <p style="margin:0 0 20px;font-size:13px;color:#64748b;">
                Submitted: {{submitted_at}}
              </p>

              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                style="border-collapse:separate;border-spacing:0 10px;"
              >
                <tr>
                  <td style="width:180px;color:#94a3b8;font-size:14px;">
                    Client Name
                  </td>
                  <td style="color:#f8fafc;font-size:14px;font-weight:600;">
                    {{client_name}}
                  </td>
                </tr>
                <tr>
                  <td style="color:#94a3b8;font-size:14px;">Email</td>
                  <td style="font-size:14px;">
                    <a
                      href="mailto:{{client_email}}"
                      style="color:#00d4ff;text-decoration:none;"
                      >{{client_email}}</a
                    >
                  </td>
                </tr>
                <tr>
                  <td style="color:#94a3b8;font-size:14px;">
                    Phone / WhatsApp
                  </td>
                  <td style="font-size:14px;">
                    <a
                      href="https://api.whatsapp.com/send?phone={{phone}}"
                      style="color:#00d4ff;text-decoration:none;"
                      >{{phone}}</a
                    >
                  </td>
                </tr>
                <tr>
                  <td style="color:#94a3b8;font-size:14px;">
                    Services ({{service_count}})
                  </td>
                  <td
                    style="color:#f8fafc;font-size:14px;white-space:pre-line;"
                  >
                    {{services_lines}}
                  </td>
                </tr>
                <tr>
                  <td style="color:#94a3b8;font-size:14px;vertical-align:top;">
                    Project Details
                  </td>
                  <td
                    style="color:#e2e8f0;font-size:14px;line-height:1.6;white-space:pre-line;"
                  >
                    {{description}}
                  </td>
                </tr>
                <tr>
                  <td style="color:#94a3b8;font-size:14px;">
                    Portfolio Needed
                  </td>
                  <td style="color:#f8fafc;font-size:14px;">
                    {{portfolio_request}}
                  </td>
                </tr>
                <tr>
                  <td style="color:#94a3b8;font-size:14px;">Attachment</td>
                  <td style="color:#f8fafc;font-size:14px;">{{file_name}}</td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td
              style="padding:18px 24px;border-top:1px solid rgba(148,163,184,.15);background:#0b1220;color:#64748b;font-size:12px;"
            >
              Source:
              <a
                href="{{website_url}}"
                style="color:#00d4ff;text-decoration:none;"
                >{{website_url}}</a
              >
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</div>
```

6. Save template and **Copy the Template ID** (e.g., `template_xyz789`)

### D. Get Public Key

1. Go to **Account** → **General**
2. Under **API Keys**, find your **Public Key**
3. **Copy the Public Key** (e.g., `abcXYZ123_abc`)

### E. Add Keys to Project

1. Create local env file:

```bash
copy .env.example .env.local
```

2. Open `.env.local` in your editor

3. Replace only EmailJS keys with your real values:

```dotenv
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
REACT_APP_EMAILJS_PUBLIC_KEY=abcXYZ123_abc
```

4. Keep your contact/social values in the same `.env.local` file
5. Save file and **restart dev server** (`npm start`)

## Step 3: Customize Your Content

### A. Personal Information

Use **Find and Replace** (Ctrl+Shift+F in VS Code) to replace:

| Placeholder        | Replace With           | Example           |
| ------------------ | ---------------------- | ----------------- |
| `[YOUR_NAME]`      | Your full name         | John Smith        |
| `[YOUR_BRAND]`     | Your brand name        | CryptoExperts Pro |
| `[YOUR_EMAIL]`     | Your email             | john@example.com  |
| `+[YOUR_PHONE]`    | Your WhatsApp number   | +1234567890       |
| `@[YOUR_TELEGRAM]` | Your Telegram username | @johnsmith        |

### B. Update Portfolio Projects

**File**: `src/sections/PortfolioSection.jsx`

Find the `portfolioItems` array and update:

```javascript
const portfolioItems = [
  {
    id: 1,
    title: "Your Project Name",
    category: "Crypto Projects", // or 'Community Management', 'Graphics Design', etc.
    description: "Short description of your project",
    image: "https://your-image-url.com/image.jpg", // or local path
    link: "https://your-project-link.com",
  },
  // Add more projects...
];
```

### C. Update Social Media Links

**File**: `src/sections/Footer.jsx`

Find the social links section (around line 80-120) and update:

```javascript
<a href="https://github.com/your-username" ...>
<a href="https://linkedin.com/in/your-username" ...>
<a href="https://twitter.com/your-username" ...>
```

## Step 4: Run the Website

```bash
npm start
```

The website will automatically open at **http://localhost:3000**

## Step 5: Test Email Form

1. Scroll to the "Hire Me / Order Now" section
2. Fill out the form:
   - Enter your name
   - Enter your email
   - Select at least one service
   - Write a project description (min 20 characters)
   - Optionally attach a file
3. Click "Send Request"
4. Check your Gmail inbox for the email

## Step 6: Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized `build` folder ready for deployment.

## 🚀 Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add Environment Variables:
   - `REACT_APP_EMAILJS_SERVICE_ID`
   - `REACT_APP_EMAILJS_TEMPLATE_ID`
   - `REACT_APP_EMAILJS_PUBLIC_KEY`
6. Click "Deploy"

## 🔧 Common Issues

### Issue: Tailwind styles not working

**Solution**:

```bash
npm install -D tailwindcss postcss autoprefixer
npm start
```

### Issue: EmailJS not sending

**Solution**:

- Verify `.env.local` exists and keys are real (not `YOUR_...` values)
- Confirm template includes these vars: `to_email`, `client_name`, `client_email`, `phone`, `services_lines`, `service_count`, `description`, `portfolio_request`, `file_name`, `submitted_at`, `website_url`
- Restart dev server after updating `.env.local`
- Check browser console for exact error message
- Test credentials in EmailJS dashboard

### Issue: Images not loading

**Solution**:

- Use full URLs for external images
- Or place images in `public/images/` folder
- Reference as `/images/your-image.jpg`

### Issue: Build errors

**Solution**:

```bash
npm install
npm start
```

## 📝 Quick Checklist

- [ ] Installed dependencies (`npm install`)
- [ ] Created EmailJS account
- [ ] Connected Gmail to EmailJS
- [ ] Created email template in EmailJS
- [ ] Copied Service ID, Template ID, and Public Key
- [ ] Created `.env.local` from `.env.example`
- [ ] Added real EmailJS service/template/public key
- [ ] Added website-style HTML EmailJS template
- [ ] Updated recipient + contact/social values in `.env.local`
- [ ] Updated portfolio projects
- [ ] Tested website locally (`npm start`)
- [ ] Tested email form submission
- [ ] Built for production (`npm run build`)
- [ ] Deployed to hosting platform

## 🎨 Advanced Customization

### Change Color Scheme

**File**: `tailwind.config.js`

```javascript
colors: {
  dark: {
    900: '#your-color', // Main background
    800: '#your-color', // Secondary
    700: '#your-color', // Accent
  },
  neon: {
    cyan: '#your-color', // Primary accent
    blue: '#your-color', // Secondary accent
    purple: '#your-color', // Tertiary
  },
}
```

### Add/Remove Services

**File**: `src/sections/ServicesSection.jsx` (line ~15-70)

Add or modify items in the `serviceCategories` array.

### Modify Animations

**File**: `src/index.css` (bottom section)

Adjust animation speeds, delays, and effects.

## 💡 Pro Tips

1. **Use high-quality images** for portfolio (min 800x600px)
2. **Keep descriptions short** and impactful (2-3 sentences)
3. **Test on mobile** using browser DevTools (F12)
4. **Update copyright year** in Footer.jsx
5. **Add Google Analytics** in `public/index.html` if needed
6. **Enable HTTPS** on your domain for EmailJS to work properly in production

## 📞 Need Help?

Refer to:

- EmailJS Docs: https://www.emailjs.com/docs/
- Framer Motion: https://www.framer.com/motion/
- Tailwind CSS: https://tailwindcss.com/docs
- React Docs: https://react.dev

---

**Your premium portfolio is ready! 🚀**
