import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Create stars animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Star properties
    const stars: { x: number; y: number; radius: number; speed: number }[] = [];
    const STAR_COUNT = 200;
    
    // Create stars
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: 0.1 + Math.random() * 0.3
      });
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
        
        // Move stars
        star.y += star.speed;
        
        // Reset stars when they go out of bounds
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Stars canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full"
      />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128] via-[#1a1f4b] to-[#283593] opacity-90" />
      
      {/* Cosmic accent */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-20" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500 rounded-full filter blur-[150px] opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <p className="text-purple-300 mb-4 font-medium tracking-wider">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Nithin Thokkala
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-8">
          Computer Science Engineer | Machine Learning Enthusiast
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            Contact Me
          </a>
          <a 
            href="#projects" 
            className="px-6 py-3 bg-transparent border border-purple-500 text-white rounded-lg font-medium hover:bg-purple-500/10 transition-all duration-300"
          >
            View Projects
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/80 hover:text-white transition-colors duration-200">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;