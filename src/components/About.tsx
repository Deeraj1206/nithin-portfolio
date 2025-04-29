import React from 'react';
import { MapPin, Phone, Mail, Github, Linkedin } from 'lucide-react';
import photo from "../assests/photo.jpg"; // Ensure this path is correct
import resume from '../assests/resume.pdf'; 

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#070B24]/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-purple-500 mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-1 shadow-lg shadow-purple-500/25 transform hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-[#070B24] overflow-hidden">
                <img 
                  src={photo} 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Bio Information */}
          <div className="text-left">
            <h3 className="text-2xl font-bold text-white mb-4">Nithin Thokkala</h3>
            <p className="text-gray-300 mb-6">
              As a Computer Science Engineering student at Lovely Professional University, 
              I'm deeply passionate about Machine Learning and Artificial Intelligence. 
              My journey in tech has been marked by hands-on experience with Python, Java, 
              and various ML frameworks. I love tackling complex problems and turning data 
              into meaningful insights.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={18} className="text-purple-400 mr-3" />
                <span className="text-gray-300">Punjab, India</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-purple-400 mr-3" />
                <span className="text-gray-300">+91-9347712794</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-purple-400 mr-3" />
                <a href="mailto:nithinroyal2004@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  nithinroyal2004@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Github size={18} className="text-purple-400 mr-3" />
                <a 
                  href="https://github.com/Nithin10180" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  github.com/Nithin10180
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin size={18} className="text-purple-400 mr-3" />
                <a 
                  href="https://www.linkedin.com/in/nithin-thokkala" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  linkedin.com/in/nithin-thokkala
                </a>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href={resume} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 inline-flex items-center gap-2"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
