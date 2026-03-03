import { motion } from "framer-motion";

export default function AnimatedCard({
  children,
  className = "",
  index = 0,
  glowEffect = true,
}) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: index * 0.05,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={containerVariants}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 40px rgba(0, 212, 255, 0.2)",
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
      className={`
        glass-card rounded-lg p-6
        border border-cyan-400/40 dark:border-cyan-500/30
        hover:border-cyan-500/70 dark:hover:border-cyan-400/60
        bg-white/80 dark:bg-white/5
        transition-all duration-200
        ${glowEffect ? "glow-effect" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
