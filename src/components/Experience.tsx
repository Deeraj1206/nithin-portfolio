import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#0a1128]">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-purple-500 mb-8"></div>
          <p className="text-gray-300 max-w-2xl">
            My professional experience and internships in the field of machine learning and software development.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-purple-500/30"></div>
          
          {/* Internship */}
          <div className="relative flex flex-col md:flex-row items-center md:justify-between mb-8">
            <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0">
              <div className="bg-[#0c1939] p-6 rounded-lg border border-indigo-900/30 shadow-lg shadow-indigo-900/10 md:ml-auto md:mr-0 max-w-md transition-transform hover:-translate-y-1 duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">ML Intern</h3>
                <h4 className="text-purple-400 mb-3">Skillforge – Machine Learning with Python</h4>
                <div className="flex md:justify-end items-center mb-4 text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span>August 2023 - October 2023</span>
                </div>
                <p className="text-gray-300">
                  Designed and implemented a Convolutional Neural Network (CNN) for classifying 
                  Fashion accessories as part of the Major Project, and developed an Artificial 
                  Neural Network (ANN) to forecast customer churn using user behavior and 
                  demographic features as the Minor Project.
                </p>
                <div className="mt-4 flex md:justify-end">
                  <span className="inline-block px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm">
                    Python
                  </span>
                  <span className="inline-block px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm ml-2">
                    Machine Learning
                  </span>
                  <span className="inline-block px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm ml-2">
                    Deep Learning
                  </span>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex relative z-10 items-center justify-center w-10 h-10 rounded-full bg-purple-600 shadow-xl">
              <Briefcase size={16} className="text-white" />
            </div>
            
            <div className="flex-1 md:pl-12">
              {/* Empty space for layout */}
            </div>
          </div>
        </div>
        
        {/* CTA for more experience */}
        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/in/nithin-thokkala"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
          >
            <span>View my LinkedIn profile for more details</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;