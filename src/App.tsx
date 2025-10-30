import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { OurWorkPage } from "./components/OurWorkPage";
import { CaseStudiesPage } from "./components/CaseStudiesPage";
import { TeamPage } from "./components/TeamPage";
import { AboutPage } from "./components/AboutPage";
import { ClientsPage } from "./components/ClientsPage";
import { ContactPage } from "./components/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleNavigate = (event: CustomEvent) => {
      setCurrentPage(event.detail);
    };

    window.addEventListener("navigate", handleNavigate as EventListener);

    return () => {
      window.removeEventListener("navigate", handleNavigate as EventListener);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "work":
        return <OurWorkPage />;
      case "case-studies":
        return <CaseStudiesPage />;
      case "team":
        return <TeamPage />;
      case "about":
        return <AboutPage />;
      case "clients":
        return <ClientsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white">YCS</span>
                </div>
                <span className="ml-2 text-white">Your Content Studio</span>
              </div>
              <p className="text-gray-400">
                Creating compelling digital content that elevates brands and
                drives results.
              </p>
            </div>

            <div>
              <h4 className="text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Digital Ads
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Video IPs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Short Films
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Brand Films
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => setCurrentPage("about")}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage("team")}
                    className="hover:text-white transition-colors"
                  >
                    Team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage("work")}
                    className="hover:text-white transition-colors"
                  >
                    Our Work
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage("contact")}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Your Content Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
