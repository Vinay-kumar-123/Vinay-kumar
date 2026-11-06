# Vinay Kumar — Software Engineer Portfolio

A modern, production-ready developer portfolio website engineered with Next.js App Router, Tailwind CSS, Framer Motion, and Google Sheets integration via Google Apps Script.

🌐 **Live Demo:** [vinay-kumar-two.vercel.app](https://vinay-kumar-two.vercel.app)  
👤 **GitHub:** [github.com/Vinay-kumar-123](https://github.com/Vinay-kumar-123)  
💼 **LinkedIn:** [linkedin.com/in/vinay-kumar-663975326](https://www.linkedin.com/in/vinay-kumar-663975326)  
⚡ **LeetCode:** [leetcode.com/u/codedbyvinay](https://leetcode.com/u/codedbyvinay/)

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, JavaScript)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) + Custom Brand SVGs
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/)
- **Backend / Storage:** Google Sheets via Google Apps Script Web App
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 Architecture

```text
├── app/
│   ├── api/contact/route.js    # Server-side contact submission proxy
│   ├── globals.css             # Tailwind v4 theme, fonts, custom utilities
│   ├── layout.js               # Metadata, SEO tags, OpenGraph, font imports
│   ├── not-found.js            # 404 error page
│   ├── page.js                 # Landing page composing all sections
│   ├── robots.js               # Dynamic robots.txt
│   └── sitemap.js              # Dynamic sitemap.xml
├── components/
│   ├── layout/
│   │   ├── Navbar.js           # Responsive header with smooth navigation
│   │   └── Footer.js           # Clean minimalist footer with social links
│   ├── sections/
│   │   ├── Hero.js             # Hero presentation, CTA buttons & quick stats
│   │   ├── About.js            # Verified background, education & interests
│   │   ├── Skills.js           # Categorized technical competencies
│   │   ├── Projects.js         # Curated 8 projects with category filtering
│   │   ├── Experience.js       # Experience at HSR Hi-Tech Solutions & education
│   │   └── Contact.js          # Google Sheets integrated contact form
│   └── ui/
│       ├── Button.js           # Reusable button component
│       ├── Icons.js            # Crisp custom brand SVGs (GitHub, LinkedIn, LeetCode)
│       ├── ProjectCard.js      # Card with tech stack tags, status, & links
│       └── SectionHeading.js   # Consistent animated section headings
├── data/
│   ├── experience.js           # Mentorship, coordination & academic data
│   ├── profile.js              # Bio, contacts, links, roles
│   ├── projects.js             # Verified projects with live demo and GitHub URLs
│   └── skills.js               # Languages, frameworks, databases, tools
├── google-apps-script/
│   └── Code.gs                 # Full Apps Script for Google Sheets storage
├── lib/
│   └── utils.js                # Helper functions (cn, formatters)
└── public/
    ├── images/photo.jpg        # Profile image
    └── resume/resume.pdf       # Downloadable resume
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ (tested on Node v22.14.0)
- npm 9+

### 1. Clone & Install

```bash
git clone https://github.com/Vinay-kumar-123/Vinay-kumar.git
cd Vinay-kumar
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root:

```env
# Google Apps Script Web App URL
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec

# Optional: Server-side route URL (if using /api/contact)
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

---

## 📊 Google Sheets Contact Form Setup

1. Open [Google Sheets](https://sheets.new) and create a new spreadsheet named `Portfolio Contacts`.
2. In Row 1, add columns: `Timestamp`, `Name`, `Email`, `Subject`, `Message`.
3. Click **Extensions > Apps Script**.
4. Copy the code from `google-apps-script/Code.gs` into the script editor.
5. Click **Deploy > New deployment**:
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Copy the generated Web App URL and paste it into your `.env.local` and Vercel Environment Variables as `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`.

---

## 🚢 Deploy to Vercel

1. Push your changes to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Add environment variable `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`.
4. Deploy! Next.js App Router will automatically build and optimize the site.

---

## 📄 License

MIT © [Vinay Kumar](https://github.com/Vinay-kumar-123)
