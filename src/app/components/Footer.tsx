import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com',
      label: 'GitHub',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      url: 'https://linkedin.com',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      url: 'https://twitter.com',
      label: 'Twitter',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#111827] to-gray-900 text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#4F46E5] to-purple-400 bg-clip-text text-transparent mb-2">
              Apoorva Rawat
            </h3>
            <p className="text-gray-400 text-sm">
              Full Stack Developer
            </p>
          </div>
          
          {/* Center - Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-3 bg-white/10 rounded-[12px] backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
          
          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> by Apoorva
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © 2026 All rights reserved.
            </p>
          </div>
        </div>
        
        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-center text-gray-400 text-sm">
            <p>Built with React, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
