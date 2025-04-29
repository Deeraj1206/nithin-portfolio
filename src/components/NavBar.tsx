import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';
import resume from '../assets/resume.pdf'; // Make sure the file exists in the path

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a1128]/90 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white">
            Nithin<span className="text-purple-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Links + Resume for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/nithin-thokkala" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/Nithin10180" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:nithinroyal2004@gmail.com" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href={resume} 
              download
              className="ml-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors duration-200"
              aria-label="Download Resume"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a1128]/95 backdrop-blur-sm mt-2 py-4 px-4 absolute top-full left-0 right-0 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <div className="flex items-center space-x-4 py-4">
              <a 
                href="https://www.linkedin.com/in/nithin-thokkala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/Nithin10180" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:nithinroyal2004@gmail.com" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            <a 
              href={resume} 
              download
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 transition-colors duration-200 mt-2"
              aria-label="Download Resume"
            >
              <FileText size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
