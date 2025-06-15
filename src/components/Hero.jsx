import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Web Developer', 'Full-Stack Developer'];
  const fullText = roles[loopNum % roles.length];

  useEffect(() => {
    let ticker = setTimeout(() => {
      if (!isDeleting && text === fullText) {
        setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(80);
        }, 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setText(prev => {
          let newText = prev;
          if (isDeleting) {
            newText = prev.substring(0, prev.length - 1);
          } else {
            newText = fullText.substring(0, prev.length + 1);
          }
          return newText;
        });
      }
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, typingSpeed, fullText]);  return (
    <motion.section 
      id="home" 
      className="relative min-h-screen flex items-center bg-white dark:bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Minimal geometric background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute right-10 top-20 w-32 h-32 border border-black dark:border-white opacity-20"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>
        <motion.div 
          className="absolute left-10 bottom-20 w-24 h-24 bg-black dark:bg-white opacity-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        ></motion.div>        <motion.div 
          className="absolute right-1/4 bottom-1/3 w-2 h-20 bg-black dark:bg-white opacity-30"
          initial={{ height: 0 }}
          animate={{ height: 80 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        ></motion.div></div>        <div className="container mx-auto px-4 z-10 flex items-center justify-center min-h-screen pt-24 overflow-hidden">
        <motion.div 
          className="text-center max-w-5xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-black text-black dark:text-white mb-12 leading-none tracking-normal mt-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >              
              <span className="block mt-4 mb-4">Himanshu</span>
              <span className="block mt-2 mb-4">Singh</span>
            </motion.h1><motion.h2 
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-16 mt-2 font-light flex items-center justify-center flex-wrap"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className="mono mr-2">{text}</span>
              <span className="animate-pulse mono text-black dark:text-white">|</span>
            </motion.h2><motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Crafting digital experiences through clean code and thoughtful design.
              Focused on performance, accessibility, and user-centered solutions.
            </motion.p>            
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >              <motion.a 
                href="#contact" 
                className="btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Get in Touch
              </motion.a>
              <motion.a 
                href="#projects" 
                className="btn-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Projects
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex justify-center space-x-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <a 
                href="https://github.com/Himanshusingh9647" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"></path>
                </svg>
              </a>
              <a 
            href="https://linkedin.com/in/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-200"                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
                </svg>
              </a>              <a 
                href="https://codeforces.com/profile/Not_your_regular_coder" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-200" 
                aria-label="Codeforces"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5S3 20.328 3 19.5V9c0-.828.672-1.5 1.5-1.5zm7.5 0C12.828 7.5 13.5 8.172 13.5 9v10.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V9c0-.828.672-1.5 1.5-1.5zm7.5 0c.828 0 1.5.672 1.5 1.5v10.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V9c0-.828.672-1.5 1.5-1.5zM2.25 3h19.5c.414 0 .75.336.75.75s-.336.75-.75.75H2.25C1.836 4.5 1.5 4.164 1.5 3.75S1.836 3 2.25 3z"/>
                </svg>
              </a></motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
