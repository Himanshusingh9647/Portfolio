import { useState } from 'react';
import { motion } from 'framer-motion';

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
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    setTimeout(() => {
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
    }, 1500);
    
    // In a real application, you would handle the form submission here
    // Example:
    /*
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        setIsSubmitting(false);
        if (data.success) {
          setSubmitSuccess(true);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        } else {
          setSubmitError(data.error || 'Something went wrong. Please try again.');
        }
      })
      .catch(error => {
        setIsSubmitting(false);
        setSubmitError('An error occurred. Please try again later.');
        console.error('Error:', error);
      });
    */
  };  return (
    <motion.section 
      id="contact" 
      className="relative min-h-screen flex items-center bg-white dark:bg-black py-20"
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
        ></motion.div>
        <motion.div 
          className="absolute right-1/4 bottom-1/3 w-2 h-20 bg-black dark:bg-white opacity-30"
          initial={{ height: 0 }}
          animate={{ height: 80 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        ></motion.div>
        <motion.div 
          className="absolute left-1/3 top-1/4 w-20 h-2 bg-black dark:bg-white opacity-30"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        ></motion.div>
      </div>
      <div className="container mx-auto px-4 z-10">        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 leading-tight tracking-normal"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >Get In Touch</motion.h2>
          <div className="w-16 h-0.5 bg-black dark:bg-white mx-auto mb-8"></div>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
          </motion.p>
        </motion.div>
          <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">
          {/* Contact Form */}          <motion.div 
            className="w-full md:w-3/5 lg:w-3/5"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -top-4 -left-4 w-full h-full border-2 border-black dark:border-white opacity-30"
                initial={{ scale: 0, rotate: -5 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
              <motion.form 
                onSubmit={handleSubmit} 
                className="relative bg-white dark:bg-black border-2 border-black dark:border-white p-8"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >              {submitSuccess && (
                <motion.div 
                  className="mb-8 p-4 border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black flex items-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Thank you! Your message has been sent successfully.</span>
                </motion.div>
              )}
              
              {submitError && (
                <motion.div 
                  className="mb-8 p-4 border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black flex items-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{submitError}</span>
                </motion.div>
              )}
                <motion.div 
                className="mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-black dark:text-white mb-2">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-black dark:border-white bg-transparent text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  placeholder="Name"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </motion.div>
              
              <motion.div 
                className="mb-6"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white mb-2">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-black dark:border-white bg-transparent text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  placeholder="abc@gmail.com"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </motion.div>
              
              <motion.div 
                className="mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-black dark:text-white mb-2">
                  Subject
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-black dark:border-white bg-transparent text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  placeholder="Project Inquiry"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </motion.div>
                <motion.div 
                className="mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-black dark:text-white mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-black dark:border-white bg-transparent text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  placeholder="Your message here..."
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                ></motion.textarea>
              </motion.div>
                <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-black text-white border-2 border-black hover:bg-white hover:text-black dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white transition-all duration-300 font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
            </div>
          </motion.div>
            {/* Contact Info */}          <motion.div 
            className="w-full md:w-2/5 lg:w-2/5"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -top-4 -left-4 w-full h-full border-2 border-black dark:border-white opacity-30"
                initial={{ scale: 0, rotate: -5 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
              <motion.div 
                className="relative border-2 border-black dark:border-white bg-white dark:bg-black p-8 h-full"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >              <motion.h3 
                className="text-2xl font-bold text-black dark:text-white mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >Contact Information</motion.h3>
              <div className="w-12 h-0.5 bg-black dark:bg-white mb-8"></div>
              
              <div className="space-y-8">
                {[
                  {
                    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                    title: "Phone",
                    content: "+91 9647431656"
                  },
                  {
                    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                    title: "Email",
                    content: "himanshusingh1088@gmail.com"
                  },
                  {
                    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                    title: "Location",
                    content: "Jaipur, Rajasthan, India"
                  }
                ].map((item, index) => (                  <motion.div 
                    key={index}
                    className="flex items-center group"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 + (0.1 * index) }}
                    whileHover={{ x: 5 }}
                  ><motion.div 
                      className="w-12 h-12 border-2 border-black dark:border-white flex items-center justify-center mr-4 group-hover:bg-black group-hover:border-black dark:group-hover:bg-white dark:group-hover:border-white transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-medium text-black dark:text-white">{item.title}</h4>
                      <p className="text-gray-700 dark:text-gray-300 font-light">{item.content}</p>
                    </div>
                  </motion.div>                ))}              </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
