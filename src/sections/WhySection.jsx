import { motion } from "framer-motion";
import {
  Target,
  Briefcase,
  TrendingUp,
  Clock,
  Users,
  Lightbulb,
} from "lucide-react";
import Section from "../components/Section";
import AnimatedCard from "../components/AnimatedCard";

export default function WhySection() {
  const reasons = [
    {
      icon: Target,
      title: "Real Niche Expertise",
      description:
        "Not a generalist. 3+ years specifically in crypto project support and community growth—I understand Web3 dynamics deeply.",
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description:
        "Demonstrable experience building engaged communities, managing projects, and delivering results in fast-paced crypto environments.",
    },
    {
      icon: Users,
      title: "Team-Backed Delivery",
      description:
        "Unlike solo freelancers, I bring a graphics design team and video editing team. Scale your projects without hiring multiple freelancers.",
    },
    {
      icon: Briefcase,
      title: "Multi-Disciplinary Skills",
      description:
        "Rare combination: crypto/community expertise + creative design + frontend development. One partner, multiple disciplines.",
    },
    {
      icon: Clock,
      title: "Fast Communication",
      description:
        "Crypto moves fast. I respond quickly, understand urgency, and adapt to your project timeline and needs.",
    },
    {
      icon: Lightbulb,
      title: "Strategic Thinking",
      description:
        "Not just execution. I bring strategic insights on community growth, project positioning, and growth opportunities.",
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

  return (
    <Section id="why" bgGradient>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose Me Over{" "}
            <span className="gradient-text">Solo Freelancers?</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm built differently. Here's what sets me apart and why serious
            projects choose me.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <AnimatedCard
                key={reason.title}
                index={index}
                className="flex flex-col !p-6"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                    <Icon size={24} className="text-dark-900" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-300 text-sm flex-grow">
                  {reason.description}
                </p>
              </AnimatedCard>
            );
          })}
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 glass-card rounded-lg p-8 md:p-12 border-cyan-500/30 text-center"
        >
          <p className="text-xl md:text-2xl font-semibold mb-4">
            <span className="gradient-text">Your Strategic Partner</span>
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            I don't just execute—I partner with you to understand your vision,
            anticipate challenges, and deliver solutions that move your project
            forward. With 3+ years in crypto and support from a creative team,
            I'm equipped to be the experienced partner your project deserves.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
