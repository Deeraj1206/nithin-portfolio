import React from 'react';
import { Award, Calendar, FileText, Book, Code, Brain } from 'lucide-react';
import cert1 from "../assets/certificate1.jpg";
import cert2 from "../assets/certificate2.jpg";
import cert3 from "../assets/certificate3.jpg";
import cert4 from "../assets/certificate4.jpg";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
  icon: React.ReactNode;
}

const Certificates: React.FC = () => {
  const certificates: Certificate[] = [
    {
      title: "Data Structure and algorithms self-placed",
      issuer: "GeeksforGeeks",
      date: "May 2024 - July 2024",
      image: cert1,
      link: "https://drive.google.com/file/d/1U8nNN-wgiJZJO9-8QY-A8BkIGCe-dD-c/view?usp=drive_link",
      icon: <Code size={24} className="text-purple-400" />
    },
    {
      title: "Introduction to Large Language Models",
      issuer: "Coursera",
      date: "December 2023 - February 2024",
      image: cert2,
      link: "https://drive.google.com/file/d/1XHrQ2nNs6nyxof1vvfta0kuzVMRErQeV/view?usp=drive_link",
      icon: <Brain size={24} className="text-purple-400" />
    },
    {
      title: "Project in Artificial Intelligence with Python",
      issuer: "Immensphere (Skillforge)",
      date: "August 2023 - October 2023",
      image: cert3,
      link: "https://drive.google.com/file/d/1ERCasD6nI1WQStQz_M6QwLYYXUogOtN_/view?usp=drive_link",
      icon: <Award size={24} className="text-purple-400" />
    },
    {
      title: "Python for beginner",
      issuer: "Simplilearn",
      date: "November 2022 - January 2023",
      image: cert4,
      link: "https://drive.google.com/file/d/17Lg50MYWShiSlejIE3QpLfHJ6KNNWmei/view?usp=drive_link",
      icon: <Book size={24} className="text-purple-400" />
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-[#070B24]/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-purple-500 mb-8"></div>
          <p className="text-gray-300 max-w-2xl">
            Professional certifications and courses I've completed to enhance my technical skills and knowledge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="group bg-[#0B1437]/80 rounded-lg border border-indigo-900/30 shadow-lg shadow-indigo-900/10 overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B24] to-transparent opacity-90"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start">
                  {cert.icon}
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                    <p className="text-purple-300 mb-2">{cert.issuer}</p>
                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <Calendar size={14} className="mr-2" />
                      <span>{cert.date}</span>
                    </div>
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
                    >
                      <FileText size={16} className="mr-2" />
                      <span>View Certificate</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;