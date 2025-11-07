# Professional Portfolio Website

A beautiful, modern portfolio website built with React.js showcasing skills, projects, and experience. Features a responsive design with smooth animations and professional styling.

## 🚀 Features

- **Modern Design**: Clean, professional UI with glass morphism effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Components**: Hover effects, progress bars, and dynamic content
- **Project Showcase**: Filterable project gallery with detailed information
- **Skills Visualization**: Animated progress bars for skill proficiency
- **Experience Timeline**: Professional work experience timeline
- **Contact Form**: Functional contact form with validation
- **Social Integration**: Links to GitHub, LinkedIn, and Twitter

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **CSS3** - Styling with modern features
- **JSON** - Data storage for portfolio information

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Home.js           # Hero section
│   ├── About.js          # About page
│   ├── Projects.js       # Projects showcase
│   ├── Skills.js         # Skills display
│   ├── Experience.js     # Work experience
│   ├── Contact.js        # Contact form
│   ├── Footer.js         # Footer component
│   └── *.css             # Component styles
├── data/
│   └── portfolio.json    # Portfolio data
├── App.js               # Main app component
├── App.css              # Global styles
└── index.js             # App entry point
```

## 🎨 Design Features

- **Glass Morphism**: Modern glass-like effects with backdrop blur
- **Gradient Backgrounds**: Beautiful gradient color schemes
- **Card-based Layout**: Clean card components with hover effects
- **Typography**: Professional typography with Google Fonts (Inter)
- **Color Scheme**: Purple-blue gradient theme (#667eea to #764ba2)

## 📱 Responsive Design

- **Desktop**: Full-featured layout with side-by-side content
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Mobile-first design with collapsible navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## 📝 Customization

### Updating Portfolio Data

Edit `src/data/portfolio.json` to customize your portfolio:

- **Personal Information**: Name, title, contact details
- **Skills**: Add/modify skills with proficiency levels
- **Projects**: Add your projects with images and descriptions
- **Experience**: Update work experience and achievements
- **Social Links**: Add your social media profiles

### Styling Customization

- **Colors**: Modify the gradient colors in `App.css`
- **Fonts**: Change fonts in the Google Fonts link in `index.html`
- **Layout**: Adjust grid layouts and spacing in component CSS files

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the component to `App.js` routing
3. Create corresponding CSS file
4. Update navigation in `Navbar.js`

## 🎯 Key Components

### Home Component
- Hero section with animated text
- Call-to-action buttons
- Statistics display
- Social media links

### Projects Component
- Filterable project gallery
- Project cards with hover effects
- Technology tags
- Live and GitHub links

### Skills Component
- Categorized skills display
- Animated progress bars
- Skill proficiency levels
- Summary section

### Experience Component
- Timeline layout
- Company information
- Achievement lists
- Technology stacks

### Contact Component
- Contact form with validation
- Contact information display
- Social media integration

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (not recommended)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue in the repository.

---

**Made with ❤️ using React.js**
