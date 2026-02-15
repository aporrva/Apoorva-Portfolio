import { ArrowRight, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-24 bg-gradient-to-br from-[#F9FAFB] via-[#F9FAFB] to-indigo-50">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-[#111827] leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-[#4F46E5] to-purple-600 bg-clip-text text-transparent">Apoorva Rawat</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                Full Stack Developer | Problem Solver | Tech Enthusiast
              </p>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Passionate about building elegant, user-centric web applications that solve real-world problems. 
              I transform complex challenges into intuitive digital experiences with clean code and modern technologies.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-[#4F46E5] to-purple-600 text-white rounded-[14px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white text-[#4F46E5] rounded-[14px] shadow-md hover:shadow-lg transition-all duration-300 border-2 border-[#4F46E5]/20 hover:border-[#4F46E5] flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </button>
            </div>
          </div>
          
          {/* Right Column - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#4F46E5] to-purple-600 rounded-[32px] blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-[32px] overflow-hidden shadow-2xl ring-4 ring-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1653732212701-b729f0b08330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTEzODE0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Apoorva Rawat"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
