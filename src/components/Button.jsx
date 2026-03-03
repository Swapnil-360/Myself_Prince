import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  disabled = false,
  type = "button",
}) {
  const baseClasses =
    "font-semibold rounded-lg transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 text-white dark:text-dark-900 hover:from-cyan-400 hover:to-blue-500 dark:hover:from-cyan-300 dark:hover:to-blue-400 shadow-lg hover:shadow-glow-lg",
    secondary:
      "bg-transparent border-2 border-cyan-500 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/10 dark:hover:bg-cyan-400/10 hover:border-cyan-600 dark:hover:border-cyan-300",
    ghost:
      "bg-transparent text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-300 dark:border-white/20 hover:border-cyan-500 dark:hover:border-cyan-400",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `;

  const motionVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  if (href) {
    // Check if it's an internal anchor link
    const isInternalLink = href.startsWith("#");

    return (
      <motion.a
        href={href}
        target={isInternalLink ? undefined : "_blank"}
        rel={isInternalLink ? undefined : "noopener noreferrer"}
        className={buttonClasses}
        variants={motionVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      variants={motionVariants}
      initial="initial"
      whileHover={!disabled ? "hover" : "initial"}
      whileTap={!disabled ? "tap" : "initial"}
    >
      {children}
    </motion.button>
  );
}
