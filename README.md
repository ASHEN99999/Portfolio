# Amal Shalinda - Personal Portfolio

A modern, highly responsive, and creatively designed personal portfolio website built with React, Vite, Framer Motion, and Tailwind CSS. 

## 🚀 Features

- **Component-Based Architecture** using React Functional Components & Hooks
- **Dark / Light Theme** toggle with automatic system-preference detection and local storage persistence
- **Performance Optimized** via Vite with minimal bundles
- **Modern UI & Micro-interactions**: Smooth scroll context, glassmorphism aesthetics, dynamic custom cursor, and animated gradient layers
- **Advanced Animations** powered by `framer-motion` for entrance animations, hover states, and staggered list reveals
- **Interactive Portfolio Gallery** with category filtering and custom modal overlays for images and embedded videos
- **Animated Scroll Progress Indicator** pinned securely at the top
- **Deployment-Ready** for continuous deployment to Netlify or Vercel out of the box

## 🛠 Tech Stack

- **React 18** (Vite environment)
- **Tailwind CSS v3** (Utility-first styling, Glassmorphism elements)
- **Framer Motion** (Scroll reveals, modals, interactive cursor)
- **Lucide React** (Modern, clean icon set)
- **EmailJS** integration ready

## 📂 Project Structure

```text
/src
 ├── /assets         - Global assets
 ├── /components     - Reusable components (Navbar, CustomCursor, SectionHeader, etc.)
 ├── /contexts       - React contexts (ThemeContext for Dark/Light mode)
 ├── /sections       - Page sections (Hero, About, Education, Experience, Portfolio, Skills, Blogs, Contact)
 ├── App.jsx         - Main application entry integrating all sections
 ├── index.css       - Global styles, custom scrollbar, and Tailwind directives
```

## 💻 Running Locally

1. Install Dependencies
```bash
npm install
```

2. Start the Development Server
```bash
npm run dev
```

3. Build for Production
```bash
npm run build
```

4. Preview Production Build
```bash
npm run preview
```

## 🎨 Theme Configuration
The Tailwind configurations (`tailwind.config.js`) define root CSS variables enabling fluid transitions between Custom Dark and Light modes.

## ✨ Designed & Built Automatically
*This project was dynamically refactored and modernized to a premium design standard.*
