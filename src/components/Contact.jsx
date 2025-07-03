import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { emailjsConfig, createEmailTemplate } from '../config/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentCommand, setCurrentCommand] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  // Terminal animation text
  const commands = [
    'git clone https://github.com/himanshusingh9647/contact.git',
    'cd contact && npm install',
    'npm start -- --message="Let\'s collaborate!"',
    '> Server running on localhost:3000',
    '> Ready to receive your message...'
  ];

  useEffect(() => {
    if (currentCommand < commands.length) {
      const command = commands[currentCommand];
      setIsTyping(true);
      let displayText = '';
      let index = 0;
      
      const timer = setInterval(() => {
        if (index < command.length) {
          displayText += command[index];
          setTerminalLines(prev => {
            const newLines = [...prev];
            newLines[currentCommand] = displayText;
            return newLines;
          });
          index++;
        } else {
          clearInterval(timer);
          setIsTyping(false);
          setTimeout(() => {
            setCurrentCommand(prev => prev + 1);
          }, 800);
        }
      }, 75);
      
      return () => clearInterval(timer);
    }
  }, [currentCommand]);

  // Reset terminal animation
  const resetTerminal = () => {
    setTerminalLines([]);
    setCurrentCommand(0);
    setIsTyping(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Check if EmailJS is configured
    if (!emailjsConfig.isConfigured()) {
      setIsSubmitting(false);
      setSubmitError('Email service is not configured yet. Please contact me directly at himanshusingh1088@gmail.com');
      return;
    }

    try {
      // Create email template parameters
      const templateParams = createEmailTemplate(formData);

      // Send email using EmailJS
      const result = await emailjs.send(
        emailjsConfig.serviceID,
        emailjsConfig.templateID,
        templateParams,
        emailjsConfig.publicKey
      );

      console.log('Email sent successfully:', result);
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);
      setSubmitError('Failed to send message. Please try again or contact me directly at himanshusingh1088@gmail.com');
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="relative min-h-screen flex items-center bg-gray-50 dark:bg-gray-950 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Code-inspired background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 text-6xl text-gray-200 dark:text-gray-800 font-mono opacity-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {'{ }'}
        </motion.div>
        <motion.div 
          className="absolute bottom-20 right-10 text-4xl text-gray-200 dark:text-gray-800 font-mono opacity-30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          &lt;/&gt;
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/4 w-32 h-0.5 bg-gray-300 dark:bg-gray-700 opacity-40"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-0.5 h-24 bg-gray-300 dark:bg-gray-700 opacity-40"
          initial={{ height: 0 }}
          animate={{ height: 96 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        {/* Header with terminal style */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block bg-black dark:bg-white text-green-400 dark:text-green-600 px-4 py-2 rounded-t-lg font-mono text-sm mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ~/contact $ init_connection()
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 font-mono"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            function <span className="text-blue-600 dark:text-blue-400">getInTouch</span>() {'{'}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-mono"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="text-gray-500 dark:text-gray-500">// Let's collaborate and build something amazing together!</span><br/>
            <span className="text-purple-600 dark:text-purple-400">return</span> <span className="text-green-600 dark:text-green-400">"Ready to connect 🚀"</span>;
          </motion.p>
          <motion.div
            className="text-4xl md:text-5xl font-bold text-black dark:text-white mt-4 font-mono"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {'}'}
          </motion.div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Terminal-style Contact Info */}
          <motion.div 
            className="w-full lg:w-2/5"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg overflow-hidden border-2 border-gray-300 dark:border-gray-600">
              {/* Terminal header */}
              <div className="bg-gray-200 dark:bg-gray-700 px-4 py-2 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-gray-600 dark:text-gray-300 font-mono text-sm">
                  contact-terminal.sh
                </div>
                <button 
                  onClick={resetTerminal}
                  className="ml-auto text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                  title="Reset animation"
                >
                  ↻
                </button>
              </div>
              
              {/* Terminal content */}
              <div className="p-6 font-mono text-sm text-green-400 dark:text-green-300 min-h-[300px]">
                <div className="mb-4">
                  <span className="text-blue-400">himanshu@portfolio</span>
                  <span className="text-white">:</span>
                  <span className="text-yellow-400">~/contact</span>
                  <span className="text-white">$ </span>
                </div>
                
                <motion.div 
                  className="space-y-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  {terminalLines.map((line, index) => (
                    <div key={index} className="font-mono text-sm">
                      {line}
                    </div>
                  ))}
                  {isTyping && <span className="animate-pulse text-green-400">|</span>}
                </motion.div>

                <div className="mt-8 space-y-4 text-white">
                  <motion.div 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <span className="text-cyan-400">const</span>
                    <span className="text-yellow-400">email</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">"himanshusingh1088@gmail.com"</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                  >
                    <span className="text-cyan-400">const</span>
                    <span className="text-yellow-400">phone</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">"+91 9647431656"</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.9 }}
                  >
                    <span className="text-cyan-400">const</span>
                    <span className="text-yellow-400">location</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">"Jaipur, Rajasthan"</span>
                  </motion.div>

                  <motion.div 
                    className="mt-6 p-3 bg-gray-800 dark:bg-gray-700 rounded border-l-4 border-blue-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.1 }}
                  >
                    <div className="text-blue-400 text-xs mb-1">// Social Networks</div>
                    <div className="space-y-1">
                      <div>
                        <a 
                          href="https://github.com/himanshusingh9647" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          github.com/himanshusingh9647
                        </a>
                      </div>
                      <div>
                        <a 
                          href="https://linkedin.com/in/himanshusingh9647" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          linkedin.com/in/himanshusingh9647
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Developer-style Contact Form */}
          <motion.div 
            className="w-full lg:w-3/5"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg border-2 border-gray-300 dark:border-gray-600 overflow-hidden">
              {/* VS Code style header */}
              <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 border-b border-gray-300 dark:border-gray-600">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-mono text-sm">
                    contact-form.js
                  </div>
                  <div className="ml-auto flex space-x-1">
                    <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                    <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Code comment header */}
                <motion.div 
                  className="font-mono text-sm text-gray-500 dark:text-gray-400 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <div>/**</div>
                  <div> * Send me a message and let's start building!</div>
                  <div> * @param {'{'}Object{'}'} messageData - Your contact information</div>
                  <div> * @returns {'{'}Promise{'}'} - A new collaboration opportunity</div>
                  <div> */</div>
                </motion.div>

                {/* Configuration Notice */}
                {!emailjsConfig.isConfigured() && (
                  <motion.div
                    className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-yellow-600 dark:text-yellow-400 mt-0.5">⚠️</div>
                      <div className="text-sm">
                        <div className="font-mono text-yellow-800 dark:text-yellow-200 font-medium mb-1">
                          // Email service configuration needed
                        </div>
                        <div className="text-yellow-700 dark:text-yellow-300">
                          The contact form will show a fallback message until EmailJS is configured. 
                          Check <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">EMAILJS_SETUP.md</code> for instructions.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    <label className="block font-mono text-sm mb-2">
                      <span className="text-purple-600 dark:text-purple-400">const</span>
                      <span className="text-gray-700 dark:text-gray-300 ml-2">senderName</span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">=</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder='"Your Name"'
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded font-mono text-green-600 dark:text-green-400 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                  >
                    <label className="block font-mono text-sm mb-2">
                      <span className="text-purple-600 dark:text-purple-400">const</span>
                      <span className="text-gray-700 dark:text-gray-300 ml-2">emailAddress</span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">=</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder='"your.email@domain.com"'
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded font-mono text-green-600 dark:text-green-400 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                  >
                    <label className="block font-mono text-sm mb-2">
                      <span className="text-purple-600 dark:text-purple-400">const</span>
                      <span className="text-gray-700 dark:text-gray-300 ml-2">subject</span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">=</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder='"Project Collaboration"'
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded font-mono text-green-600 dark:text-green-400 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.0 }}
                  >
                    <label className="block font-mono text-sm mb-2">
                      <span className="text-purple-600 dark:text-purple-400">const</span>
                      <span className="text-gray-700 dark:text-gray-300 ml-2">message</span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">=</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder={`\`Hello Himanshu,

