// EmailJS Configuration
// You need to replace these values with your actual EmailJS credentials
// Visit https://www.emailjs.com/ to set up your account

export const emailjsConfig = {
  // Your EmailJS Service ID
  serviceID: 'service_portfolio',
  
  // Your EmailJS Template ID
  templateID: 'template_contact',
  
  // Your EmailJS Public Key
  publicKey: 'YOUR_PUBLIC_KEY',
  
  // Your email address where messages will be sent
  toEmail: 'himanshusingh1088@gmail.com'
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
