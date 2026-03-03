import { motion } from "framer-motion";
import {
  Globe,
  Search,
  Youtube,
  ShoppingCart,
  Share,
  Palette,
  BarChart,
  Mail,
} from "lucide-react";
import Section from "../components/Section";
import AnimatedCard from "../components/AnimatedCard";

export default function ServicesSection() {
  const serviceCategories = [
    {
      title: "Web Design & Development",
      icon: Globe,
      services: [
        {
          name: "Website Development",
          description: "Complete, responsive website design and development.",
        },
        {
          name: "Complete Website Design + SEO",
          description:
            "Professional website design with full SEO optimization.",
        },
        {
          name: "Website Design + SEO Setup",
          description: "Custom design paired with comprehensive SEO setup.",
        },
        {
          name: "Basic Website Landing Page Design",
          description:
            "High-converting landing pages optimized for conversions.",
        },
        {
          name: "Website Redesign + SEO Setup",
          description:
            "Transform existing websites with modern design and SEO.",
        },
      ],
    },
    {
      title: "SEO Services",
      icon: Search,
      services: [
        {
          name: "SEO Optimization (On-Page + Off-Page)",
          description:
            "Complete on-page and off-page SEO optimization strategy.",
        },
        {
          name: "SEO Audit + Keyword Research Package",
          description: "Comprehensive audit with in-depth keyword research.",
        },
        {
          name: "Google My Business Setup + Optimization",
          description: "Complete GMB optimization for local search visibility.",
        },
      ],
    },
    {
      title: "YouTube Growth Services",
      icon: Youtube,
      services: [
        {
          name: "YouTube SEO",
          description: "Complete YouTube channel optimization for growth.",
        },
        {
          name: "YouTube SEO + Video Optimization Package",
          description:
            "Full YouTube SEO with thumbnail and metadata optimization.",
        },
        {
          name: "Video Editing Package",
          description: "Professional video editing with motion graphics.",
        },
      ],
    },
    {
      title: "E-Commerce Solutions",
      icon: ShoppingCart,
      services: [
        {
          name: "Full E-Commerce Store Setup (WooCommerce)",
          description: "Complete WooCommerce store with products and payments.",
        },
        {
          name: "Full E-Commerce Store Setup (Shopify)",
          description: "Professional Shopify store setup and optimization.",
        },
      ],
    },
    {
      title: "Social Media Marketing",
      icon: Share,
      services: [
        {
          name: "Social Media Marketing + Content Production",
          description: "Strategy, content creation, and community management.",
        },
        {
          name: "Full Social Media Marketing Package",
          description: "Complete social media management across all platforms.",
        },
        {
          name: "Monthly Page Boosting & Monitoring",
          description: "Ongoing content promotion and performance tracking.",
        },
        {
          name: "Influencer Outreach & Campaign Setup",
          description: "Strategic influencer partnerships and campaigns.",
        },
      ],
    },
    {
      title: "Branding & Creative Services",
      icon: Palette,
      services: [
        {
          name: "Complete Digital Branding + Social Media Setup",
          description:
            "Full brand identity with complete social media presence.",
        },
        {
          name: "Content Creation + Branding (Graphics + Posts)",
          description: "Professional graphics and branded content creation.",
        },
        {
          name: "Branding Package",
          description: "Logo, brand guidelines, and visual identity system.",
        },
      ],
    },
    {
      title: "Paid Advertising & Campaign Management",
      icon: BarChart,
      services: [
        {
          name: "Facebook Ads Management",
          description: "Professional Facebook ad campaigns and optimization.",
        },
      ],
    },
    {
      title: "Email Marketing",
      icon: Mail,
      services: [
        {
          name: "Email Marketing Campaign",
          description: "Complete email marketing setup with automation.",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const colorSchemes = [
    { light: "from-cyan-500 to-blue-500", dark: "from-cyan-400 to-blue-500" },
    {
      light: "from-purple-500 to-pink-500",
      dark: "from-purple-400 to-pink-500",
    },
    {
      light: "from-orange-500 to-red-500",
      dark: "from-orange-400 to-red-500",
    },
    {
      light: "from-green-500 to-teal-500",
      dark: "from-green-400 to-teal-500",
    },
    {
      light: "from-indigo-500 to-purple-500",
      dark: "from-indigo-400 to-purple-500",
    },
    {
      light: "from-pink-500 to-rose-500",
      dark: "from-pink-400 to-rose-500",
    },
    {
      light: "from-blue-500 to-cyan-500",
      dark: "from-blue-400 to-cyan-500",
    },
    {
      light: "from-amber-500 to-orange-500",
      dark: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <Section id="services">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Premium <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions across 8 service categories including web
            design, SEO, YouTube growth, e-commerce, social media marketing,
            branding, advertising, and email marketing.
          </p>
        </motion.div>

        {/* Service Categories Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {serviceCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const colorScheme =
              colorSchemes[categoryIndex % colorSchemes.length];

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.05 }}
              >
                <AnimatedCard className="h-full flex flex-col">
                  {/* Category Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 15,
                      }}
                      className={`w-14 h-14 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0 bg-gradient-to-br ${colorScheme.light}`}
                    >
                      <Icon size={28} className="text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Services List */}
                  <div className="space-y-3 flex-grow">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: serviceIndex * 0.05,
                        }}
                        className="group"
                      >
                        <div className="text-sm">
                          <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-1 group-hover:text-cyan-500 transition-colors">
                            ✓ {service.name}
                          </h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {service.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-16 glass-card rounded-lg p-8 border-cyan-500/40 dark:border-cyan-500/30 bg-white/80 dark:bg-white/5"
        >
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
            Need a custom package combining multiple services? Let's discuss
            your specific project requirements and create the perfect solution.
          </p>
          <motion.a
            href="#hire"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 text-white dark:text-dark-900 font-semibold rounded-lg hover:shadow-glow-lg transition-all duration-200"
          >
            Get Your Custom Quote
          </motion.a>
        </motion.div>
      </div>
    </Section>
  );
}