I'd love to discuss a potential collaboration...

Looking forward to hearing from you!\``}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded font-mono text-green-600 dark:text-green-400 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors resize-none"
                    />
                  </motion.div>

                  {/* Function call style submit */}
                  <motion.div
                    className="font-mono text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.2 }}
                  >
                    <div className="text-gray-500 dark:text-gray-400 mb-4">
                      // Execute the contact function
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-mono py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          sendMessage()...
                        </span>
                      ) : (
                        'sendMessage() {}'
                      )}
                    </motion.button>
                  </motion.div>

                  {/* Success/Error Messages */}
                  {submitSuccess && (
                    <motion.div
                      className="p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded font-mono text-sm"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-green-700 dark:text-green-300">
                        <span className="text-green-600 dark:text-green-400">✅ Success!</span>
                        <div className="mt-1">console.log("Message sent successfully! 🚀")</div>
                      </div>
                    </motion.div>
                  )}

                  {submitError && (
                    <motion.div
                      className="p-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded font-mono text-sm"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-red-700 dark:text-red-300">
                        <span className="text-red-600 dark:text-red-400">❌ Error:</span>
                        <div className="mt-1">console.error("{submitError}")</div>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fun developer quote */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }}
        >
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto border-l-4 border-blue-500">
            <div className="font-mono text-gray-600 dark:text-gray-400 mb-2">
              // Fun fact
            </div>
            <div className="text-lg text-gray-700 dark:text-gray-300 font-mono">
              <span className="text-purple-600 dark:text-purple-400">while</span>
              <span className="text-gray-700 dark:text-gray-300"> (</span>
              <span className="text-yellow-600 dark:text-yellow-400">coffee</span>
              <span className="text-gray-700 dark:text-gray-300">) {'{'} </span>
              <span className="text-green-600 dark:text-green-400">code()</span>
              <span className="text-gray-700 dark:text-gray-300">; {'}'}</span>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-mono">
              // Let's build something amazing together! ☕️ + 👨‍💻 = 🚀
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
