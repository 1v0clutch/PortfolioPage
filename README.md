# Portfolio - React Frontend

A modern, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS**. This React version is a pixel-perfect replication of the original vanilla HTML/CSS design located at `/frontend`.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:3001/api/contact
```

### 3. Run Development Server
```bash
npm run dev
```

The app will start on **http://localhost:5173**

### 4. Build for Production
```bash
npm run build
```

Production files will be in the `dist/` folder.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
frontend-react/
├── public/
│   ├── assets/
│   │   └── images/          # Portfolio images and profile photo
│   ├── favicon.svg          # Favicon
│   └── icons.svg            # Icon sprites
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar with mobile menu
│   │   ├── Hero.jsx         # Hero section with animated intro
│   │   ├── About.jsx        # About section
│   │   ├── Portfolio.jsx    # Portfolio section with projects
│   │   ├── Contact.jsx      # Contact form with Brevo API
│   │   └── Footer.jsx       # Footer component
│   ├── data/
│   │   └── portfolioData.js # Portfolio projects data
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles and animations
├── .env                     # Environment variables
├── .gitignore               # Git ignore rules
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── vite.config.js           # Vite configuration
```

---

## 🎨 Features

### 🖼️ Sections
- **Hero** - Animated introduction with floating particles and pulse effects
- **About** - Personal introduction with profile photo
- **Portfolio** - Interactive project showcase with category filtering
  - Web Development
  - Digital Art
  - Game Development
- **Contact** - Working contact form integrated with Brevo API
- **Footer** - Simple footer with current year

### ✨ Animations
- Scroll-triggered fade-in animations using Intersection Observer API
- Floating particles in hero section
- Pulsing blob background effect
- Avatar ring pulse animation
- Smooth section transitions
- Hover effects on all interactive elements

### 📱 Responsive Design
- Desktop-first design (1920px+)
- Tablet optimized (768px - 900px)
- Mobile friendly (< 768px)
- Hamburger menu for mobile navigation
- Touch-friendly buttons and links

### 🎯 Interactive Elements
- Smooth scroll navigation
- Active nav link highlighting
- Category-based project filtering
- Project selection with details panel
- Form validation and submission feedback
- Mobile menu toggle

---

## 🔧 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library for component-based architecture |
| **Vite** | Fast build tool and dev server |
| **Tailwind CSS** | Utility-first CSS framework |
| **PostCSS** | CSS processing |
| **Brevo API** | Email service for contact form |

---

## 🌐 Backend Integration

This frontend connects to the backend API at `/backend-new`.

### API Endpoint
```javascript
POST /api/contact
```

### Request Format
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'd like to discuss..."
}
```

### Environment Variable
Update `.env` with your backend URL:
```env
# Local development
VITE_API_URL=http://localhost:3001/api/contact

# Production
VITE_API_URL=https://your-backend.onrender.com/api/contact
```

---

## 📝 Portfolio Data Management

Edit portfolio projects in `src/data/portfolioData.js`:

```javascript
export const portfolioData = {
  'web-dev': {
    title: 'Web Development',
    projects: [
      {
        name: 'Project Name',
        preview: 'Short description',
        description: 'Detailed description...',
        image: '/assets/images/project.jpg',
        tech: ['React', 'Node.js', 'MongoDB'],
        link: 'https://project-url.com'
      }
    ]
  }
};
```

### Adding New Projects
1. Add project images to `public/assets/images/`
2. Update `portfolioData.js` with new project details
3. Project will automatically appear in the portfolio

### Adding New Categories
1. Add new category object to `portfolioData`
2. Add category button in `Portfolio.jsx`
3. Use emoji icon for visual representation

---

## 🎨 Design System

### Colors
```css
--bg:        #0f172a  /* Background */
--bg-card:   #1e293b  /* Card backgrounds */
--bg-hover:  #263347  /* Hover states */
--accent:    #38bdf8  /* Primary accent (sky blue) */
--accent-2:  #818cf8  /* Secondary accent (indigo) */
--text:      #e2e8f0  /* Primary text */
--muted:     #94a3b8  /* Secondary text */
--border:    rgba(255,255,255,0.07)  /* Border color */
```

### Typography
- **Font Family:** Inter (Google Fonts)
- **Headings:** 700-800 weight
- **Body:** 400-500 weight
- **Labels:** 600 weight

### Spacing
- **Navbar Height:** 72px
- **Section Padding:** 8% horizontal, 60-80px vertical
- **Border Radius:** 10-14px
- **Gap/Spacing:** 8px, 16px, 24px, 32px multiples

---

## 🚢 Deployment

> **📖 For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](../DEPLOYMENT_GUIDE.md)**

### Quick Deploy to Vercel (Recommended)

1. **Build and test locally first:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Deploy via Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Set **Root Directory:** `frontend-react`
   - Add environment variable:
     - `VITE_API_URL` = `https://your-backend.onrender.com/api/contact`
   - Deploy

3. **Deploy via Vercel CLI:**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

### Important Environment Variables

**Local Development:**
```env
VITE_API_URL=http://localhost:3001/api/contact
```

**Production:**
```env
VITE_API_URL=https://your-backend.onrender.com/api/contact
```

> ⚠️ **Note:** Update `VITE_API_URL` after deploying the backend. See the [DEPLOYMENT_GUIDE.md](../DEPLOYMENT_GUIDE.md) for complete step-by-step instructions.

---

## 🔍 Differences from Original

This React version maintains **pixel-perfect** design fidelity with the original HTML version while adding:

### Improvements
- Component-based architecture for better maintainability
- React hooks for state management
- Better code organization and reusability
- Improved performance with Vite
- Tailwind CSS for utility-first styling
- Environment variable management

### Preserved Features
- Exact same visual design and layout
- All animations and transitions
- Mobile responsiveness
- Intersection Observer animations
- Smooth scroll navigation
- Contact form functionality

---

## 🛠️ Development

### Hot Module Replacement (HMR)
Vite provides instant HMR - changes reflect immediately without full page reload.

### Component Development
```bash
# Run dev server
npm run dev

# Edit components in src/components/
# Changes appear instantly
```

### Styling
- Use Tailwind utility classes for most styling
- Custom animations in `index.css`
- Theme colors in `tailwind.config.js`

---

## 📧 Contact Form Setup

### Prerequisites
1. Backend server running at `http://localhost:3001`
2. Brevo API key configured in backend
3. Sender email verified in Brevo dashboard

### Testing Contact Form
1. Start backend: `cd backend-new && npm run dev`
2. Start frontend: `npm run dev`
3. Fill out contact form
4. Check console for API responses
5. Check email inbox for received messages

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Vite uses port 5173 by default
# Change port in vite.config.js if needed
```

### Contact Form Not Working
- Check backend is running on port 3001
- Verify `VITE_API_URL` in `.env`
- Check browser console for errors
- Verify CORS settings in backend

### Images Not Loading
- Images should be in `public/assets/images/`
- Use path `/assets/images/filename.jpg` in code
- Check file names match exactly (case-sensitive)

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules dist .vite
npm install
npm run build
```

---

## 📝 License

MIT License - Created by Steven Clyde E. Maranan

---

## 🙏 Credits

- **Design & Development:** Steven Clyde E. Maranan
- **Font:** Inter (Google Fonts)
- **Icons:** Custom SVG icons
- **Email Service:** Brevo API
- **Hosting:** Vercel / Netlify

---

For backend setup, see `/backend-new/README.md`
