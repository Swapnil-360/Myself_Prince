import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import Button from "../components/Button";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 px-4 md:px-8 lg:px-16 flex items-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
        transition={{
          duration: 4,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Personalized Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              <span className="block mb-2 text-gray-900 dark:text-white">
                Hi, I'm <span className="gradient-text">Prince</span>
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300">
                from Bangladesh 🇧🇩
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300"
            >
              I'm Subrata Barman Prince, and I work with businesses to help them grow online. My focus is on creating websites that look great and actually bring results. I also help with SEO to get more visibility on Google, manage social media campaigns, and build strong brand identities. Whether you need a complete digital strategy or just want to improve one area, I'm here to make it happen. Let's work together to take your business to the next level.
            </motion.p>

            {/* Team Services */}
            <motion.div
              variants={itemVariants}
              className="glass-card rounded-lg p-4 md:p-6 border-cyan-400/40 dark:border-cyan-500/30 !bg-white/90 dark:!bg-white/5"
            >
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-200 mb-3">
                <span className="font-semibold text-gray-900 dark:text-white block mb-2">
                  I Specialize In:
                </span>
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-800 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-600 dark:text-cyan-400">✓</span>
                  <span>Web Design & Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-cyan-400">✓</span>
                  <span>SEO Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 dark:text-cyan-400">✓</span>
                  <span>YouTube Growth Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pink-600 dark:text-cyan-400">✓</span>
                  <span>E-Commerce Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-cyan-400">✓</span>
                  <span>Social Media Marketing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-600 dark:text-cyan-400">✓</span>
                  <span>Digital Branding</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4 pb-8"
            >
              <Button size="lg" className="w-full sm:w-auto" href="#hire">
                Hire Me Now
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                href="#services"
              >
                View Services
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto"
                href="#portfolio"
              >
                Explore Reviews
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 dark:opacity-30 animate-pulse"></div>

              {/* Profile Picture Container */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cyan-500/50 dark:border-cyan-500/50 shadow-glow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Placeholder Profile Picture - Replace with your image */}
                <img
                  src="/images/prince-profile.jpg"
                  alt="Prince - Digital Marketing & Web Expert"
                  className="w-full h-full object-cover"
                />

                {/* Overlay with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 dark:from-dark-900/60 via-transparent to-transparent"></div>

                {/* Badge */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 glass-card px-4 py-2 rounded-full border border-cyan-500/70 dark:border-cyan-400/50 bg-white/90 dark:bg-dark-900/80">
                  <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                    3+ Years Experience
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Centered between Home and Services */}
      <motion.a
        href="#services"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        animate={{
          y: [0, 15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.2 }}
      >
        <ArrowDown size={36} className="text-cyan-600 dark:text-cyan-400" />
      </motion.a>
    </section>
  );
}
