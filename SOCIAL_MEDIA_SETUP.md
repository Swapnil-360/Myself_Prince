# Contact Setup Guide (Email + WhatsApp Only)

## Active Contact Methods

Your website connect section now uses only these two contacts:

- **Email**: `princevarman615@gmail.com`
- **WhatsApp / Mobile**: `01764587767`

Telegram, Instagram, Twitter, LinkedIn, and Fiverr are removed from the connect UI.

---

## Where This Is Configured

- `src/config/siteConfig.js`
- `.env.example`
- `src/components/SocialLinks.jsx`
- `src/sections/ContactSection.jsx`
- `src/sections/Footer.jsx`

---

## Environment Variables

Use these in your local `.env` file:

```dotenv
REACT_APP_CONTACT_EMAIL=princevarman615@gmail.com
REACT_APP_CONTACT_PHONE=01764587767
```

---

## Facebook Page (Later)

When you are ready, add your Facebook page link later and it can be included as an additional connect option.

Example format:

```text
https://facebook.com/your-page-name
```

---

## Quick Check

- [ ] Email opens with `mailto:princevarman615@gmail.com`
- [ ] WhatsApp button opens chat using `01764587767`
- [ ] No Telegram/Instagram/Twitter/LinkedIn/Fiverr shown in Contact/Footer
