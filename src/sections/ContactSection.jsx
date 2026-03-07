import { motion } from "framer-motion";
import Section from "../components/Section";
import SocialLinks from "../components/SocialLinks";
import { SOCIAL_LINKS } from "../config/siteConfig";

export default function ContactSection() {
  return (
    <Section id="contact" bgGradient>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Let's Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Ready to scale your project? Reach me by Email or WhatsApp:
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SocialLinks variant="default" {...SOCIAL_LINKS} />
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-lg p-6 border-cyan-500/30">
              <h3 className="font-semibold text-lg mb-2 text-cyan-600 dark:text-cyan-400">
                Response Time
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                I typically respond within 24 hours. Fast communication is a
                priority.
              </p>
            </div>

            <div className="glass-card rounded-lg p-6 border-cyan-500/30">
              <h3 className="font-semibold text-lg mb-2 text-cyan-600 dark:text-cyan-400">
                Time Zone
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Flexible availability. Adjusted to accommodate your time zone
                for crucial calls.
              </p>
            </div>

            <div className="glass-card rounded-lg p-6 border-cyan-500/30">
              <h3 className="font-semibold text-lg mb-2 text-cyan-600 dark:text-cyan-400">
                Preferred Method
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Detailed discussions via Email, quick updates via WhatsApp.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Haven't submitted your project yet?
          </p>
          <motion.a
            href="#hire"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-dark-900 font-semibold rounded-lg hover:shadow-glow-lg transition-all duration-300"
          >
            Submit Your Project Request
          </motion.a>
        </motion.div>
      </div>
    </Section>
  );
}
