import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";
import {
  SOCIAL_LINKS,
  getSocialHref,
  getSocialDisplay,
} from "../config/siteConfig";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#portfolio" },
    { label: "Hire Me", href: "#hire" },
    { label: "Contact", href: "#contact" },
  ];

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      href: getSocialHref("email", SOCIAL_LINKS.email),
      value: getSocialDisplay("email", SOCIAL_LINKS.email),
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      href: getSocialHref("whatsapp", SOCIAL_LINKS.phone),
      value: getSocialDisplay("whatsapp", SOCIAL_LINKS.phone),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 border-t border-cyan-500/20"
    >
      <div className="px-4 md:px-8 lg:px-16 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <motion.div
            className="grid md:grid-cols-4 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Brand */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-bold text-lg gradient-text">
                  myself_prince
                </span>
              </div>
              <p className="text-sm text-gray-300 dark:text-gray-300">
                Professional digital marketing, web development, and branding
                services for ambitious businesses.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <h3 className="font-semibold text-gray-100 dark:text-white mb-4">
                Quick Links
              </h3>
              <motion.ul
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {quickLinks.map((link) => (
                  <motion.li key={link.label} variants={itemVariants}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-300 dark:text-gray-400 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors link-underline"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <h3 className="font-semibold text-gray-100 dark:text-white mb-4">
                Services
              </h3>
              <motion.ul
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  "Web Design & Development",
                  "SEO Optimization",
                  "YouTube Growth",
                  "E-Commerce Solutions",
                  "Social Media Marketing",
                  "Branding & Identity",
                ].map((service) => (
                  <motion.li key={service} variants={itemVariants}>
                    <span className="text-sm text-gray-300 dark:text-gray-400">
                      {service}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <h3 className="font-semibold text-gray-100 dark:text-white mb-4">
                Contact
              </h3>
              <motion.div
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      className="flex items-start gap-2 text-sm text-gray-300 dark:text-gray-400 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Icon size={16} className="mt-0.5" />
                      <span>
                        {link.label === "WhatsApp"
                          ? link.label
                          : `${link.label}: ${link.value}`}
                      </span>
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-8 origin-left"
          />

          {/* Bottom Section */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Copyright */}
            <motion.p
              variants={itemVariants}
              className="text-sm text-gray-300 dark:text-gray-400 text-center md:text-left"
            >
              © 25-26 myself_prince. All rights reserved.
            </motion.p>

            {/* Developed by */}
            <motion.div
              variants={itemVariants}
              className="text-sm text-gray-300 dark:text-gray-400 text-center"
            >
              Developed by{" "}
              <span className="font-semibold text-cyan-400">
                S.B. Prince (Myself)
              </span>{" "}
              with <span className="text-red-400">❤</span>
            </motion.div>

            {/* CTA */}
            <motion.a
              href="#hire"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-dark-900 hover:shadow-glow-lg transition-all"
            >
              Start Project
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Top scroll button hint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-4 right-4 md:hidden"
      >
        <motion.a
          href="#home"
          whileHover={{ scale: 1.1 }}
          className="p-2 rounded-full bg-cyan-400/20 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/30"
        >
          ↑
        </motion.a>
      </motion.div>
    </motion.footer>
  );
}
