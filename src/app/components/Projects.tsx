import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Ethreal Design',
      description: 'A creative digital agency and design-led company that focuses on crafting digital products and experiences through strategy, creativity, and UX (user experience) design.',
      image: '/images/ethereal ss.jpeg',
      tech: ['React', 'TypeScript', 'Next.js'],
      liveUrl: 'https://etherealdesign.io/',
      githubUrl: null
    },
    {
      id: 2,
      title: 'Mani Artisan Jewellery',
      description: 'Full-featured online shopping platform with payment integration, inventory management, and user authentication.',
      image: '/images/manipic.png',
      tech: ['Next.js', 'Tailwind', 'React'],
      liveUrl: 'https://mani-artisan-jewellery.netlify.app/',
      githubUrl: 'https://github.com/aporrva/Mani-Artisan-Jewellery'
    },
    {
      id: 3,
      title: 'Form Filling Website',
      description: 'A clean, modern, and professional form-filling website design focused on collecting user information efficiently with a secure, user-friendly interface.',
      image: '/images/formfilling.png',
      tech: ['React', 'Express', 'Tailwind'],
      liveUrl: 'https://form-filling-website.netlify.app/',
      githubUrl: 'https://github.com/aporrva/Form-Filling-Website'
    }
  ];

  return (
    <section id="projects" className="py-24 px-8 bg-gradient-to-br from-[#F9FAFB] to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4F46E5] to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-[16px] shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-105 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-56 bg-gradient-to-br from-indigo-100 to-purple-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-[#111827] group-hover:text-[#4F46E5] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-50 text-[#4F46E5] rounded-[8px] text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.liveUrl}
                    className="flex-1  flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#4F46E5] to-purple-600 text-white rounded-[12px] hover:shadow-lg transition-all duration-300 text-sm font-medium"
                    target='_blank'
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl || "#"}
                    onClick={(e) => {
                      if (!project.githubUrl) e.preventDefault();
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-[12px] transition-all duration-300 text-sm font-medium
    ${project.githubUrl
                        ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                      }
  `}
                    title={!project.githubUrl ? "Private Repository" : ""}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
