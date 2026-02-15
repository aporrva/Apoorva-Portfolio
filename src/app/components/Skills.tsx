import { 
  Code2, 
  Database, 
  Globe, 
  Layout, 
  Server, 
  Smartphone,
  GitBranch,
  Package
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'React',
      description: 'Building modern, interactive UIs with hooks and context',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Server,
      title: 'Node.js',
      description: 'Scalable backend services and REST APIs',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'MySQL',
      description: 'Database design and optimization',
      color: 'from-green-600 to-green-700'
    },
    {
      icon: Globe,
      title: 'Express',
      description: 'Fast and minimal web framework for Node.js',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: Layout,
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development',
      color: 'from-cyan-400 to-blue-600'
    },
    {
      icon: Code2,
      title: 'TypeScript',
      description: 'Type-safe JavaScript for better code quality',
      color: 'from-blue-600 to-blue-700'
    },
  ];

  return (
    <section id="skills" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            Skills & Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4F46E5] to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Technologies I work with to bring your ideas to life
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#F9FAFB] to-white p-6 rounded-[16px] shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#4F46E5]/30 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon Container */}
                  <div className={`relative p-4 rounded-[14px] bg-gradient-to-br ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                    <div className="absolute inset-0 rounded-[14px] bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#111827] group-hover:text-[#4F46E5] transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover Gradient Border Effect */}
                <div className="absolute inset-0 rounded-[16px] bg-gradient-to-br from-[#4F46E5] to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity -z-10"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
