import { motion, AnimatePresence } from "motion/react";
import { Play, Film, Zap, Mic, Radio, Wifi, Target, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

const categories = [
  {
    title: "Ads",
    icon: Zap,
    description: "High-impact advertising content that converts",
    items: [
      {
        title: "FB Live (MyNaksh)",
        client: "Tech Innovations",
        thumbnail: "https://images.unsplash.com/photo-1675119715594-30fde4bd3dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwZGVzaWdufGVufDF8fHx8MTc2MDcxODIxOHww&ixlib=rb-4.1.0&q=80&w=1080",
        videoUrl: "https://drive.google.com/file/d/1p-cb2nvLG6iMVK458oEJPxD3JC82xxqU/view?usp=drive_link",
        category: "Digital Ad",
      },
      {
        title: "Commentary (Adda52)",
        client: "Fashion Forward",
        thumbnail: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop",
        videoUrl: "https://www.youtube.com/watch?v=example2",
        category: "Social Media Ad",
      },
      {
        title: "Taxi UGC (Rummy)",
        client: "Retail Plus",
        thumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop",
        videoUrl: "https://www.youtube.com/watch?v=example3",
        category: "TV Commercial",
      },
    ],
  },
  {
    title: "Video IPs",
    icon: Film,
    description: "Original video intellectual properties that engage",
    items: [
      {
        title: "Fix your Career",
        client: "Internal IP",
        thumbnail: "https://images.unsplash.com/photo-1617899644490-fbead7fb6183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjA3MzE1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        videoUrl: "https://www.youtube.com/watch?v=example4",
        category: "Educational Series",
      },
      {
        title: "Poker Zero To One",
        client: "Multiple Brands",
        thumbnail: "https://images.unsplash.com/photo-1691180273080-aacef51379d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNhbWVyYXxlbnwxfHx8fDE3NjA3NzEzODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        videoUrl: "https://www.youtube.com/watch?v=example5",
        category: "Documentary Series",
      },
      {
        title: "Bankroll Challenge / BigBoys Table",
        client: "Internal IP",
        thumbnail: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&h=600&fit=crop",
        videoUrl: "https://www.youtube.com/watch?v=example6",
        category: "Interview Series",
      },
    ],
  },
  {
    title: "Short Films",
    icon: Play,
    description: "Compelling narratives that move audiences",
    items: [
      {
        title: "The Journey",
        client: "Film Festival Entry",
        thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
        videoUrl: "https://www.youtube.com/watch?v=example7",
        category: "Narrative",
      },
      {
        title: "Brand Story: Origins",
        client: "StartUp Labs",
        thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop",
        videoUrl: "https://www.youtube.com/watch?v=example8",
        category: "Brand Film",
      },
      {
        title: "Innovation Unveiled",
        client: "Tech Corp",
        thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop",
        videoUrl: "https://www.youtube.com/watch?v=example9",
        category: "Corporate Film",
      },
    ],
  },
  {
    title: "Podcasts",
    icon: Mic,
    description: "Engaging audio content that connects and informs",
    items: [
      {
        title: "Tech Insights Weekly",
        client: "Internal Production",
        thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop",
        videoUrl: "https://www.youtube.com/watch?v=example10",
        category: "Tech Podcast",
      },
      {
        title: "Startup Stories",
        client: "Entrepreneurship Series",
        thumbnail: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&h=600&fit=crop",
        videoUrl: "https://www.youtube.com/watch?v=example11",
        category: "Business Podcast",
      },
      {
        title: "Digital Trends Today",
        client: "Industry Insights",
        thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
        videoUrl: "https://www.youtube.com/watch?v=example12",
        category: "Industry Podcast",
      },
    ],
  },
  {
    title: "Voxpop",
    icon: Radio,
    description: "Real voices, authentic stories from the streets",
    items: [
      {
        title: "Zell + P52 Voxpop",
        client: "Urban Narratives",
        thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=600&fit=crop",
        videoUrl: "https://www.youtube.com/watch?v=example13",
        category: "Street Interview",
      },
      {
        title: "Consumer Insights",
        client: "Market Research",
        thumbnail: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
        videoUrl: "https://www.youtube.com/watch?v=example14",
        category: "Consumer Survey",
      },
      {
        title: "Event Coverage",
        client: "Various Events",
        thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
        videoUrl: "https://www.youtube.com/watch?v=example15",
        category: "Event Interview",
      },
    ],
  },
  {
    title: "Live Streaming",
    icon: Wifi,
    description: "Real-time engagement and interactive broadcasts",
    items: [
      {
        title: "Gaming Tournament",
        client: "ESports League",
        thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
        videoUrl: "https://www.youtube.com/watch?v=example16",
        category: "Gaming Stream",
      },
      {
        title: "Product Launch Event",
        client: "Tech Company",
        thumbnail: "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?w=800&h=600&fit=crop",
        videoUrl: "https://www.youtube.com/watch?v=example17",
        category: "Corporate Stream",
      },
      {
        title: "Live Workshop Series",
        client: "Educational Platform",
        thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
        videoUrl: "https://www.youtube.com/watch?v=example18",
        category: "Educational Stream",
      },
    ],
  },
  {
    title: "AI Performance Ads",
    icon: Target,
    description: "Data-driven advertising optimized by artificial intelligence",
    items: [
      {
        title: "PVR Ad",
        client: "E-commerce Platform",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        videoUrl: "https://www.youtube.com/watch?v=example19",
        category: "AI Ad",
      },
      {
        title: "MyNaksh Ad",
        client: "Digital Service",
        thumbnail: "https://images.unsplash.com/photo-1553775282-20af80779df7?w=800&h=600&fit=crop",
        videoUrl: "https://www.youtube.com/watch?v=example20",
        category: "Dynamic Ad",
      },
      {
        title: "Conversion Optimizer",
        client: "SaaS Company",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        videoUrl: "https://www.youtube.com/watch?v=example21",
        category: "Performance Ad",
      },
    ],
  },
];

function VideoModal({ videoUrl, isOpen, onClose }: { videoUrl: string; isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  // Function to get embed URL based on video URL type
  const getEmbedUrl = (url: string) => {
    // Handle YouTube URLs
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
      const match = url.match(youtubeRegex);
      const videoId = match ? match[1] : null;
      return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url;
    }
    
    // Handle Google Drive URLs
    if (url.includes('drive.google.com')) {
      const fileId = url.match(/\/d\/(.+?)(?:\/|$|\?)/)?.[1];
      return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url;
    }

    // Return original URL if no matching pattern
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div className="relative w-full max-w-5xl mx-4">
        <button
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
          onClick={onClose}
        >
          <X size={32} />
        </button>
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full rounded-xl"
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
}

export function OurWorkPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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
            Our Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl lg:text-3xl text-gray-200 max-w-3xl mx-auto"
          >
            Explore our portfolio of ads, video IPs, and short films that have
            helped brands tell their stories
          </motion.p>
        </div>
      </section>

      {/* Work Categories */}
      {categories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={
            categoryIndex % 2 === 0 ? "py-20 bg-white" : "py-20 bg-gray-50"
          }
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mb-4">
                <category.icon className="text-white" size={28} />
              </div>
              <h2 className="mb-4 text-3xl lg:text-4xl">{category.title}</h2>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                {category.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedVideo(item.videoUrl)}
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg mb-4">
                    <ImageWithFallback
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white">
                          <Play className="text-white w-10 h-10" />
                        </div>
                        <p className="text-white text-center mt-4 text-lg font-medium">Watch Video</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl lg:text-2xl">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.client}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-white text-4xl lg:text-5xl"
          >
            Ready to Create Something Amazing?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl lg:text-3xl text-gray-100 mb-8 max-w-2xl mx-auto"
          >
            Let's collaborate on your next project and bring your vision to life
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-purple-900 rounded-lg hover:bg-gray-100 transition-colors text-xl"
          >
            Get In Touch
          </motion.button>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <VideoModal
            videoUrl={selectedVideo}
            isOpen={true}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
