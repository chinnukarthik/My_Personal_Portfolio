# Portfolio Website

This is a personal portfolio website built with **React.js**, **Tailwind CSS**, and **Framer Motion** to showcase projects and skills. The website includes a responsive navbar, an about me section, project highlights, and contact options.

## Features

- **Responsive Design**: Works well on mobile and desktop screens.
- **Dark Mode Support**: Toggle between light and dark themes.
- **Animated Components**: Smooth transitions using Framer Motion.
- **Contact Form Integration**: Uses EmailJS for message submission.
- **Downloadable Resume**: Provides an option to download the resume.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/chinnukarthik/My_Personal_Portfolio.git
   cd My_Personal_Portfolio
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open `http://localhost:5173/` in your browser.

## Project Structure

```
portfolio/
│── public/              # Static assets
│── src/
│   ├── components/      # UI Components (Navbar, HeroSection, etc.)
│   ├── assets/          # Images and icons
│   ├── context/         # Context API for dark mode
│   ├── styles/          # CSS and Tailwind configurations
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point for rendering the app
│── package.json         # Project dependencies and scripts
│── vite.config.js       # Vite configuration
│── README.md            # Project documentation
```

## Dependencies

```json
{
  "react": "^19.0.0",
  "react-router-dom": "^7.2.0",
  "framer-motion": "^12.4.10",
  "react-icons": "^5.5.0",
  "@emailjs/browser": "^4.4.1",
  "tailwindcss": "^4.0.11"
}
```

## Components Overview

### `Navbar.jsx`

- Implements navigation links and a dark mode toggle.
- Uses Intersection Observer to highlight active sections.

### `Herosection.jsx`

- Displays a hero banner with a profile picture and contact links.
- Provides a resume download button.

### `Aboutme.jsx`

- Shows skills with animated circular progress bars.

### `Projects.jsx`

- Lists recent projects with hover animations.

### `Contact.jsx`

- Includes a contact form powered by **EmailJS**.
- Displays social media and contact information.

## Deployment

To build and deploy the project:

```sh
npm run build
```

This generates optimized production files in the `dist/` directory, which can be deployed on **Netlify**, **Vercel**, or any static hosting service.

## License

This project is open-source under the MIT License.

## Author

**Sesham Kartik** - [LinkedIn](https://www.linkedin.com/in/sesham-karthik-akank1445/) | [GitHub](https://github.com/chinnukarthik)
