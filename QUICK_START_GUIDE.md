# Quick Start Guide - Portfolio Website

## 🚀 How to Start Your Portfolio Project

### **Step 1: Navigate to Your Project**
```bash
cd portfolio-app
```

### **Step 2: Install Dependencies**
```bash
npm install
```

### **Step 3: Start the Development Server**
```bash
npm start
```

### **Step 4: Open in Browser**
Your portfolio will open at: `http://localhost:3000`

---

## 📝 Quick Customization

### **Update Your Information**
Edit `src/data/portfolio.json`:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your.email@example.com",
    "about": "Your professional description..."
  }
}
```

### **Add Your Projects**
```json
{
  "projects": [
    {
      "id": 1,
      "title": "Your Project",
      "description": "Project description",
      "image": "project-image-url",
      "technologies": ["React", "Node.js"],
      "github": "github-link",
      "live": "live-demo-link",
      "featured": true
    }
  ]
}
```

### **Update Skills**
```json
{
  "skills": {
    "frontend": [
      {
        "name": "Your Skill",
        "level": 90,
        "icon": "🎨"
      }
    ]
  }
}
```

---

## 🔧 Essential Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |
| `npm install` | Install dependencies |

---

## 📁 Important Files

| File | Purpose |
|------|---------|
| `src/data/portfolio.json` | Your portfolio data |
| `src/components/` | React components |
| `public/index.html` | Main HTML file |
| `package.json` | Dependencies and scripts |

---

## 🆘 Common Issues

### **Port 3000 Already in Use**
```bash
# Use different port
PORT=3001 npm start
```

### **Module Not Found**
```bash
# Reinstall dependencies
npm install
```

### **Build Errors**
```bash
# Clear cache
npm run build -- --reset-cache
```

---

## 💡 Tips

- ✅ Always backup your `portfolio.json` file
- ✅ Test changes before deploying
- ✅ Keep your dependencies updated
- ✅ Use meaningful commit messages

---

**Your portfolio is ready to use! 🎉** 