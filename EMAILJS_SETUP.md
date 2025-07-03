# EmailJS Setup Guide for Portfolio Contact Form

## Overview
Your contact form is now configured to send emails directly to `himanshusingh1088@gmail.com` using EmailJS. Follow these steps to complete the setup.

## 🔧 Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Connect Your Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose **Gmail** (recommended for your Gmail account)
4. Follow the OAuth flow to connect your Gmail account
5. Note down your **Service ID** (something like `service_xxxxxxx`)

### 3. Create Email Template
1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:

```html
Subject: {{subject}} - Portfolio Contact

From: {{from_name}} <{{from_email}}>

Hi Himanshu,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. Save the template and note down your **Template ID** (something like `template_xxxxxxx`)

### 4. Get Your Public Key
1. Go to **Account** → **General** in your EmailJS dashboard
2. Find your **Public Key** (something like `xxxxxxxxxxxxxxx`)

### 5. Update Configuration
1. Open `src/config/emailjs.js`
2. Replace the placeholder values:

```javascript
export const emailjsConfig = {
  // Replace with your actual Service ID
  serviceID: 'service_your_actual_id',
  
  // Replace with your actual Template ID
  templateID: 'template_your_actual_id',
  
  // Replace with your actual Public Key
  publicKey: 'your_actual_public_key',
  
  // This is already set to your email
  toEmail: 'himanshusingh1088@gmail.com'
};
```

## 📧 Email Template Variables

The following variables are available in your email template:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message
- `{{to_email}}` - Your email (himanshusingh1088@gmail.com)
- `{{reply_to}}` - Reply-to address (same as from_email)

## 🚀 Testing

1. After updating the configuration, save the file
2. Visit your portfolio's contact section
3. Fill out the form and submit
4. Check your Gmail inbox for the message
5. Check the browser console for any errors

## 🔒 Security

- Your EmailJS public key is safe to use in frontend code
- EmailJS handles all email authentication securely
- No sensitive credentials are exposed in your code

## 📝 Notes

- EmailJS free plan allows 200 emails per month
- Emails may take 1-5 seconds to send
- Failed emails will show an error message with your direct email
- All form submissions are logged in your EmailJS dashboard

## 🆘 Troubleshooting

If emails aren't working:
1. Check browser console for errors
2. Verify all IDs in `emailjs.js` are correct
3. Ensure your Gmail service is properly connected
4. Check your EmailJS dashboard for failed attempts
5. Make sure your email template is published (not draft)

## 🎉 Success!

Once configured, visitors can:
- Send messages directly to your Gmail
- Receive confirmation of successful submission
- See helpful error messages if something goes wrong
- Get your direct email as a fallback option

Your contact form is now fully functional and professional! 🚀
