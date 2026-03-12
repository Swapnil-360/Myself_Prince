import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Section({
  children,
  id = "",
  className = "",
  bgGradient = false,
}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      className={`
        py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 w-full max-w-full overflow-x-hidden
        ${bgGradient ? "bg-gradient-to-br from-gray-100 to-blue-100 dark:from-dark-800 dark:to-dark-700" : ""}
        ${className}
      `}
    >
      <motion.div variants={item}>{children}</motion.div>
    </motion.section>
  );
}
