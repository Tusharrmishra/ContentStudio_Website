import React from "react";
import { motion } from "motion/react";
import { Target, Eye, Heart, Zap, Users, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    icon: Zap,
    title: "End-to-End Performance Ads",
    description:
      "Full-service campaign management, from digital concepts to AI-driven, multi-language ad delivery.",
  },
  {
    icon: Users,
    title: "Social Media IP’s",
    description:
      "Developing signature, community-building content like podcasts, quizzes, live streams, and short-form video series.",
  },
  {
    icon: Award,
    title: "Content Strategy",
    description:
      "Building the roadmap for your brand's voice, growth, and audience connection.",
  },
  {
    icon: Heart,
    title: "Video Production",
    description:
      "Complete, in-house production services from initial concept to final cut.",
  },
  // {
  //   icon: Target,
  //   title: "Social Media Content",
  //   description:
  //     "Platform-optimized content designed to maximize engagement and build community around your brand.",
  // },
  // {
  //   icon: Eye,
  //   title: "Animation & Motion Graphics",
  //   description:
  //     "Eye-catching animations and motion graphics that bring complex ideas to life in engaging ways.",
  // },
];

// const values = [
//   {
//     title: "Creativity First",
//     description:
//       "We believe in the power of creative thinking to solve complex challenges and create memorable experiences.",
//   },
//   {
//     title: "Authenticity",
//     description:
//       "We create genuine, honest content that resonates with real people and builds trust.",
//   },
//   {
//     title: "Excellence",
//     description:
//       "We pursue excellence in every frame, every edit, and every story we tell.",
//   },
//   {
//     title: "Collaboration",
//     description:
//       "We work closely with our clients as partners, combining our expertise with their vision.",
//   },
// ];

export function AboutPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-white"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            We are a video-first creative agency dedicated to building
            communities for brands on Social Media. We help brands and
            individuals move beyond simple marketing by creating unique video
            content that forges a loyal and engaged audience.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="mb-6">Our Story</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-600"
            >
              <p>
                Our story began in 2020. Our founder started as @yourpokerguy
                and grew to become India’s #1 poker content creator, amassing
                over 25K+ followers in a highly niche category.
              </p>
              <p>
                While working with top-tier brands (MPL, Pokerbaazi) and
                celebrities (AB Devilliers, Ali Fazal), he identified a critical
                gap: brands wanted to build loyal communities through content
                but lacked the strategy to do so effectively.
              </p>
              <p>
                YourContentStudio was born to fix this. In just 12 months, we’ve
                partnered with leading companies across gaming, education, and
                astrology, delivering over 1,000+ pieces of content and proving
                our community-first model.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">What We Do</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We specialize in creating digital content that tells stories,
              builds brands, and drives measurable results. From concept to
              delivery, we handle every aspect of content creation with
              creativity and precision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Image Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="/images/Aboutus1.jpg"
                alt="Studio"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="/images/Aboutus2.jpg"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-white"
          >
            Let's Create Something Amazing Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto"
          >
            Ready to elevate your brand with compelling content?
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-purple-900 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </motion.button>
        </div>
      </section>
    </div>
  );
}
