
import { Mail, Phone, MapPin, } from "lucide-react";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: 'Contact', href: 'mailto:sylviavirtualassistant93@gmail.com' },
  ];

  const services = [
    "Email Management",
    "Calendar Management",
    "Administrative Tasks",
    "Customer Support",
    "Social Media Management",
    "Lead Generation"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional virtual assistant services to help your business thrive. 
              Reliable, efficient, and dedicated to your success.
            </p>
            <div className="flex space-x-4">
                          <a 
                            href="https://www.linkedin.com/in/sylvia-achieng-40808426b/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                          >
                            <CiLinkedin className="h-5 w-5" />
                          </a>

                          <a 
                            href="https://wa.me/+254708732532" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                          >
                            <FaWhatsapp className="h-5 w-5" />
                          </a>      
            </div>      
            </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg </svg>font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
                <a href="mailto:sylviavirtualassistant93@gmail.com" className="flex items-center space-x-3 hover:text-white transition-colors">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 hover:text-white">sylviavirtualassistant93@gmail.com</span>
                </a>
                          
                <a href="tel:+254708732532" className="flex items-center space-x-3 hover:text-white transition-colors">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 hover:text-white">+254 (708) 732-532</span>
                </a>
             
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold mb-2">Business Hours</h5>
              <p className="text-sm text-gray-300">Monday - Friday</p>
              <p className="text-sm text-gray-300">8:00 AM - 6:00 PM EST</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
            Copyright © {currentYear} All rights reserved | Virtual Assitant
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;