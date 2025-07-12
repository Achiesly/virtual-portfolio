import { Download } from 'lucide-react';
import { Button } from "./ui/button";


export default function Hero() {
  return (
<section
  id="home"
  className="relative py-24 min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden"
>
  {/* Decorative Background Blobs */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-0" />
  <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-accent/10 rounded-full blur-3xl z-0" />

  <div className="relative z-10 container mx-auto px-4 py-8">
    <div className="flex items-center justify-center mb-8">
        <div className="bg-blue-100 text-blue-700 text-sm font-medium px-6 py-2 rounded-full">
            ⭐ Trusted by 50+ businesses
        </div>
    </div>

    {/* Main Content */}
    <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
      Your Dedicated{" "} <br />
      <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text">
        Virtual Assistant
      </span>
    </h1>

      <p className="text-lg md:text-xl text-gray-700 mb-10">
        Streamline your business operations with professional virtual assistance.
        I help entrepreneurs and businesses maximize productivity while minimizing costs.
      </p>

      {/* CTA Buttons */}
        <div className="flex justify-center gap-6 mb-10">
    <Button
      size="lg"
      className="px-8 py-5 text-base font-semibold transition duration-300 text-white bg-blue-600 hover:bg-blue-700"
      asChild
    >
      <a href="mailto:achiengsylvia20@gmail.com">Get In Touch</a>
        </Button>
        <a
        href="/cv.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        >
        <Button
          variant="outline"
          size="lg"
          className="px-8 py-5 text-base font-semibold border-gray-300 hover:border-primary hover:text-primary cursor-pointer transition duration-300"
        >
        <Download className="h-5 w-5" />
          Download CV
        </Button>
        </a>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        <div>
          <div className="text-4xl font-bold text-primary mb-1">5.0</div>
          <p className="text-gray-600">Average Rating</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-primary mb-1">50+</div>
          <p className="text-gray-600">Happy Clients</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-primary mb-1">24/7</div>
          <p className="text-gray-600">Support</p>
        </div>
      </div>
      
    </div>
  </div>
  </section>
  );
}
