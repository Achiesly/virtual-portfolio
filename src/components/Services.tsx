import {
  Mail,
  Calendar,
  FileText,
  MessageSquare,
  BarChart3,
  Headphones,
  Globe,
  ShoppingCart,
  Search,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Mail,
      title: "Email Management",
      description: "Professional email handling, inbox organization, and timely responses to keep your communication streamlined.",
      features: ["Email filtering", "Response templates", "Follow-up scheduling"]
    },
    {
      icon: Calendar,
      title: "Calendar Management",
      description: "Efficient scheduling, appointment coordination, and calendar optimization to maximize your productivity.",
      features: ["Meeting scheduling", "Calendar optimization", "Reminder systems"]
    },
    {
      icon: FileText,
      title: "Administrative Tasks",
      description: "Complete administrative support including data entry, document preparation, and file organization.",
      features: ["Data entry", "Document creation", "File organization"]
    },
    {
      icon: MessageSquare,
      title: "Customer Support",
      description: "Professional customer service to maintain positive relationships and handle inquiries efficiently.",
      features: ["Live chat support", "Ticket management", "Customer relations"]
    },
    {
      icon: BarChart3,
      title: "Research & Analysis",
      description: "Comprehensive market research, competitor analysis, and data compilation for informed decision-making.",
      features: ["Market research", "Competitor analysis", "Report generation"]
    },
    {
      icon: Globe,
      title: "Social Media Management",
      description: "Strategic social media planning, content creation, and community engagement across platforms.",
      features: ["Content planning", "Post scheduling", "Community management"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Support",
      description: "Complete e-commerce assistance including product listings, inventory management, and order processing.",
      features: ["Product listings", "Inventory tracking", "Order management"]
    },
    {
      icon: Search,
      title: "Lead Generation",
      description: "Strategic lead research, prospect identification, and initial outreach to grow your customer base.",
      features: ["Prospect research", "Contact verification", "Outreach campaigns"]
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Basic technical assistance, software setup, and digital tool management for smooth operations.",
      features: ["Software setup", "Tool integration", "Basic troubleshooting"]
    }
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Virtual Assistant Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            From administrative tasks to specialized support, I offer a complete range of services to help your business thrive and grow efficiently.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 border border-gray-200 rounded-xl p-6 bg-white"
            >
              <CardHeader className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-all">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="flex flex-wrap justify-center gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs text-blue-700 bg-blue-100 px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            Don't see what you need? I'm always ready to take on new challenges!
          </p>
          <a
            href="mailto:sylviavirtualassistant93@gmail.com"
            className="inline-block w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300 cursor-pointer"
          >
            Discuss Custom Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
