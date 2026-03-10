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
        rounded-2xl p-6
        border border-cyan-300/40 dark:border-white/10
        hover:border-cyan-400/60 dark:hover:border-white/20
        bg-white/30 dark:bg-white/5
        backdrop-blur-xl backdrop-saturate-150
        shadow-lg hover:shadow-xl
        transition-all duration-200
        ${glowEffect ? "glow-effect" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
