import { CheckCircle, Award, Clock, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    { icon: Award, title: "3+ Years Experience", description: "Proven track record in virtual assistance" },
    { icon: CheckCircle, title: "99% Task Completion", description: "Reliable delivery of all assigned tasks" },
    { icon: Clock, title: "Quick Turnaround", description: "Fast and efficient project completion" },
    { icon: Target, title: "Results-Driven", description: "Focused on achieving your business goals" }
  ];

  return (
    <section id="about" className="py-18 px-4 sm:px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text + Highlights */}
          <div className="space-y-12 animate-fade-in">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                About Your <span className="text-gray-900">Virtual Assistant</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Hi! I'm a dedicated virtual assistant with over 3 years of experience helping 
                  entrepreneurs and businesses streamline their operations. My passion lies in 
                  transforming chaos into organized, efficient systems that drive growth.
                </p>
                <p>
                  I take the admin burden off your shoulders so you can focus on what you do best, growing your business.
                  From email management to complex project coordination, I handle it all with precision and professionalism.
                </p>
                <p>
                  My approach is simple: understand your needs, implement effective solutions, and
                  constantly optimize for maximum productivity. Communication, reliability, and quality
                  are at the core of everything I do.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Card */}
          <div className="relative animate-fade-in">
            <Card className="p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="w-28 h-28 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-600">VA</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Sylvia Achieng</h3>
                  <p className="text-blue-500 text-12sm">Professional Virtual Assistant</p>
                </div>

                <ul className="space-y-4 border-t pt-6 text-12sm text-gray-600">
                  <li className="flex justify-between">
                    <span>Response Time</span>
                    <span className="font-semibold text-gray-800">&lt; 2 hours</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Availability</span>
                    <span className="font-semibold text-gray-800">Mon–Fri, 8AM–6PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Time Zone</span>
                    <span className="font-semibold text-gray-800">EAT (UTC+3)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Languages</span>
                    <span className="font-semibold text-gray-800">English, Swahili</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute -z-10 bottom-0 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-float delay-3000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
