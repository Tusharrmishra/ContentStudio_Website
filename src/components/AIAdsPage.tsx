import { useState } from "react";
import { motion } from "motion/react";
import {
  Play,
  Check,
  Clock,
  Users,
  Target,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import Slider from "react-slick";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AIAdsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
  });
  const [showVideo, setShowVideo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const benefits = [
    {
      icon: Clock,
      title: "Point 1",
      description: "10x Faster Ad Creation",
    },
    {
      icon: TrendingUp,
      title: "Point 2",
      description: "3x Better Engagement",
    },
    {
      icon: Target,
      title: "Point 3",
      description: "AI-Powered Targeting",
    },
    {
      icon: Users,
      title: "Point 4",
      description: "Proven Results",
    },
  ];

  const adExamples = [
    {
      title: "Ching's",
      platform: "Instagram Reel",
      bgColor: "bg-gradient-to-br from-pink-100 to-purple-100",
      thumbnail: "https://img.youtube.com/vi/lKkYAY1MZTQ/maxresdefault.jpg",
      youtubeUrl: "https://www.youtube.com/shorts/lKkYAY1MZTQ",
    },
    {
      title: "10K installs via this",
      platform: "Instagram Reel",
      bgColor: "bg-gradient-to-br from-blue-100 to-cyan-100",
      thumbnail: "https://img.youtube.com/vi/0eRHQ9wSYWk/maxresdefault.jpg",
      youtubeUrl: "https://www.youtube.com/shorts/0eRHQ9wSYWk",
    },
    {
      title: "PVR",
      platform: "YouTube Short",
      bgColor: "bg-gradient-to-br from-red-100 to-orange-100",
      thumbnail: "https://img.youtube.com/vi/i4Cnqf8EOaA/maxresdefault.jpg",
      youtubeUrl: "https://www.youtube.com/shorts/i4Cnqf8EOaA",
    },
    {
      title: "Verified Astrologer",
      platform: "LinkedIn Ad",
      bgColor: "bg-gradient-to-br from-indigo-100 to-blue-100",
      thumbnail: "https://img.youtube.com/vi/tOJ1K1ZFwjQ/maxresdefault.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=tOJ1K1ZFwjQ",
    },
    {
      title: "Ad 5",
      platform: "Twitter Video",
      bgColor: "bg-gradient-to-br from-sky-100 to-teal-100",
      thumbnail: "https://img.youtube.com/vi/9wjro8mBYhs/maxresdefault.jpg",
      youtubeUrl: "https://www.youtube.com/shorts/9wjro8mBYhs",
    },
    {
      title: "Rs 7 per chat",
      platform: "TikTok Ad",
      bgColor: "bg-gradient-to-br from-fuchsia-100 to-pink-100",
      thumbnail: "https://img.youtube.com/vi/cFWULS4yEjc/maxresdefault.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=cFWULS4yEjc",
    },
    {
      title: "Spotify Rs 129",
      platform: "TikTok Ad",
      bgColor: "bg-gradient-to-br from-fuchsia-100 to-pink-100",
      thumbnail: "https://img.youtube.com/vi/nmvVHRzJHXo/maxresdefault.jpg",
      youtubeUrl: "https://www.youtube.com/shorts/nmvVHRzJHXo",
    },
  ];

  const pricingModels = [
    {
      name: "Model 1",
      title: "Starter",
      price: "₹4,999",
      period: "/month",
      features: [
        "5 AI-Generated Ads",
        "2 Social Platforms",
        "Basic Analytics",
        "Email Support",
        "1 Revision per ad",
      ],
    },
    {
      name: "Model 2",
      title: "Growth",
      price: "₹9,999",
      period: "/month",
      popular: true,
      features: [
        "15 AI-Generated Ads",
        "All Social Platforms",
        "Advanced Analytics",
        "Priority Support",
        "3 Revisions per ad",
        "A/B Testing",
        "Monthly Strategy Call",
      ],
    },
    {
      name: "Model 3",
      title: "Enterprise",
      price: "₹24,999",
      period: "/month",
      features: [
        "Unlimited AI Ads",
        "All Platforms + Custom",
        "Real-time Dashboard",
        "Account Manager",
        "Unlimited Revisions",
        "Full A/B Testing",
        "Weekly Strategy",
        "Custom AI Training",
      ],
    },
  ];

  // Custom Arrow Components for Slider
  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
    );
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen pt-16 lg:pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl mb-6 text-gray-900">
              AI powered + Human Edited Performance Ads (Creatives) @{" "}
              <span className="text-purple-600">1/4th cost</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600">
              (Quick Turnaround , Top level creativity and concepts, 1/4th cost
              of produced Meta ads)
            </p>
          </motion.div>

          {/* Screenshots and Form Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
            {/* Left: Screenshots */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-gray-100 rounded-2xl overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1766849324813-75d4c28a475c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlcnRpc2luZyUyMGNhbXBhaWduJTIwYmVmb3JlfGVufDF8fHx8MTc2ODY2MTM1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Before: Traditional Ad"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-sm text-gray-600">
                      Before: Traditional Ad
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-gray-100 rounded-2xl overflow-hidden border-2 border-purple-600">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/flagged/photo-1556514767-5c270b96a005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3VjY2Vzc3xlbnwxfHx8fDE3Njg2NjEzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="After: AI-Powered Ad"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-sm text-gray-600">
                      After: AI-Powered Ad
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Benefits and Form */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <h2 className="text-2xl lg:text-3xl mb-6 text-gray-900">
                  Get 2 AI Ads worth ₹₹ Re
                </h2>

                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-gray-900 mb-1">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-900">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Enter your name"
                      className="mt-1 border-gray-300"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-900">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      className="mt-1 border-gray-300"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-900">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 XXXXX XXXXX"
                      className="mt-1 border-gray-300"
                    />
                  </div>

                  <div>
                    <Label htmlFor="business" className="text-gray-900">
                      Organization
                    </Label>
                    <Input
                      id="business"
                      type="text"
                      required
                      value={formData.business}
                      onChange={(e) =>
                        setFormData({ ...formData, business: e.target.value })
                      }
                      placeholder="E.g., Gaming, E-commerce"
                      className="mt-1 border-gray-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg"
                  >
                    SUBMIT
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Examples Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Sample AI-Generated Ads
            </h2>
            <p className="text-xl text-gray-600">See our work in action</p>
          </motion.div>

          <div className="max-w-6xl mx-auto relative px-12">
            <Slider {...sliderSettings}>
              {adExamples.map((ad, index) => (
                <div key={index} className="px-3">
                  <motion.a
                    href={ad.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="block"
                  >
                    <Card className="overflow-hidden border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                      <div
                        className={`aspect-[9/16]  flex items-center justify-center relative group`}
                      >
                        <ImageWithFallback
                          src={ad.thumbnail}
                          alt={ad.title}
                          className="w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/60 group-hover:bg-white/90 rounded-full flex items-center justify-center mx-auto mb-2 transition-all">
                            <Play className="w-8 h-8 text-gray-700" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-sm text-gray-600 text-center">
                          {ad.title}
                        </p>
                      </div>
                    </Card>
                  </motion.a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Founder Video Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
                Founder Video
              </h2>
              <p className="text-xl text-gray-600">
                Learn how we revolutionize digital advertising
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                  {!showVideo ? (
                    <div
                      className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center cursor-pointer group"
                      onClick={() => setShowVideo(true)}
                    >
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-all">
                          <Play className="w-10 h-10 text-gray-700" />
                        </div>
                        <p className="text-gray-700">Watch Video</p>
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-video bg-black flex items-center justify-center">
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Founder Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg w-full lg:w-auto"
                >
                  SUBMIT
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Module */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
              Pricing Module
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`p-8 bg-white border-2 h-full ${
                    model.popular
                      ? "border-purple-600 shadow-xl"
                      : "border-gray-200 shadow-md"
                  }`}
                >
                  <div className="text-center mb-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {model.name}
                    </div>
                    <h3 className="text-2xl mb-4 text-gray-900">
                      {model.title}
                    </h3>
                    {model.popular && (
                      <div className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm mb-4">
                        Most Popular
                      </div>
                    )}
                    <div className="mb-4">
                      <span className="text-4xl text-gray-900">
                        {model.price}
                      </span>
                      <span className="text-gray-600">{model.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {model.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      model.popular
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                  >
                    Get Started
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-5xl mb-6 text-gray-900">
              Ready to Transform Your Ads with AI?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of businesses creating stunning content with AI
            </p>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 text-lg"
            >
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
