import { motion } from "motion/react";
import {
  TrendingUp,
  Users,
  Trophy,
  DollarSign,
  Play,
  Target,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CaseStudy {
  title: string;
  client: string;
  category: string;
  image: string;
  challenge: string;
  solution: string;
  results: Array<{
    label: string;
    value: string;
    icon: any;
  }>;
  videoLinks?: Array<{
    url: string;
    label: string;
  }>;
  highlights?: string[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "Generating ₹2Cr+ from a Single IP: The Pocket52 Bankroll Challenge",
    client: "Pocket52",
    category: "Video IP & Gaming Content",
    image: "/images/Pocket52.jpg",
    challenge:
      "Pocket52 was positioned at Number 4 in the Indian Poker System in terms of concurrent players playing cash games on the platform. They needed a unique content IP to drive engagement and increase platform traffic during off-peak hours, particularly on Monday evenings.",
    solution:
      "We created the Bankroll Challenge - India's first-ever trophy-based cash game IP. This was a home game format where over 100+ players would come together every week to play with their favorite poker streamers. Pocket52 allocated a budget of Rs 50K-75K as prizepool for these 3-hour sessions, distributed to Top 10 winners based on profits generated. The unique selling points were: playing with known streamers, winning a physical trophy, bragging rights on social media, and live callouts from favorite poker streamers. We executed this over 51 weekly sessions.",
    results: [
      { label: "Total Business Generated", value: "₹2Cr+", icon: DollarSign },
      { label: "Sessions Completed", value: "51", icon: Play },
      { label: "Peak Rake per Session", value: "₹5L", icon: TrendingUp },
      { label: "Players per Session", value: "100+", icon: Users },
    ],
    videoLinks: [
      {
        url: "https://www.youtube.com/watch?v=btcBad92bG8&t=607s",
        label: "Watch Bankroll Challenge Session 1",
      },
      // {
      //   url: "https://www.youtube.com/watch?v=lDqvIiHmmlQ",
      //   label: "Watch Bankroll Challenge Session 2",
      // },
    ],
    highlights: [
      "For those 3 hours on a dull Monday, P52 became the site with MAXIMUM traffic across India",
      "Rake of up to Rs 5L was being generated in just 3 hours",
      "Created a thrilling community experience with trophy wins and social media engagement",
      "Over Rs 2Cr+ business generated through a single IP concept",
    ],
  },
  {
    title:
      "From 200 to 600+: A Case Study in Driving 3X Player Growth through Content",
    client: "Natural8 India",
    category: "Content Marketing & Community Building",
    image: "/images/Natural8.jpg",
    challenge:
      'Natural8 India was fairly new in the Indian market with trust issues. Players associated them more as an International brand rather than an Indian brand. They had a unique "INDIA EXCLUSIVE" offering - taking poker players to different Asian poker tours (Taipei, Manila, Korea, etc.) for free. Players only had to play a special Rs 5,500 buy-in event to qualify. Despite this attractive offer, entries for APT X N8 events were stuck at around 200 applicants.',
    solution:
      "We developed a comprehensive content and community engagement strategy: Daily vlogging from tournament stops to showcase the experience; Creating content with players who attended to inspire future participants; Developing a Housie-type IP before Rs 5,500 qualifiers to build excitement; Building trust through showcasing player experiences and offering freebies; Creating funny reels prior to events to generate buzz; Establishing a communication circle with top poker pros in the country to create organic conversation about the offering.",
    results: [
      { label: "Growth Rate", value: "3X", icon: TrendingUp },
      { label: "Final Entries", value: "600+", icon: Target },
      { label: "Time to Achieve", value: "8 Months", icon: Trophy },
      { label: "Entry Growth", value: "186%", icon: Users },
    ],
    highlights: [
      "Entries jumped from 213 → 275 → 380 → 610 over 8 months",
      "3X growth in participant numbers in less than a year",
      "Successfully positioned Natural8 as a trusted Indian brand",
      "Created sustainable content pipeline with daily vlogs and community engagement",
    ],
  },
];

export function CaseStudiesPage() {
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
            Case Studies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Dive deep into how we've helped brands achieve remarkable results
            through strategic content creation
          </motion.p>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <section
          key={index}
          className={index % 2 === 0 ? "py-20 bg-white" : "py-20 bg-gray-50"}
        >
          <div className="container mx-auto px-4">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-900 rounded-full mb-4">
                {study.category}
              </span>
              <h2 className="mb-4">{study.title}</h2>
              <p className="text-xl text-gray-600">{study.client}</p>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="max-w-4xl mx-auto">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>

            {/* Challenge & Solution */}
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="mb-4">The Challenge</h3>
                <p className="text-gray-600">{study.challenge}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="mb-4">Our Solution</h3>
                <p className="text-gray-600">{study.solution}</p>
              </motion.div>
            </div>

            {/* Key Highlights */}
            {study.highlights && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="mb-6">Key Highlights</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {study.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-xl"
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="mb-8 text-center">The Results</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {study.results.map((result, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mb-4">
                      <result.icon className="text-white" size={20} />
                    </div>
                    <div className="text-purple-900 mb-2">{result.value}</div>
                    <p className="text-sm text-gray-600">{result.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Video Links */}
            {study.videoLinks && study.videoLinks.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="mb-6 text-center">Watch The Content</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {study.videoLinks.map((link, idx) => (
                    <motion.a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
                    >
                      <Play size={20} />
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-white"
          >
            Want Results Like These?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how we can help you achieve your marketing goals
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
            Start Your Project
          </motion.button>
        </div>
      </section>
    </div>
  );
}
