import React from 'react';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  date: string;
  location: string;
  grade: string;
  icon: React.ReactNode;
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      date: "Since August 2022",
      location: "Punjab, India",
      grade: "CGPA: 7.27",
      icon: <GraduationCap size={24} className="text-purple-400" />
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Intermediate",
      date: "July 2020 - April 2022",
      location: "Vijayawada, Andhra Pradesh",
      grade: "Percentage: 94.4%",
      icon: <BookOpen size={24} className="text-purple-400" />
    },
    {
      institution: "Indus EM High School",
      degree: "Matriculation",
      date: "July 2017 - April 2020",
      location: "Kurnool, Andhra Pradesh",
      grade: "Percentage: 79%",
      icon: <BookOpen size={24} className="text-purple-400" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-[#0a1128]">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-purple-500 mb-8"></div>
          <p className="text-gray-300 max-w-2xl">
            My academic background and qualifications that have shaped my knowledge and skills.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-purple-500/30"></div>
          
          <div className="space-y-12">
            {educationItems.map((item, index) => (
              <div key={index} className="relative flex">
                {/* Timeline Icon */}
                <div className="hidden md:flex absolute left-8 transform -translate-x-1/2 items-center justify-center z-10 w-14 h-14 rounded-full bg-[#0c1939] border-2 border-purple-500/50">
                  {item.icon}
                </div>
                
                <div className="ml-0 md:ml-16">
                  <div className="bg-[#0c1939] p-6 rounded-lg border border-indigo-900/30 shadow-lg shadow-indigo-900/10 transition-transform hover:-translate-y-1 duration-300">
                    <div className="flex md:hidden items-center mb-4">
                      <div className="mr-3">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{item.institution}</h3>
                    </div>
                    
                    <div className="hidden md:block">
                      <h3 className="text-xl font-semibold text-white mb-2">{item.institution}</h3>
                    </div>
                    
                    <h4 className="text-purple-300 mb-2">{item.degree}</h4>
                    
                    <div className="flex items-center text-gray-400 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span>{item.date}</span>
                    </div>
                    
                    <div className="flex justify-between flex-wrap">
                      <span className="text-gray-300">{item.location}</span>
                      <span className="text-purple-400 font-medium">{item.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;