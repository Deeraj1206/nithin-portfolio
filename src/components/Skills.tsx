import React from 'react';
import { Code, Database, Terminal, Layout, BookOpen, Users } from 'lucide-react';


interface SkillItemProps {
  name: string;
  proficiency: number;
  icon: React.ReactNode;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, proficiency, icon }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className="mr-3 text-purple-400">
            {icon}
          </div>
          <span className="text-white font-medium">{name}</span>
        </div>
        <span className="text-purple-300 text-sm">{proficiency}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'Python', proficiency: 85, icon: <Code size={20} /> },
    { name: 'Java', proficiency: 75, icon: <Code size={20} /> },
    { name: 'TensorFlow', proficiency: 80, icon: <Database size={20} /> },
    { name: 'PyTorch', proficiency: 75, icon: <Database size={20} /> },
    { name: 'Keras', proficiency: 78, icon: <Database size={20} /> },
    { name: 'Machine Learning', proficiency: 82, icon: <Terminal size={20} /> },
    { name: 'Data Structures', proficiency: 80, icon: <Code size={20} /> },
  ];
  
  const softSkills = [
    { name: 'Problem-Solving', proficiency: 90, icon: <Layout size={20} /> },
    { name: 'Self-motivation', proficiency: 95, icon: <Users size={20} /> },
    { name: 'Presentation Skills', proficiency: 85, icon: <BookOpen size={20} /> },
    { name: 'Quick Learning', proficiency: 92, icon: <BookOpen size={20} /> },
  ];
  
  const tools = [
    { name: 'Anaconda', proficiency: 85, icon: <Terminal size={20} /> },
    { name: 'GitHub', proficiency: 80, icon: <Terminal size={20} /> },
    { name: 'PyCharm', proficiency: 82, icon: <Layout size={20} /> },
    { name: 'Microsoft Office', proficiency: 90, icon: <Layout size={20} /> },
    { name: 'AutoCAD', proficiency: 70, icon: <Layout size={20} /> },
  ];
  
  return (
    <section id="skills" className="py-20 bg-[#0c1939]">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-purple-500 mb-8"></div>
          <p className="text-gray-300 max-w-2xl">
            I've developed a diverse set of skills throughout my academic journey and personal projects. 
            Here's an overview of my technical proficiency and soft skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-[#0a1128]/80 backdrop-blur-sm p-6 rounded-lg border border-indigo-900/30 shadow-lg shadow-indigo-900/10">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Code size={20} className="mr-2 text-purple-400" /> 
              Technical Skills
            </h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <SkillItem 
                  key={index} 
                  name={skill.name} 
                  proficiency={skill.proficiency} 
                  icon={skill.icon} 
                />
              ))}
            </div>
          </div>
          
          {/* Tools & Platforms */}
          <div className="bg-[#0a1128]/80 backdrop-blur-sm p-6 rounded-lg border border-indigo-900/30 shadow-lg shadow-indigo-900/10">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Terminal size={20} className="mr-2 text-purple-400" /> 
              Tools & Platforms
            </h3>
            <div className="space-y-5">
              {tools.map((tool, index) => (
                <SkillItem 
                  key={index} 
                  name={tool.name} 
                  proficiency={tool.proficiency} 
                  icon={tool.icon} 
                />
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-[#0a1128]/80 backdrop-blur-sm p-6 rounded-lg border border-indigo-900/30 shadow-lg shadow-indigo-900/10 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Users size={20} className="mr-2 text-purple-400" /> 
              Soft Skills
            </h3>
            <div className="space-y-5">
              {softSkills.map((skill, index) => (
                <SkillItem 
                  key={index} 
                  name={skill.name} 
                  proficiency={skill.proficiency} 
                  icon={skill.icon} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;