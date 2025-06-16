import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      id="about" 
      className="py-20 bg-gray-50 dark:bg-gray-950"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">About</h2>
          <div className="w-16 h-0.5 bg-black dark:bg-white mx-auto"></div>
        </motion.div>        
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div className="w-full md:w-1/2" variants={itemVariants}>
            <div className="relative">
              <motion.div 
                className="absolute -top-4 -left-4 w-full h-full border-2 border-black dark:border-white opacity-30"
                initial={{ scale: 0, rotate: -5 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
              <motion.div 
                className="relative bg-white dark:bg-black border border-black dark:border-white overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="Portfolio/src/assets/WhatsApp Image 2025-06-15 at 21.47.18_c3701035.jpg" 
                  alt="Me" 
                  className="w-full filter grayscale hover:grayscale-0 transition-all duration-300 rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div className="w-full md:w-1/2" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-black dark:text-white mb-6">
              Background
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg font-light">
              I'm a passionate developer with a strong foundation in modern web technologies. 
              With a focus on clean code, performance optimization, and user experience, I've worked on projects ranging from small business websites to complex enterprise applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg font-light">
              My goal is to create intuitive, accessible, and visually appealing digital experiences that solve real-world problems. 
              I believe in the power of clean, minimal design combined with robust functionality.
            </p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="w-2 h-2 bg-black dark:bg-white mt-3 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Frontend Development</span>
              </motion.div>
              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="w-2 h-2 bg-black dark:bg-white mt-3 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Backend Architecture</span>
              </motion.div>
              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="w-2 h-2 bg-black dark:bg-white mt-3 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">System Design</span>
              </motion.div>
              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="w-2 h-2 bg-black dark:bg-white mt-3 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Performance Optimization</span>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.a 
                href="#contact" 
                className="btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Contact Me
              </motion.a>
              <motion.a 
                href="\src\assets\Resume(Himanshu).pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
