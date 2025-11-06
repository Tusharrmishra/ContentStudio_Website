import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryItems = [
  { src: "/images/Gallery1.png", title: "Studio" },
  { src: "/images/Gallery2.png", title: "Collaboration" },
  { src: "/images/Gallery3.png", title: "Team" },
  { src: "/images/Gallery4.png", title: "AI Division" },
  { src: "/images/Gallery5.jpg", title: "Production" },
  { src: "/images/Gallery6.jpg", title: "Design" },
  { src: "/images/Gallery7.jpg", title: "Voxpop" },
  { src: "/images/Gallery8.png", title: "On Set" },
  { src: "/images/Gallery9.png", title: "Editing" },
  { src: "/images/Gallery10.png", title: "AOPS Stream" },
  { src: "/images/Gallery11.png", title: "Studio" },
  { src: "/images/Gallery12.jpg", title: "Collaboration" },
  { src: "/images/Gallery13.png", title: "Team" },
  { src: "/images/Gallery14.png", title: "AI Division" },
  { src: "/images/Gallery15.png", title: "Production" },
  { src: "/images/Gallery16.png", title: "Design" },
  { src: "/images/Gallery17.png", title: "Voxpop" },
  { src: "/images/Gallery18.png", title: "On Set" },
  { src: "/images/Gallery19.png", title: "Editing" },
  { src: "/images/Gallery20.png", title: "AOPS Stream" },
  { src: "/images/Gallery21.png", title: "Editing" },
  { src: "/images/Gallery22.png", title: "AOPS Stream" },
];

export function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const prevItem = () =>
    setSelectedIndex((idx) =>
      idx === null
        ? null
        : (idx - 1 + galleryItems.length) % galleryItems.length
    );
  const nextItem = () =>
    setSelectedIndex((idx) =>
      idx === null ? null : (idx + 1) % galleryItems.length
    );

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevItem();
      if (e.key === "ArrowRight") nextItem();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      <section className="py-16 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-3 text-white"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-gray-200 max-w-2xl mx-auto"
          >
            A curated look at our studio, team, and projects.
          </motion.p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryItems.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ y: -6 }}
                onClick={() => openLightbox(index)}
                className="group relative rounded-xl overflow-hidden shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <div className="aspect-square">
                  <ImageWithFallback
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 text-white text-sm">
                  {item.title}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              aria-label="Close"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-6 right-6 text-white/90 hover:text-white"
            >
              <X size={28} />
            </button>
            <button
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                prevItem();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                nextItem();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
            >
              <ChevronRight size={36} />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-[92vw] max-w-5xl"
            >
              <div className="aspect-video bg-black rounded-xl overflow-hidden">
                <ImageWithFallback
                  src={galleryItems[selectedIndex].src}
                  alt={galleryItems[selectedIndex].title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-white mt-4 text-center">
                {galleryItems[selectedIndex].title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
