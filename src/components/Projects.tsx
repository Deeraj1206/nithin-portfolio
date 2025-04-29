import React, { useState } from 'react';
import { Code, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Student Career Response",
      date: "November 2024",
      description: "Utilized Pandas and NumPy for data preprocessing, while Matplotlib and Seaborn were used for data visualization. Implemented Natural Language Processing techniques such as sentiment analysis, tokenization, and stop-word removal using NLTK. Additionally, processed textual data and generated insights through Word Cloud visualization.",
      technologies: ["Python", "Natural Language Processing", "Machine Learning", "NLTK", "Pandas", "NumPy"],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Dimensionality reduction for Visualization",
      date: "October 2024",
      description: "Developed a machine learning model based on dimensionality reduction using PCA to transform high dimensional data into lower dimensionality space while preserving as much as variance. Applied Pandas, NumPy for data processing, Scikit-Learn for model building, Matplotlib for data visualization. Used Seaborn, Normalization, Heatmap as framework.",
      technologies: ["Python", "Machine Learning", "Deep Learning", "PCA", "Scikit-Learn", "Data Visualization"],
      image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Weather Prediction",
      date: "April 2024",
      description: "Built a machine learning model to predict Weather using classification algorithm. Utilized Pandas and NumPy for data processing, Scikit-Learn for model building. Matplotlib/Seaborn for data visualization including a correlation heatmap for feature analysis. Used Random Forest, Decision Tree, Linear regression in the project.",
      technologies: ["Python", "Machine Learning", "Random Forest", "Decision Tree", "Linear Regression"],
      image: "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#0B1437]/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-purple-500 mb-8"></div>
          <p className="text-gray-300 max-w-2xl">
            Here are some of the key projects I've worked on, showcasing my skills in machine learning, 
            data analysis, and software development.
          </p>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-[#070B24]/80 backdrop-blur-sm rounded-lg border border-indigo-900/30 shadow-lg shadow-indigo-900/10 overflow-hidden transition-all duration-300 ${
                expandedProject === index ? 'transform scale-102' : ''
              }`}
            >
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B24] to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="flex items-center mb-3 md:mb-0">
                      <Code size={20} className="text-purple-400 mr-3" />
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    </div>
                    <span className="text-gray-400 text-sm">{project.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className={`text-gray-300 mb-4 ${expandedProject === index ? '' : 'line-clamp-2'}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="inline-block px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-200 flex items-center"
                  >
                    <span>{expandedProject === index ? 'Show Less' : 'Read More'}</span>
                    {expandedProject === index ? (
                      <ChevronUp size={16} className="ml-1" />
                    ) : (
                      <ChevronDown size={16} className="ml-1" />
                    )}
                  </button>
                  
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors duration-200 flex items-center"
                    >
                      <span>View Project</span>
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;