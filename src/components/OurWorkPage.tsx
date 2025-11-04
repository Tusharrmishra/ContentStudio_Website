import { motion } from "motion/react";
import { Play, Film, Zap, Mic, Radio, Wifi, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

const categories = [
  {
    title: "Podcasts",
    icon: Mic,
    description: "Engaging audio content that connects and informs",
    items: [
      {
        title: "JamwithNitin Podcast",
        client: "Internal Production",
        thumbnail: "https://img.youtube.com/vi/F17R1tGo_Xw/maxresdefault.jpg",
        videoUrl: "https://youtu.be/F17R1tGo_Xw?si=6FQ6toZMDc6exY5U",
        category: "Tech Podcast",
      },
      {
        title: "IIT to Poker Podcast",
        client: "Entrepreneurship Series",
        thumbnail: "https://img.youtube.com/vi/ZtjXYCy18p0/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=ZtjXYCy18p0&t=1528s",
        category: "Business Podcast",
      },
      {
        title: "AB Devilliers (Wolf7pay)",
        client: "Industry Insights",
        thumbnail: "https://img.youtube.com/vi/mb81aYkVnMk/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=mb81aYkVnMk&t=1608s",
        category: "Industry Podcast",
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
        thumbnail: "https://img.youtube.com/vi/WpCN-VC8yus/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=WpCN-VC8yus&t=770s",
        category: "Educational Series",
      },
      {
        title: "Voxpop",
        client: "Multiple Brands",
        thumbnail: "https://img.youtube.com/vi/E13XurT5usY/maxresdefault.jpg", // Using a local image instead
        videoUrl: "https://www.youtube.com/shorts/E13XurT5usY",
        category: "Documentary Series",
      },
      {
        title: "Bankroll Challenge / BigBoys Table",
        client: "Internal IP",
        thumbnail: "https://img.youtube.com/vi/WjjwuL4BLwM/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=WjjwuL4BLwM&t=546s",
        category: "Interview Series",
      },
    ],
  },
  {
    title: "Ads",
    icon: Zap,
    description: "High-impact advertising content that converts",
    items: [
      {
        title: "Instagram Live (MyNaksh)",
        client: "Tech Innovations",
        thumbnail: "https://img.youtube.com/vi/8L_fKE1cgCg/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/shorts/8L_fKE1cgCg",
        category: "Digital Ad",
      },
      {
        title: "Commentary (Adda52)",
        client: "Fashion Forward",
        thumbnail: "https://img.youtube.com/vi/44LIgmPHaB0/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/shorts/44LIgmPHaB0",
        category: "Social Media Ad",
      },
      {
        title: "Taxi UGC (Rummy)",
        client: "Retail Plus",
        thumbnail: "https://img.youtube.com/vi/iRK_xl6zM9s/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/shorts/iRK_xl6zM9s",
        category: "TV Commercial",
      },
    ],
  },
  {
    title: "Live Streaming",
    icon: Wifi,
    description: "Real-time engagement and interactive broadcasts",
    items: [
      {
        title: "Nikita Luther (Traitors) Live stream",
        client: "ESports League",
        thumbnail: "https://img.youtube.com/vi/1OMLLWUuWv4/maxresdefault.jpg",
        videoUrl:
          "https://www.youtube.com/live/1OMLLWUuWv4?si=BXdjGEumDc8-dEw5",
        category: "Gaming Stream",
      },
      {
        title: "Live Stream with Akshay Kapoor",
        client: "Tech Company",
        thumbnail: "https://img.youtube.com/vi/5TjndiH6JO8/maxresdefault.jpg",
        videoUrl:
          "https://www.youtube.com/live/5TjndiH6JO8?si=HfYM4wx96PiYULRI",
        category: "Corporate Stream",
      },
      {
        title: "AOPS Live Stream",
        client: "Educational Platform",
        thumbnail: "/images/clients/aops-thumbnail.png", // Using a local image instead
        videoUrl:
          "https://www.youtube.com/live/zVEuuQEyfhE?si=0yKbDWqS14VIU0ht",
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
        title: "PVR AI Ad",
        client: "E-commerce Platform",
        thumbnail: "https://img.youtube.com/vi/i4Cnqf8EOaA/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/shorts/i4Cnqf8EOaA",
        category: "AI Ad",
      },
      {
        title: "AI UGC Ad",
        client: "Digital Service",
        thumbnail: "https://img.youtube.com/vi/lqewyRttIMs/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/shorts/lqewyRttIMs",
        category: "Dynamic Ad",
      },
      {
        title: "AI Podcast Ad",
        client: "SaaS Company",
        thumbnail: "https://img.youtube.com/vi/6oj35aH_92k/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/shorts/6oj35aH_92k",
        category: "Performance Ad",
      },
    ],
  },
  {
    title: "Short Form Content",
    icon: Play,
    description: "Compelling narratives that move audiences",
    items: [
      {
        title: "How to grow Social Media ?",
        thumbnail: "https://img.youtube.com/vi/wEVI9OJ4b2c/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/shorts/wEVI9OJ4b2c",
      },
      {
        title: "Santosh wins Rs 45Cr",
        thumbnail: "https://img.youtube.com/vi/QQ4aMEooIcg/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/shorts/QQ4aMEooIcg",
      },
      {
        title: "How to make 1000 via poker ?",
        thumbnail: "https://img.youtube.com/vi/cu6vArddedE/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/shorts/cu6vArddedE",
      },
    ],
  },
];

function VideoModal({
  videoUrl,
  isOpen,
  onClose,
}: {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  // Function to get embed URL based on video URL type
  const getEmbedUrl = (url: string) => {
    // Handle YouTube URLs (including shorts)
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const youtubeRegex =
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts\/)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
      const match = url.match(youtubeRegex);
      const videoId = match ? match[1] : null;
      return videoId
        ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
        : url;
    }

    // Handle Instagram URLs
    if (url.includes("instagram.com")) {
      // Convert Instagram URL to embed URL
      const instagramUrl = new URL(url);
      const postId = instagramUrl.pathname.split("/").filter(Boolean).pop();
      return `https://www.instagram.com/p/${postId}/embed/`;
    }

    // Handle Google Drive URLs
    if (url.includes("drive.google.com")) {
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
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

  const handleVideoClick = (videoUrl: string) => {
    window.open(getVideoUrl(videoUrl), "_blank");
  };

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
                  onClick={() => handleVideoClick(item.videoUrl)}
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
                        <p className="text-white text-center mt-4 text-lg font-medium">
                          Watch Video
                        </p>
                      </div>
                    </div>
                    {/* <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                        {item.category}
                      </span>
                    </div> */}
                  </div>
                  <h3 className="mb-2 text-xl lg:text-2xl">{item.title}</h3>
                  {/* <p className="text-gray-600 text-lg">{item.client}</p> */}
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
    </div>
  );
}

// Function to get video thumbnail URL
const getVideoThumbnail = (videoUrl: string) => {
  // Handle YouTube URLs (including shorts)
  if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
    const youtubeRegex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts\/)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = videoUrl.match(youtubeRegex);
    const videoId = match ? match[1] : null;
    return videoId
      ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      : null;
  }

  // Handle Instagram URLs
  if (videoUrl.includes("instagram.com")) {
    // For Instagram, we'll need to use the provided thumbnail since we can't generate it dynamically
    return null;
  }

  // Handle Vimeo URLs
  if (videoUrl.includes("vimeo.com")) {
    // For Vimeo, we'll need to use the provided thumbnail since we can't get it directly
    return null;
  }

  return null;
};

// Function to get the video URL for redirection
const getVideoUrl = (videoUrl: string) => {
  // Handle YouTube shorts URLs
  if (videoUrl.includes("youtube.com/shorts/")) {
    const videoId = videoUrl.split("/shorts/")[1].split("?")[0];
    return `https://www.youtube.com/watch?v=${videoId}`;
  }

  // Return the original URL for other platforms
  return videoUrl;
};
