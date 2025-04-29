import React from 'react';
import { Trophy } from 'lucide-react';

interface Achievement {
  title: string;
  date: string;
  description: string;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      title: "Daily Geeks-for-geeks problem",
      date: "January 2025",
      description: "Solving easy and medium problem in Geeks-for-geeks to improve problem solving speed and logic-building through consistent practice."
    },
    {
      title: "Attended Google Nibbler",
      date: "October 2024",
      description: "Involved in prompting an image generation system and analyzing outputs to detect unethical or illegal content, refining evaluation criteria for responsible AI usage."
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-[#0c1939]">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-purple-500 mb-8"></div>
          <p className="text-gray-300 max-w-2xl">
            Notable achievements and recognition received throughout my academic and professional journey.
          </p>
        </div>
        
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-[#0a1128]/80 backdrop-blur-sm p-6 rounded-lg border border-indigo-900/30 shadow-lg shadow-indigo-900/10 transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="flex items-start">
                <Trophy size={24} className="text-purple-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center mb-3">
                    <h3 className="text-lg font-semibold text-white mr-3">{achievement.title}</h3>
                    <span className="text-gray-400 text-sm">{achievement.date}</span>
                  </div>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;