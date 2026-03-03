export const SOCIAL_LINKS = {
  email: process.env.REACT_APP_CONTACT_EMAIL || "princevarman615@gmail.com",
  phone: process.env.REACT_APP_CONTACT_PHONE || "+8801764587767",
};

const toStringValue = (value) => (value || "").toString().trim();

const isAbsoluteUrl = (value) => /^https?:\/\//i.test(value);

const looksLikeUrl = (value) =>
  isAbsoluteUrl(value) || value.startsWith("www.");

const toAbsoluteUrl = (value) =>
  isAbsoluteUrl(value) ? value : `https://${value}`;

const getDigitsOnly = (value) => value.replace(/\D/g, "");

export const getSocialHref = (platform, value) => {
  const rawValue = toStringValue(value);

  if (!rawValue) {
    return "#";
  }

  switch (platform) {
    case "email":
      return `https://mail.google.com/mail/?view=cm&to=${rawValue}`;

    case "whatsapp":
      if (looksLikeUrl(rawValue)) {
        return toAbsoluteUrl(rawValue);
      }

      if (!getDigitsOnly(rawValue)) {
        return "#";
      }

      return `https://api.whatsapp.com/send?phone=${getDigitsOnly(rawValue)}`;

    default:
      return "#";
  }
};

export const getSocialDisplay = (platform, value) => {
  const rawValue = toStringValue(value);

  if (!rawValue) {
    return rawValue;
  }

  switch (platform) {
    default:
      return rawValue;
  }
};

export const EMAIL_BACKEND = {
  recipientEmail: process.env.REACT_APP_CONTACT_EMAIL || "[YOUR_EMAIL]",
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};
