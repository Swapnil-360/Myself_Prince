import { Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import {
  SOCIAL_LINKS,
  getSocialHref,
  getSocialDisplay,
} from "../config/siteConfig";

export default function SocialLinks({
  email = SOCIAL_LINKS.email,
  phone = SOCIAL_LINKS.phone,
  variant = "default", // 'default' or 'compact'
  className = "",
}) {
  const items = [
    {
      icon: Mail,
      label: "Email",
      value: getSocialDisplay("email", email),
      href: getSocialHref("email", email),
      color: "from-red-500 to-pink-500",
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: getSocialDisplay("whatsapp", phone),
      href: getSocialHref("whatsapp", phone),
      color: "from-green-500 to-emerald-500",
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

  if (variant === "compact") {
    return (
      <motion.div
        className={`flex gap-4 ${className}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`
                p-3 rounded-full
                bg-gradient-to-br ${item.color}
                text-white
                hover:shadow-glow
                transition-all duration-300
              `}
              title={item.label}
            >
              <Icon size={24} />
            </motion.a>
          );
        })}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`space-y-4 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ x: 10 }}
            className={`
              flex items-center gap-4
              p-4 rounded-lg
              glass-card
              group
              transition-all duration-300
            `}
          >
            <div
              className={`
              p-3 rounded-lg
              bg-gradient-to-br ${item.color}
              text-white
              group-hover:scale-110
              transition-transform duration-300
            `}
            >
              <Icon size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-400">{item.label}</p>
              {item.label !== "WhatsApp" && (
                <p className="font-semibold text-white">{item.value}</p>
              )}
            </div>
          </motion.a>
        );
      })}
    </motion.div>
  );
}
