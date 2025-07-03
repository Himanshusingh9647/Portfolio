# GitHub Pages Deployment with EmailJS

## 🚀 Setting Up GitHub Repository Secrets

Since your `.env` file is not deployed to GitHub Pages (for security), you need to configure your EmailJS credentials as GitHub repository secrets.

### Step 1: Go to Repository Settings
1. Go to your GitHub repository: `https://github.com/Himanshusingh9647/Portfolio`
2. Click on **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**

### Step 2: Add Repository Secrets
Click **New repository secret** and add each of these secrets:

1. **Name**: `VITE_EMAILJS_SERVICE_ID`
   **Value**: `service_wlqp4rc`

2. **Name**: `VITE_EMAILJS_TEMPLATE_ID`
   **Value**: `template_o4nd67y`

3. **Name**: `VITE_EMAILJS_PUBLIC_KEY`
   **Value**: `aw6G-Zsw-GdZ0tSU9`

4. **Name**: `VITE_EMAILJS_TO_EMAIL`
   **Value**: `himanshusingh1088@gmail.com`

### Step 3: Verify Setup
After adding all secrets:
1. Push any change to trigger a new deployment
2. GitHub Actions will use these secrets during the build
3. Your EmailJS configuration will work on GitHub Pages

### 📋 Current Secrets Needed:
- ✅ VITE_EMAILJS_SERVICE_ID
- ✅ VITE_EMAILJS_TEMPLATE_ID  
- ✅ VITE_EMAILJS_PUBLIC_KEY
- ✅ VITE_EMAILJS_TO_EMAIL

### 🔒 Security Notes:
- Secrets are encrypted and only accessible during GitHub Actions builds
- They won't be visible in logs or to other users
- Your EmailJS credentials remain secure

### 🎯 Result:
Once configured, your contact form will work properly on GitHub Pages without showing the configuration notice.

## 🛠️ Alternative: Hardcode for Public Keys Only

Since EmailJS public keys are safe to expose in frontend code, you could also temporarily hardcode them in the `emailjs.js` file just for the deployed version. However, using GitHub secrets is the more professional approach.
