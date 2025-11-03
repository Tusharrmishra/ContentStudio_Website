import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: "MPL Poker", logo: "/images/clients/mpl-logo.jpg" },
  { name: "Gameskraft", logo: "/images/clients/gameskraft-logo.jpg" },
  { name: "Seekho", logo: "/images/clients/seekho-logo.jpg" },
  { name: "Zell Education", logo: "/images/clients/zell-logo.jpg" },
  { name: "MyNaksh", logo: "/images/clients/mynaksh-logo.jpg" },
  { name: "Glance", logo: "/images/clients/glance-logo.jpg" },
  { name: "Pocket52", logo: "/images/clients/pocket52-logo.jpg" },
  { name: "Natural8 India", logo: "/images/clients/natural8-logo.jpg" },
  { name: "Adda52", logo: "/images/clients/adda52-logo.jpg" },
  { name: "RummyCulture", logo: "/images/clients/rummyculture-logo.jpg" },
  { name: "RummyPrime", logo: "/images/clients/rummyprime-logo.jpg" },
  { name: "RummyTime", logo: "/images/clients/rummytime-logo.jpg" },
  { name: "Poker Sports League", logo: "/images/clients/psl-logo.jpg" },
  { name: "Hiscore", logo: "/images/clients/hiscore-logo.jpg" },
  { name: "SportsBaazi", logo: "/images/clients/sportsbaazi-logo.jpg" },
  { name: "Playerzpot", logo: "/images/clients/playerzpot-logo.jpg" },
];

export function ClientsSlider() {
  return (
    <div className="relative py-8">
      {/* Auto-scrolling carousel */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -1600],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {/* First set of clients */}
          {clients.map((client, index) => (
            <div
              key={`client-1-${index}`}
              className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center min-w-[200px] h-28 border border-gray-100 hover:shadow-lg transition-shadow"
            >
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
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`client-2-${index}`}
              className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center min-w-[200px] h-28 border border-gray-100 hover:shadow-lg transition-shadow"
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
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient overlays for fade effect */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 via-gray-50 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 via-gray-50 to-transparent pointer-events-none z-10" />
    </div>
  );
}
