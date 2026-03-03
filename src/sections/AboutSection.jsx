import { motion } from "framer-motion";
import { CheckCircle, Users, Zap, Code } from "lucide-react";
import Section from "../components/Section";
import AnimatedCard from "../components/AnimatedCard";

export default function AboutSection() {
  const highlights = [
    {
      icon: Zap,
      title: "3+ Years Experience",
      description:
        "Deep expertise in crypto project support and community growth in fast-paced Web3 environments.",
    },
    {
      icon: Users,
      title: "Team-Backed Delivery",
      description:
        "Graphics design team and video editing team ready to execute your creative vision at scale.",
    },
    {
      icon: Code,
      title: "Technical Expertise",
      description:
        "Modern frontend development for websites and mobile app interfaces using latest technologies.",
    },
    {
      icon: CheckCircle,
      title: "Multi-Disciplinary",
      description:
        "Unique combination of crypto/community knowledge, creative design, and technical development.",
    },
  ];

  return (
    <Section id="about" bgGradient>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Your{" "}
            <span className="gradient-text">Crypto Project Specialist</span>{" "}
            with Creative Power
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl">
            I combine 3+ years of battle-tested crypto project support with a
            team of talented designers and developers. This rare mix ensures
            your project gets strategic guidance, stunning creative assets, and
            modern technical execution—all from one trusted source.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <AnimatedCard
                key={highlight.title}
                index={index}
                className="!p-6"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
                      <Icon size={24} className="text-dark-900" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-300">{highlight.description}</p>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>

        {/* Key Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass-card rounded-lg p-8 border-cyan-500/30 select-text cursor-text"
          whileHover={{ scale: 1.01 }}
        >
          <p className="text-center text-lg md:text-xl leading-relaxed select-text">
            <span className="font-semibold text-cyan-400">
              Most freelancers are one-dimensional.
            </span>{" "}
            I bring depth: from understanding crypto market dynamics and
            building engaged communities, to creating visually stunning designs
            and building responsive web experiences. This makes me your
            strategic partner, not just a service provider.
          </p>
        </motion.div>

        {/* Team Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="glass-card rounded-lg p-6 border-cyan-500/20 text-center">
            <h3 className="font-bold text-cyan-400 mb-2">Crypto Expertise</h3>
            <p className="text-sm text-gray-300">
              Project support, community management, and growth strategy for
              Web3 projects.
            </p>
          </div>
          <div className="glass-card rounded-lg p-6 border-cyan-500/20 text-center">
            <h3 className="font-bold text-cyan-400 mb-2">Creative Team</h3>
            <p className="text-sm text-gray-300">
              Professional graphics designers and video editors ready to elevate
              your brand.
            </p>
          </div>
          <div className="glass-card rounded-lg p-6 border-cyan-500/20 text-center">
            <h3 className="font-bold text-cyan-400 mb-2">Tech Skills</h3>
            <p className="text-sm text-gray-300">
              Modern frontend development for web and app interfaces using
              React, Vue, and more.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
