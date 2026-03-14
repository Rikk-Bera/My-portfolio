# Rikk Bera — Portfolio

A futuristic dark-themed portfolio built with **React + Vite**.

---

## 📸 Add Your Photo

Replace `src/assets/rikk.jpg` with your actual photo file named **`rikk.jpg`**.
The image renders best at portrait ratio (e.g. 400×500px).

---

## 🚀 Deploy to GitHub Pages (Step-by-Step)

### Step 1 — Install dependencies
```bash
npm install
```

### Step 2 — Test locally
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Step 3 — Build for production
```bash
npm run build
```
This creates a `dist/` folder with the compiled site.

### Step 4 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 5 — Deploy `dist/` to GitHub Pages

**Option A — Using `gh-pages` package (easiest):**
```bash
npm install --save-dev gh-pages
```
Add to `package.json` scripts:
```json
"deploy": "gh-pages -d dist"
```
Then run:
```bash
npm run build
npm run deploy
```
Go to **GitHub → Repo → Settings → Pages → Source → gh-pages branch**. Done!

**Option B — GitHub Actions (auto-deploys on every push):**

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy Portfolio
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```
Push to main — GitHub auto-builds and deploys every time! ✅

---

## 📁 Project Structure

```
rikk-portfolio/
├── src/
│   ├── assets/
│   │   └── rikk.jpg          ← Replace with your photo
│   ├── components/
│   │   ├── Loader/
│   │   ├── Cursor/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Experience/
│   │   ├── Projects/
│   │   ├── Certs/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🛠 Tech Stack
- React 18 + Vite 5
- Pure CSS (no UI library)
- Google Fonts: Syne, Space Mono, DM Sans
