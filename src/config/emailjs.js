// EmailJS Configuration
// Environment variables are loaded from .env file
// Make sure to set up your .env file with the actual EmailJS credentials

export const emailjsConfig = {
  // Your EmailJS Service ID from environment variables
  serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio',
  
  // Your EmailJS Template ID from environment variables
  templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact',
  
  // Your EmailJS Public Key from environment variables
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  
  // Your email address where messages will be sent
  toEmail: import.meta.env.VITE_EMAILJS_TO_EMAIL || 'himanshusingh1088@gmail.com',
  
  // Check if EmailJS is configured
  isConfigured: function() {
    return this.serviceID !== 'service_portfolio' && 
           this.templateID !== 'template_contact' && 
           this.publicKey !== 'YOUR_PUBLIC_KEY' &&
           this.serviceID && this.templateID && this.publicKey;
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
