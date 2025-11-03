import { motion } from "motion/react";
import { Play, Users, Heart, Target, Award, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ClientsSlider } from "./ClientsSlider";

const stats = [
  { number: "350+", label: "Ads in 8 Languages", icon: Play },
  { number: "20+", label: "Clients Worked With", icon: Users },
  { number: "15+", label: "Content IP’s", icon: Award },
  { number: "1000+", label: "Pieces of content", icon: Heart },
];

const testimonials = [
  {
    name: "Nitesh Salvi",
    role: "Founder",
    company: "MyNaksh",
    text: "Your Content Studio perfectly balanced performance and brand for our new app, MyNaksh. Their approach to ads and social content was both data-driven and genuinely creative, helping us acquire users while humanizing our brand. They've been an instrumental partner in our early-stage growth and community building.",
    avatar: "/images/walloflove1.jpg",
  },
  {
    name: "Hemant Vyas",
    role: "Marketing",
    company: "Pocket52",
    text: "Working with Your Content Studio has been a game-changer, as their authentic background in the poker world is something you can't just teach an agency. They skipped the learning curve and immediately delivered high-quality, relatable content that truly gets our audience. Their unique insight has made a measurable impact on how we connect with our community.",
    avatar: "/images/walloflove2.jpg",
  },
  {
    name: "Pratham Barot",
    role: "CEO",
    company: "Zell Education",
    text: "The team at Your Content Studio has a rare talent for making complex financial and educational topics incredibly engaging and accessible. They translated our mission at Zell into a content strategy that resonates deeply with students and builds our brand's voice. We’ve been consistently impressed with their creativity and professionalism.",
    avatar: "/images/walloflove.jpg",
  },
];

const teamMembers = [
  {
    name: "Parth Jain",
    role: "Creative Director & Founder",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
  },
  {
    name: "Sudhanshu Pandey",
    role: "AI Division Head",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop",
  },
  {
    name: "Vaibhav",
    role: "Head Editor & Production",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop",
  },
  {
    name: "Deepika",
    role: "Graphic Designer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
  },
];

const clients = [
  { name: "Pocket52", logo: "/images/clients/pocket52-logo.jpg" },
  { name: "Natural8 India", logo: "/images/clients/natural8-logo.jpg" },
  { name: "Adda52", logo: "/images/clients/adda52-logo.jpg" },
  { name: "Gameskraft", logo: "/images/clients/gameskraft-logo.jpg" },
  { name: "RummyCulture", logo: "/images/clients/rummyculture-logo.jpg" },
  { name: "RummyPrime", logo: "/images/clients/rummyprime-logo.jpg" },
  { name: "RummyTime", logo: "/images/clients/rummytime-logo.jpg" },
  { name: "Poker Sports League", logo: "/images/clients/psl-logo.jpg" },
  { name: "MPL Poker", logo: "/images/clients/mpl-logo.jpg" },
  { name: "Hiscore", logo: "/images/clients/hiscore-logo.jpg" },
  { name: "SportsBaazi", logo: "/images/clients/sportsbaazi-logo.jpg" },
  { name: "Playerzpot", logo: "/images/clients/playerzpot-logo.jpg" },
  { name: "Seekho", logo: "/images/clients/seekho-logo.jpg" },
  { name: "Zell Education", logo: "/images/clients/zell-logo.jpg" },
  { name: "MyNaksh", logo: "/images/clients/mynaksh-logo.jpg" },
];

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/images/Homebg.MOV"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-white"
          >
            Crafting Stories That Matter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
          >
            We create compelling digital content that elevates brands and drives
            results
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent("navigate", { detail: "work" })
              )
            }
            className="px-8 py-4 bg-white text-purple-900 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Explore Our Work
          </motion.button>
          &nbsp;
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent("navigate", { detail: "contact" })
              )
            }
            className="px-8 py-4 bg-white text-purple-900 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="mb-4">Trusted By Leading Brands</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're proud to partner with innovative companies across gaming,
              esports, and technology industries.
            </p>
          </motion.div>

          {/* Auto-scrolling client carousel */}
          <ClientsSlider />

          {/* Static grid for smaller screens */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:hidden gap-4">
            {clients.slice(0, 6).map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center h-20 border border-gray-100"
              >
                <div className="flex flex-col items-center justify-center w-full h-full">
                  <ImageWithFallback
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-16 w-auto object-contain"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wall of Love */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-white">Wall of Love</h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients and
              partners have to say.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-200">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Things Done - Stats Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Things We've Done</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself. We've helped brands tell their
              stories through exceptional content.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mb-4">
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-purple-900 mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Objective */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Our Objective</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Target className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2">
                      Creative video content - High Impact
                    </h3>
                    <p className="text-gray-600">
                      Value Content that makes your customers & team proud.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2">Drive Growth </h3>
                    <p className="text-gray-600">
                      Content that builds high engagement & relatability.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Heart className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2">Create Communities</h3>
                    <p className="text-gray-600">
                      Build trust & connect with your audience
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="/images/OurObjective.jpg"
                  alt="Video Production"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl opacity-20" />
              <div className="absolute -top-6 -right-6 w-25 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Talented creators, strategists, and storytellers passionate about
              crafting exceptional content.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="relative group mb-4">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                </div>
                <h4 className="mb-1">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
