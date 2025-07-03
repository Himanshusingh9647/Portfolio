// EmailJS Configuration
// Environment variables are loaded from .env file
// Make sure to set up your .env file with the actual EmailJS credentials

export const emailjsConfig = {
  // Your EmailJS Service ID from environment variables
  serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_wlqp4rc',
  
  // Your EmailJS Template ID from environment variables
  templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_o4nd67y',
  
  // Your EmailJS Public Key from environment variables
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'aw6G-Zsw-GdZ0tSU9',
  
  // Your email address where messages will be sent
  toEmail: import.meta.env.VITE_EMAILJS_TO_EMAIL || 'himanshusingh1088@gmail.com',
  
  // Check if EmailJS is configured
  isConfigured: function() {
    return this.serviceID && this.serviceID !== 'service_portfolio' && 
           this.templateID && this.templateID !== 'template_contact' && 
           this.publicKey && this.publicKey !== 'YOUR_PUBLIC_KEY';
  }
};

// Email template parameters structure
export const createEmailTemplate = (formData) => ({
  from_name: formData.name,
  from_email: formData.email,
  subject: formData.subject,
  message: formData.message,
  to_email: emailjsConfig.toEmail,
  reply_to: formData.email
});
