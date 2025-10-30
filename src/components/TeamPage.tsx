import { motion } from "motion/react";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const teamMembers = [
  {
    name: "Parth Jain",
    role: "Creative Director & Founder",
    // bio: "With over 10 years of experience in creative direction, Alex leads our creative vision and ensures every project tells a compelling story.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
    email: "parth@yourcontentstudio.in",
  },
  {
    name: "Sudhanshu Pandey",
    role: "AI Division Head",
    // bio: "Maya brings technical expertise and creative flair to every production, managing complex shoots with ease and precision.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
    // email: "maya@digitalcreator.com",
  },
  {
    name: "Vaibhav",
    role: "Head Editor & Production",
    // bio: "Jordan develops data-driven creative strategies that align with business objectives and resonate with target audiences.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
    // email: "jordan@digitalcreator.com",
  },
  {
    name: "Deepika",
    role: "Graphic Designer",
    // bio: "Sofia transforms raw footage into polished masterpieces, leading our post-production team with creativity and precision.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
    // email: "sofia@digitalcreator.com",
  },
  {
    name: "Manya",
    role: "Growth",
    // bio: "Marcus crafts stunning visuals that capture emotion and tell stories through the lens, with expertise in both film and digital.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
    // email: "marcus@digitalcreator.com",
  },
  {
    name: "Shubham ",
    role: "DOP (Freelancers)",
    // bio: "Emily brings ideas to life through stunning motion graphics and animation that elevate our storytelling capabilities.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
    // email: "emily@digitalcreator.com",
  },
  {
    name: "Mayank ",
    role: "DOP (Freelancers)",
    // bio: "David creates immersive audio experiences that complement our visual narratives and enhance emotional impact.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
    // email: "david@digitalcreator.com",
  },
  {
    name: "Sohail Khan",
    role: "Video Production",
    // bio: "Lisa ensures smooth client relationships and project delivery, bridging creative vision with business objectives.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
    // email: "lisa@digitalcreator.com",
  },
  {
    name: "Ajay K",
    role: "Editor",
    // bio: "Lisa ensures smooth client relationships and project delivery, bridging creative vision with business objectives.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
    // email: "lisa@digitalcreator.com",
  },
];

export function TeamPage() {
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
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            A diverse group of creators, strategists, and storytellers
            passionate about crafting exceptional content
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="aspect-square">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white text-sm mb-4">{member.bio}</p>
                    <div className="flex gap-3">
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Linkedin size={18} className="text-white" />
                      </a>
                      <a
                        href={member.twitter}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Twitter size={18} className="text-white" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Mail size={18} className="text-white" />
                      </a>
                    </div>
                  </div> */}
                </div>
                <h3 className="mb-1">{member.name}</h3>
                <p className="text-purple-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Our Culture</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in fostering a creative environment where innovation
              thrives and every voice matters
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="mb-3">Creative Freedom</h3>
              <p className="text-gray-600">
                We encourage experimentation and creative risk-taking to push
                boundaries and create exceptional work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="mb-3">Collaboration</h3>
              <p className="text-gray-600">
                Our best work comes from diverse perspectives working together
                towards a common creative vision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="mb-3">Continuous Growth</h3>
              <p className="text-gray-600">
                We invest in our team's development through training, workshops,
                and opportunities to learn new skills.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-white"
          >
            Join Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto"
          >
            We're always looking for talented creators to join our growing team
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
            View Open Positions
          </motion.button>
        </div>
      </section>
    </div>
  );
}
