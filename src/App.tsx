import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Nithin Thokkala | Portfolio";
    
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const targetId = target.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        });
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-[#070B24] text-white antialiased">
      <div 
        className="fixed inset-0 bg-cover bg-center z-0 opacity-20"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundBlendMode: 'overlay'
        }}
      />
      <div className="relative z-10">
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Achievements />
        <Education />
        <Footer />
      </div>
    </div>
  );
}

export default App;