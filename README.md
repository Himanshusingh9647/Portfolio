# Personal Portfolio

A modern, responsive personal portfolio built with React, Vite, and TailwindCSS. Features smooth animations, clean design, and optimized performance.

## 🚀 Live Demo

[View Portfolio](https://himanshusingh9647.github.io/Portfolio/)

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive across desktop, tablet, and mobile devices
- **Interactive Components**: Animated sections and engaging user interface
- **Optimized Performance**: Fast loading with Vite and efficient styling with TailwindCSS
- **Auto Deployment**: Automatic deployment to GitHub Pages via GitHub Actions

## 🛠️ Technologies

- **React**: Component-based UI library
- **Vite**: Fast and lean development build tool
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **JavaScript (ES6+)**: Modern JavaScript features

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/himanshusingh9647/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be running at [http://localhost:5173](http://localhost:5173/).

## 🏗️ Build

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## 🚀 Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions. The deployment happens automatically when you:

1. Push changes to the `main` branch
2. The GitHub Actions workflow builds the project
3. Deploys the built files to GitHub Pages

### Manual Deployment Setup

If you want to deploy this to your own GitHub Pages:

1. Fork this repository
2. Go to your repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy on every push to main

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── rocket-svgrepo-com.svg
│   └── .nojekyll
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects_new.jsx
│   │   └── Skills_new.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .github/workflows/
│   └── deploy.yml
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

- **Styling**: Modify the `src/index.css` file or add custom Tailwind classes
- **Components**: Edit individual components in the `src/components/` folder
- **Content**: Update your personal information, projects, and skills in the respective components
- **Assets**: Replace images and files in the `src/assets/` folder

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by [Himanshu Singh](https://github.com/himanshusingh9647)
