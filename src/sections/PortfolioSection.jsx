import { motion } from "framer-motion";
import { Star, User2 } from "lucide-react";
import Section from "../components/Section";
import AnimatedCard from "../components/AnimatedCard";

export default function PortfolioSection() {
  const testimonials = [
    {
      id: 1,
      name: "Rahid Ahmed",
      company: "TechStart BD",
      role: "Founder",
      service: "Website Development",
      rating: 5,
      gender: "male",
      review:
        "Prince delivered an amazing website for our startup. The design is modern, responsive, and perfectly optimized for SEO. Our organic traffic increased by 150% within 3 months!",
    },
    {
      id: 2,
      name: "Fatima Khan",
      company: "Digital Agency Dhaka",
      role: "Marketing Manager",
      service: "SEO Optimization",
      rating: 5,
      gender: "female",
      review:
        "Outstanding SEO services! Prince's on-page and off-page optimization strategies helped us rank for competitive keywords. Their detailed audit was exactly what we needed.",
    },
    {
      id: 3,
      name: "Karim Hassan",
      company: "Fashion Boutique",
      role: "Owner",
      service: "Graphics Design",
      rating: 5,
      gender: "male",
      review:
        "Prince created beautiful brand identity designs for our boutique. The logos and social media graphics are exactly what we envisioned. Highly recommended!",
    },
    {
      id: 4,
      name: "Sabia Akter",
      company: "E-Commerce Hub",
      role: "CEO",
      service: "Website Development + SEO",
      rating: 5,
      gender: "female",
      review:
        "Best decision we made for our e-commerce store. Prince built a fast, secure, and SEO-friendly website. Sales improved significantly after launch!",
    },
    {
      id: 5,
      name: "Mohammad Iqbal",
      company: "Online Education",
      role: "Director",
      service: "Graphics Design",
      rating: 5,
      gender: "male",
      review:
        "Prince's graphics design work transformed our brand. The visual consistency across all platforms increased our brand recognition immensely.",
    },
    {
      id: 6,
      name: "Nusrat Jahan",
      company: "Business Solutions",
      role: "Manager",
      service: "Website Development",
      rating: 5,
      gender: "female",
      review:
        "Professional, creative, and deadline-oriented. Prince developed our corporate website with SEO integration. The results exceeded our expectations!",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <Section id="portfolio">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Client <span className="gradient-text">Reviews</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            What clients from Bangladesh say about our work in website
            development, SEO, and graphics design.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="group"
            >
              <AnimatedCard index={index} className="h-full flex flex-col">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 flex-grow">
                  "{testimonial.review}"
                </p>

                {/* Service Tag */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-xs font-semibold rounded-full">
                    {testimonial.service}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      testimonial.gender === "female"
                        ? "bg-pink-100 dark:bg-pink-900/30"
                        : "bg-blue-100 dark:bg-blue-900/30"
                    }`}
                  >
                    <User2
                      size={24}
                      className={
                        testimonial.gender === "female"
                          ? "text-pink-600 dark:text-pink-400"
                          : "text-blue-600 dark:text-blue-400"
                      }
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to start your project with a professional freelancer?
          </p>
          <motion.a
            href="#hire"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-dark-900 font-semibold rounded-lg hover:shadow-glow-lg transition-all duration-300"
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </Section>
  );
}
