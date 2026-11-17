# Experiment No. 11: Create a Web-Based Resume and Deploy it Using GitHub Pages

## Aim
To develop a responsive web-based portfolio and resume using HTML, CSS, JavaScript, and Bootstrap 5, and deploy it online using GitHub Pages.

---

## Overview
This project contains a redesigned, static portfolio website for **Aditya Shah** built with **Bootstrap 5**, styled as a minimal editorial developer portfolio (typeset-document aesthetic: numbered section index, hairline rules, one accent color). All résumé content is authentic, extracted from `resume.pdf`. Two things are clearly marked placeholders in `index.html` and must be replaced by the user: the profile photograph (`profile.jpg`) and the three certification entries.

### Key Sections:
- **Hero / Profile**: Name, intro, photo, CTAs (Download Résumé / Get in touch), and contact links (Navi Mumbai, Email, GitHub, LinkedIn, Portfolio).
- **Career Objective**: One-line statement.
- **Work Experience**:
  - **Tata Advanced Systems Limited (TASL)** — Software Engineering Intern (June 2025 – Feb 2026, Mumbai)
  - **Bytefuse** — Software Engineering Intern (June 2025 – Jan 2026, Remote)
- **Education**:
  - **Shah and Anchor Kutchhi Engineering College** — B.Tech in Computer Engineering (2026 – Present)
  - **Vidyalankar Polytechnic** — Diploma in Computer Engineering (2023 – 2026)
- **Technical Skills**: Languages, Backend & Systems, AI/ML, Frontend, Databases & Caching, DevOps & Cloud.
- **Featured Projects**:
  - **CTS-71** — Naval Combat Training Simulation platform
  - **Kyro** — Self-Hosted PaaS & Deployment Platform
  - **MeetingBot** — AI Meeting Intelligence Engine (1st Place, Industrial Hackathon 2026)
- **Certifications**: Three styled placeholder entries — replace with real certificates (marked with comments in `index.html`).
- **Achievements**: 1st Place Industrial Hackathon 2026, 1st Place Internal Hackathon 2025, National Hackathons.
- **Contact**: Email link plus GitHub, LinkedIn, Portfolio, and Resume PDF.

### Features:
- Dark/light theme toggle persisted in `localStorage` (no flash on load).
- Sticky navbar with active-section highlighting (scrollspy) and a responsive mobile menu.
- Smooth scrolling, working **Download Résumé** button (`resume.pdf`), print stylesheet, reduced-motion support.

---

## File Structure
```text
practicals/EXP-11/
│
├── index.html         # Portfolio markup (dossier-style editorial design)
├── style.css          # Design system (tokens, both themes, print + reduced-motion)
├── script.js          # Theme toggle, mobile nav, scrollspy, footer year
├── profile.jpg        # PLACEHOLDER portrait — replace with your own photograph
├── resume.pdf         # Authentic resume document
└── README.md          # Experiment documentation & deployment steps
```

---

## Deployment Steps (GitHub Pages)

### Step 1: Initialize Git and Commit
```bash
cd "practicals/EXP-11"
git init
git add index.html style.css script.js profile.jpg resume.pdf README.md
git commit -m "feat: redesigned editorial portfolio"
git branch -M main
```

### Step 2: Push to GitHub
```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Navigate to your repository on GitHub &rarr; **Settings** &rarr; **Pages**.
2. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
3. Choose branch: `main`, folder: `/(root)`.
4. Click **Save**.

Your portfolio will be live at:
```text
https://<your-username>.github.io/<repo-name>/
```
