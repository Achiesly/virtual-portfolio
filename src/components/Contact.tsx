"use client";
import { useState } from "react";
import { Mail, Phone, Clock, CheckCircle } from "lucide-react";
import CalendlyPopup from "@/components/CalendlyPopup";

const Contact = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "sylviavirtualassistant93@gmail.com",
      description: "Send me an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+254 (708) 732-532",
      description: "Call during business hours",
    },
    {
      icon: Clock,
      title: "Availability",
      details: "Mon-Fri, 8AM-6PM EST",
      description: "Quick response guaranteed",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to streamline your business operations? Get in touch to discuss how I can help you achieve your goals more efficiently.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="p-6 sm:p-8 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Get In Touch</h3>
              <p className="text-gray-600">
                I&apos;m always excited to discuss new opportunities and challenges. Whether you need ongoing support or help with a specific project, let&apos;s talk about how I can contribute to your success.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-800 font-medium">{item.details}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <p className="text-sm text-gray-600 font-medium">
                  I respond to all inquiries within 2 hours during business hours,<br />and within 24 hours on weekends.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Calendly Info */}
        <div className="py-10 px-4 sm:px-6 lg:py-20">
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 sm:p-8 max-w-xl mx-auto lg:mx-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Prefer a Quick Chat?</h3>
            <p className="text-gray-600 mb-6">
              If you&apos;d rather speak directly, you can quickly book a free 15-30 minute discovery call using the button below.
            </p>
            <div className="text-center">
              <button
                onClick={() => setShowCalendly(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full shadow transition cursor-pointer"
              >
                Book a Call
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-400 text-center">
              You won&apos;t need to email back and forth to find a time.
            </p>
          </div>
        </div>


      </div>
      </div>
            {/* Calendly Popup */}
      {showCalendly && (
        <CalendlyPopup onClose={() => setShowCalendly(false)} />
      )}
    </section>
  );
};

export default Contact;
