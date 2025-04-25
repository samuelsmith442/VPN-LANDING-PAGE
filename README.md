# LaslesVPN Landing Page

![LaslesVPN](/public/images/preview.png)

## Project Overview

A modern, responsive landing page for a VPN service built with React, Vite, and Tailwind CSS. This project showcases a professional design with both light and dark mode functionality, smooth animations, and interactive components.

## Features

- **Dark/Light Mode Toggle** - Seamless switching between themes with localStorage persistence
- **Responsive Design** - Fully responsive layout that works on all devices
- **Interactive Components** - Pricing cards, testimonial slider, and animated sections
- **Smooth Animations** - Scroll-triggered animations using AOS library
- **Modern UI** - Clean and professional interface with attention to detail
- **Optimized Performance** - Built with Vite for fast development and production builds

## Technologies Used

- **React** - Frontend library for building user interfaces
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Swiper** - Modern mobile touch slider for testimonials
- **AOS** - Animate On Scroll library for scroll animations

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/vpn-landing-page.git

# Navigate to the project directory
cd vpn-landing-page

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Project Structure

```
/
├── public/           # Static assets
│   └── images/       # Image files
├── src/              # Source files
│   ├── App.jsx       # Main application component
│   ├── App.css       # Global styles
│   └── index.css     # Tailwind directives
├── .gitignore        # Git ignore file
├── index.html        # HTML entry point
├── package.json      # Project dependencies
├── tailwind.config.js # Tailwind configuration
└── vite.config.js    # Vite configuration
```

## Usage

The site includes several sections:

- **Header** - Navigation with dark mode toggle
- **Hero** - Main call-to-action section
- **Features** - Highlight of VPN features
- **Pricing** - Three-tier pricing structure
- **Global Network** - Map showing server locations
- **Testimonials** - Customer reviews slider
- **Call to Action** - Subscription prompt
- **Footer** - Links and company information

## Customization

The project uses Tailwind CSS, making it easy to customize:

- Edit `tailwind.config.js` to modify the theme, colors, and other design tokens
- Update content in `App.jsx` to change text and images
- Modify dark mode styles by editing the `dark:` variants in the className props

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from various VPN service websites
- Icons and illustrations from public domain sources
