import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SoundwaveImage from '../assets/Soundwave.png';
import CardiaLinkVideo from '../assets/CardiaLink 1.mp4';
import CardiaLinkImage from '../assets/Cardialink.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  
  const projects = [    {
      id: 1,
      title: 'Soundwave',
      description: 'A modern music streaming platform with beautiful UI, playlist management, and audio controls. Built with responsive design and smooth animations.',
      image: SoundwaveImage,
      category: 'web',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web Audio API'],
      demoLink: 'https://himanshusingh9647.github.io/Soundwave/',
      codeLink: 'https://github.com/Himanshusingh9647/Soundwave'
    },    {
      id: 2,
      title: 'CardiaLink',
      description: 'A comprehensive healthcare platform helping patients to get a comprehensive insurance profiling using ML techniques.',
      image: CardiaLinkImage,
      video: CardiaLinkVideo,
      category: 'app',
      technologies: ['React', 'Node.js', 'MongoDB', 'Flask'],
      demoLink: 'video', // Special flag to indicate this should show video
      codeLink: 'https://github.com/Himanshusingh9647/CardiaLink'
    }
 
  ];
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section 
      id="projects" 
      className="py-20 bg-white dark:bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 leading-none">Projects</h2>
          <div className="w-16 h-0.5 bg-black dark:bg-white mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Explore my recent work and projects. Each one is crafted with attention to detail and designed to solve specific problems.
          </p>
        </motion.div>
        
        <motion.div className="flex justify-center mb-12" variants={itemVariants}>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { key: 'all', label: 'All' },
              { key: 'web', label: 'Web' },
              { key: 'app', label: 'Mobile Apps' },
              { key: 'dashboard', label: 'Dashboards' }
            ].map((button, index) => (
              <motion.button 
                key={button.key}
                onClick={() => setFilter(button.key)} 
                className={`px-6 py-3 border-2 font-medium transition-all duration-300 ${
                  filter === button.key 
                    ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white' 
                    : 'bg-transparent text-black dark:text-white border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                {button.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
          variants={containerVariants}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="relative"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              layout
            >
              <motion.div 
                className="absolute -top-4 -left-4 w-full h-full border-2 border-black dark:border-white opacity-30"
                initial={{ scale: 0, rotate: -5 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
              <motion.div 
                className="bg-white dark:bg-black border-2 border-black dark:border-white overflow-hidden relative z-10"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="relative overflow-hidden h-64">
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black dark:bg-white opacity-0 flex items-center justify-center"
                    whileHover={{ opacity: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex space-x-4">
                      <motion.button 
                        onClick={project.demoLink === 'video' ? () => setVideoModalOpen(true) : () => window.open(project.demoLink, '_blank')}
                        className="bg-white dark:bg-black text-black dark:text-white px-6 py-3 border-2 border-black dark:border-white font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {project.demoLink === 'video' ? 'Live Video' : 'Live Demo'}
                      </motion.button>
                      <motion.a 
                        href={project.codeLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white dark:bg-black text-black dark:text-white px-6 py-3 border-2 border-black dark:border-white font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        View Code
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 font-light leading-relaxed">{project.description}</p>
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex}
                        className="px-3 py-1 bg-transparent border-2 border-black dark:border-white text-black dark:text-white text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 * techIndex }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <motion.a 
            href="https://github.com/Himanshusingh9647" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-black dark:border-white bg-transparent text-black dark:text-white font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Check out my GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoModalOpen(false)}
          >
            <motion.div 
              className="relative bg-black dark:bg-black border-2 border-white rounded-none p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 text-xl font-bold z-10 w-10 h-10 flex items-center justify-center border-2 border-white"
              >
                ×
              </button>
              <div className="w-full">
                <h3 className="text-2xl font-bold mb-6 text-white">CardiaLink Demo</h3>
                <video 
                  src={CardiaLinkVideo}
                  controls
                  autoPlay
                  className="w-full"
                  style={{ maxHeight: '70vh' }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;
