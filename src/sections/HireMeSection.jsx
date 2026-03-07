import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import Section from "../components/Section";
import { EMAIL_BACKEND } from "../config/siteConfig";

export default function HireMeSection() {
  const services = [
    "Custom Website Design",
    "Landing Page Development",
    "E-Commerce Websites",
    "Portfolio & Business Sites",
    "Website Maintenance",
    "Keyword Research & Strategy",
    "On-Page SEO Optimization",
    "Technical SEO Audits",
    "Channel Optimization",
    "Video SEO",
    "Monetization Strategy",
    "Product Listings Optimization",
    "Store Management",
    "Facebook & Instagram Marketing",
    "LinkedIn Marketing",
    "Content Strategy",
    "Engagement & Growth",
    "Logo Design",
    "Brand Guidelines",
    "Visual Identity",
    "Facebook & Google Ads",
    "Email Campaign Management",
  ];

  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    phone: "",
    services: [],
    description: "",
    file: null,
    portfolio: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [fileName, setFileName] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setMessage({ type: "error", text: "File size must be less than 5MB." });
        return;
      }
      setFormData((prev) => ({
        ...prev,
        file,
      }));
      setFileName(file.name);
      setMessage({ type: "", text: "" });
    }
  };

  const removeFile = () => {
    setFormData((prev) => ({
      ...prev,
      file: null,
    }));
    setFileName("");
  };

  const validateForm = () => {
    if (!formData.clientName.trim()) {
      setMessage({ type: "error", text: "Please enter your name." });
      return false;
    }
    if (
      !formData.clientEmail.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.clientEmail)
    ) {
      setMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return false;
    }
    if (formData.services.length === 0) {
      setMessage({
        type: "error",
        text: "Please select at least one service.",
      });
      return false;
    }
    if (formData.description.trim().length < 20) {
      setMessage({
        type: "error",
        text: "Please provide a detailed project description (at least 20 characters).",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const { serviceId, templateId, publicKey, recipientEmail } =
        EMAIL_BACKEND;

      const hasMissingEmailJsConfig =
        !serviceId ||
        !templateId ||
        !publicKey ||
        serviceId.includes("YOUR_") ||
        templateId.includes("YOUR_") ||
        publicKey.includes("YOUR_") ||
        serviceId.includes("xxxx") ||
        templateId.includes("xxxx") ||
        publicKey.includes("xxxx");

      if (hasMissingEmailJsConfig) {
        throw new Error(
          "EmailJS is not configured. Copy .env.example to .env.local and set real values.",
        );
      }

      if (!recipientEmail || recipientEmail.includes("[YOUR_EMAIL]")) {
        throw new Error(
          "Recipient email is not configured. Set REACT_APP_CONTACT_EMAIL in .env.local",
        );
      }

      // Initialize EmailJS once
      if (!window.emailjsInitialized) {
        emailjs.init(publicKey);
        window.emailjsInitialized = true;
      }

      // Prepare email data
      const submittedAt = new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });

      const emailParams = {
        to_email: recipientEmail,
        name: formData.clientName,
        email: formData.clientEmail,
        phone: formData.phone || "Not provided",
        services: formData.services.join(", "),
        services_lines: formData.services
          .map((service) => `• ${service}`)
          .join("\n"),
        service_count: formData.services.length,
        description: formData.description,
        message: formData.description,
        portfolio_request: formData.portfolio ? "Yes" : "No",
        file_name: formData.file ? formData.file.name : "No file attached",
        submitted_at: submittedAt,
        website_url: window.location.origin,
      };

      // Send email
      const response = await emailjs.send(serviceId, templateId, emailParams);

      if (response.status === 200) {
        setMessage({
          type: "success",
          text: "✓ Request sent successfully! I'll get back to you within 24 hours.",
        });
        // Reset form
        setFormData({
          clientName: "",
          clientEmail: "",
          phone: "",
          services: [],
          description: "",
          file: null,
          portfolio: false,
        });
        setFileName("");
      }
    } catch (error) {
      const errorText =
        error?.message &&
        (error.message.includes("EmailJS is not configured") ||
          error.message.includes("Recipient email is not configured"))
          ? error.message
          : "Failed to send request. Please try again or contact me directly.";
      setMessage({
        type: "error",
        text: errorText,
      });
    } finally {
      setLoading(false);
      // Clear message after 5 seconds
      setTimeout(() => setMessage({ type: "", text: "" }), 5000);
    }
  };

  return (
    <Section id="hire" bgGradient>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Hire Me / <span className="gradient-text">Order Now</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Select your services, describe your project, and submit your
            request. I'll review and contact you within 24 hours.
          </p>
          <div className="glass-card rounded-lg p-4 border-cyan-500/30 inline-block">
            <p className="text-sm md:text-base text-cyan-600 dark:text-cyan-400 font-semibold">
              Let's build your project with strategy, creativity, and modern
              execution.
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-lg p-8 border-cyan-500/30 space-y-8"
        >
          {/* Messages */}
          {message.text && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg flex items-gap-3 ${
                message.type === "success"
                  ? "bg-green-500/20 border border-green-500/30 text-green-300"
                  : "bg-red-500/20 border border-red-500/30 text-red-300"
              }`}
            >
              {message.type === "success" ? (
                <CheckCircle size={20} className="flex-shrink-0" />
              ) : (
                <AlertCircle size={20} className="flex-shrink-0" />
              )}
              <span>{message.text}</span>
            </motion.div>
          )}

          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                Full Name *
              </label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-dark-800/50 border border-gray-300 dark:border-cyan-500/20 focus:border-cyan-500 dark:focus:border-cyan-400 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                Email Address *
              </label>
              <input
                type="email"
                name="clientEmail"
                value={formData.clientEmail}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-dark-800/50 border border-gray-300 dark:border-cyan-500/20 focus:border-cyan-500 dark:focus:border-cyan-400 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-dark-800/50 border border-gray-300 dark:border-cyan-500/20 focus:border-cyan-500 dark:focus:border-cyan-400 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
              placeholder="+8801XXXXXXXXX"
            />
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-sm font-semibold mb-4 text-gray-900 dark:text-white">
              Select Services *
            </label>
            <div className="grid md:grid-cols-2 gap-3">
              {services.map((service) => (
                <motion.label
                  key={service}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-dark-800/50 border border-gray-300 dark:border-cyan-500/20 cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceToggle(service)}
                    className="w-4 h-4 accent-cyan-400 cursor-pointer"
                  />
                  <span className="text-sm text-gray-900 dark:text-white">
                    {service}
                  </span>
                </motion.label>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
              Project Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-dark-800/50 border border-gray-300 dark:border-cyan-500/20 focus:border-cyan-500 dark:focus:border-cyan-400 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors resize-none"
              rows="5"
              placeholder="Describe your project in detail. What are your goals, timeline, and specific requirements?"
              required
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {formData.description.length} characters
            </p>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
              Attach Files (Optional)
            </label>
            <div className="space-y-3">
              {!fileName ? (
                <label className="flex items-center justify-center gap-2 p-6 rounded-lg border-2 border-dashed border-gray-300 dark:border-cyan-500/30 hover:border-cyan-500 dark:hover:border-cyan-400 cursor-pointer transition-colors">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.zip"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Click to upload or drag and drop (Max 5MB)
                  </span>
                </label>
              ) : (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-between">
                  <span className="text-sm text-green-300">✓ {fileName}</span>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="text-xs px-3 py-1 rounded bg-red-500/20 text-red-300 hover:bg-red-500/40 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Portfolio Checkbox */}
          <motion.label
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 p-4 rounded-lg bg-gray-100 dark:bg-dark-800/50 border border-gray-300 dark:border-cyan-500/20 cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors"
          >
            <input
              type="checkbox"
              name="portfolio"
              checked={formData.portfolio}
              onChange={handleInputChange}
              className="w-4 h-4 accent-cyan-400 cursor-pointer"
            />
            <span className="text-sm text-gray-900 dark:text-white">
              Include portfolio recommendations and case studies
            </span>
          </motion.label>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-cyan-400 to-blue-500 text-dark-900 hover:shadow-glow-lg"
            }`}
          >
            {loading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-5 h-5 border-2 border-dark-900 border-t-transparent rounded-full"
                />
                Sending...
              </>
            ) : (
              <>
                <Send size={20} />
                Send Request
              </>
            )}
          </motion.button>

          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            I'll review your request and contact you within 24 hours.
          </p>
        </motion.form>
      </div>
    </Section>
  );
}
