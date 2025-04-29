import React from 'react';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#060a18] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <p className="text-gray-300 mb-6">
              Feel free to reach out for collaboration opportunities, 
              job offers, or just to say hello!
            </p>
            
            <div className="space-y-3">
              <a 
                href="mailto:nithinroyal2004@gmail.com" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={18} className="mr-3 text-purple-400" />
                nithinroyal2004@gmail.com
              </a>
              <a 
                href="tel:+919347712794" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91-9347712794
              </a>
              <a 
                href="https://www.linkedin.com/in/nithin-thokkala" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={18} className="mr-3 text-purple-400" />
                linkedin.com/in/nithin-thokkala
              </a>
              <a 
                href="https://github.com/Nithin10180" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Github size={18} className="mr-3 text-purple-400" />
                github.com/Nithin10180
              </a>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors py-2">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors py-2">About</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors py-2">Skills</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors py-2">Experience</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors py-2">Projects</a>
              <a href="#education" className="text-gray-300 hover:text-white transition-colors py-2">Education</a>
              <a href="#certificates" className="text-gray-300 hover:text-white transition-colors py-2">Certificates</a>
              <a href="#achievements" className="text-gray-300 hover:text-white transition-colors py-2">Achievements</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Nithin Thokkala. All rights reserved.
          </p>
          
          <a 
            href="#home" 
            className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-colors duration-200"
            aria-label="Back to top"
          >
            <ChevronUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;