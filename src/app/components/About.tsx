export function About() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 
    'mysql', 'Express', 'Tailwind CSS',
    'REST APIs',"React Native"
  ];

  return (
    <section id="about" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4F46E5] to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#F9FAFB] to-white p-8 rounded-[16px] shadow-md border border-gray-100">
              <h3 className="text-2xl font-semibold text-[#111827] mb-4">
                Hello there! 👋
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with a love for creating beautiful, 
                  functional web applications. With expertise in modern JavaScript frameworks 
                  and backend technologies, I bring ideas to life through code.
                </p>
                <p>
                  My journey in tech started with a curiosity about how things work, and it has 
                  evolved into a career focused on crafting seamless user experiences and 
                  scalable solutions. I thrive in collaborative environments and enjoy 
                  tackling complex problems with elegant solutions.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Skills */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-[16px] shadow-md border border-indigo-100">
              <h3 className="text-2xl font-semibold text-[#111827] mb-6">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-5 py-2.5 bg-white text-[#4F46E5] rounded-[12px] shadow-sm hover:shadow-md transition-all duration-300 border border-indigo-100 hover:scale-105 hover:border-[#4F46E5] cursor-default font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
           
          </div>
        </div>
      </div>
    </section>
  );
}
