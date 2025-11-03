import { motion } from "motion/react";
import { Star, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ClientsSlider } from "./ClientsSlider";

const clients = [
  {
    name: "MPL Poker",
    industry: "Mobile Gaming",
    logo: "/images/clients/mpl-logo.jpg",
    description:
      "Mobile Premier League's poker offering on India's largest mobile esports platform",
  },
  {
    name: "Gameskraft",
    industry: "Real Money Gaming",
    logo: "/images/clients/gameskraft-logo.jpg",
    description:
      "Leading online gaming company offering rummy and other skill-based games",
  },
  {
    name: "Seekho",
    industry: "EdTech",
    logo: "/images/clients/seekho-logo.jpg",
    description:
      "Online learning platform offering courses in multiple vernacular languages",
  },
  {
    name: "Zell Education",
    industry: "EdTech",
    logo: "/images/clients/zell-logo.jpg",
    description: "Premium education platform for competitive exam preparation",
  },
  {
    name: "MyNaksh",
    industry: "Technology",
    logo: "/images/clients/mynaksh-logo.jpg",
    description: "Tech platform offering innovative digital solutions",
  },
  {
    name: "Glance",
    industry: "Consumer Tech",
    logo: "/images/clients/glance-logo.jpg",
    description:
      "A platform that delivers content,entertainment and commerce experiences directly on lock-screens.",
  },
  {
    name: "Pocket52",
    industry: "Online Poker",
    logo: "/images/clients/pocket52-logo.jpg",
    description:
      "Leading online poker platform in India, revolutionizing the gaming experience",
  },

  {
    name: "Natural8 India",
    industry: "Poker Tournaments",
    logo: "/images/clients/natural8-logo.jpg",
    description:
      "International poker platform bringing world-class poker tours to Indian players",
  },
  {
    name: "Adda52",
    industry: "Online Poker",
    logo: "/images/clients/adda52-logo.jpg",
    description:
      "India's largest online poker platform with millions of registered users",
  },

  {
    name: "RummyCulture",
    industry: "Online Rummy",
    logo: "/images/clients/rummyculture-logo.jpg",
    description:
      "Popular online rummy platform with engaging gameplay and tournaments",
  },
  {
    name: "RummyPrime",
    industry: "Online Rummy",
    logo: "/images/clients/rummyprime-logo.jpg",
    description:
      "Premium rummy gaming platform focused on competitive tournaments",
  },
  {
    name: "RummyTime",
    industry: "Online Rummy",
    logo: "/images/clients/rummytime-logo.jpg",
    description: "Fast-paced online rummy platform with quick game formats",
  },
  {
    name: "Poker Sports League (PSL)",
    industry: "Sports & Gaming",
    logo: "/images/clients/psl-logo.jpg",
    description:
      "India's first franchisee-based poker league bringing a sports angle to poker",
  },

  {
    name: "Hiscore",
    industry: "Fantasy Sports",
    logo: "/images/clients/hiscore-logo.jpg",
    description:
      "Fantasy sports platform offering cricket, football, and kabaddi fantasy leagues",
  },
  {
    name: "SportsBaazi",
    industry: "Fantasy Sports",
    logo: "/images/clients/sportsbaazi-logo.jpg",
    description:
      "Popular fantasy sports platform with focus on cricket and football",
  },
  {
    name: "Playerzpot",
    industry: "Fantasy Sports",
    logo: "/images/clients/playerzpot-logo.jpg",
    description:
      "Emerging fantasy sports platform with innovative gaming formats",
  },
];

const stats = [
  { number: "15+", label: "Gaming & Tech Clients" },
  { number: "300+", label: "Video Content Pieces" },
  { number: "98%", label: "Client Retention" },
  { number: "₹2Cr+", label: "Business Generated" },
];

export function ClientsPage() {
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
            Our Clients
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            We're proud to partner with innovative companies across industries
            to create content that drives results
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      {/* <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-purple-900 mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Auto Slider */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="mb-2">Our Client Portfolio</h3>
            <p className="text-gray-600">
              Leading brands across gaming and technology sectors
            </p>
          </motion.div>
          <ClientsSlider />
        </div>
      </section>

      {/* Client Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Client Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From startups to established enterprises, we work with companies
              of all sizes to create exceptional content
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 6) * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="h-20 mb-4 flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <ImageWithFallback
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-16 w-auto object-contain mix-blend-multiply hover:mix-blend-normal transition-all duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling?.classList.remove(
                          "hidden"
                        );
                      }}
                    />
                    <span className="text-gray-800 text-center font-medium hidden">
                      {client.name}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-purple-600 mb-3">
                  {client.industry}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {client.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Success by Numbers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our client partnerships have delivered impressive results across
              key metrics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-purple-600 mb-4">
                ₹2Cr+
              </div>
              <h3 className="text-xl font-semibold mb-2">Revenue Generated</h3>
              <p className="text-gray-600">
                Through strategic content campaigns
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-purple-600 mb-4">
                50M+
              </div>
              <h3 className="text-xl font-semibold mb-2">Views</h3>
              <p className="text-gray-600">Across all client campaigns</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-purple-600 mb-4">98%</div>
              <h3 className="text-xl font-semibold mb-2">
                Client Satisfaction
              </h3>
              <p className="text-gray-600">Based on project feedback</p>
            </motion.div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
