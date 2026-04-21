# Mudasir Hussain — Portfolio Website
React + Vite portfolio — compatible with Node.js 18+

---

## QUICK START (Run Locally)

Open PowerShell in your portfolio folder, then run these TWO commands:

```
npm install
npm run dev
```

Open your browser at:  http://localhost:5173

That's it — your portfolio is running!

---

## UPDATE YOUR CONTENT

All your personal info, jobs, projects, and skills are in ONE file:

    src/data.js

Open it in any text editor (Notepad, VS Code, etc.) and edit anything.
The site updates automatically while npm run dev is running.

---

## DEPLOY TO GITHUB (Step by Step)

### STEP 1 — Create a GitHub account (if you don't have one)
Go to: https://github.com  →  Sign Up

### STEP 2 — Create a new repository
1. Click the "+" icon (top right) → "New repository"
2. Name it exactly:  mudasir-portfolio
3. Leave it Public (free GitHub Pages works with public repos)
4. Do NOT tick "Add a README file"
5. Click "Create repository"

### STEP 3 — Install Git on Windows
Download from: https://git-scm.com/download/win
Run the installer → keep all defaults → click Next until done
Restart PowerShell after installation.

### STEP 4 — Push your code to GitHub
Run these commands one by one in PowerShell (inside your portfolio folder):

```
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/Mudasirrr/mudasir-portfolio.git
git push -u origin main
```

NOTE: Replace "Mudasirrr" with your actual GitHub username.
GitHub will ask for your username and password (use a Personal Access Token as password).

To create a token: GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic) → Generate New Token → tick "repo" → copy the token and use it as your password.

### STEP 5 — Deploy to GitHub Pages
```
npm run deploy
```

This builds and publishes your site automatically.

### STEP 6 — Enable GitHub Pages
1. Go to your repo on GitHub
2. Click Settings → Pages
3. Under Source, select:  Branch: gh-pages  /  Folder: / (root)
4. Click Save

Your live site will be at:
    https://mudasirrr.github.io/mudasir-portfolio/

Wait 2-5 minutes for it to go live the first time.

---

## UPDATE THE LIVE SITE AFTER CHANGES

After editing src/data.js or any file:
```
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

---

## WANT A CUSTOM DOMAIN? (Optional)

Recommended domain names:
  mudasirhussain.com    (~$12/yr on Namecheap)
  mudasir.dev           (~$12/yr - great for tech roles)
  mudasir.com.au        (~$20/yr - Australian presence)

Buy from: https://www.namecheap.com
Then connect it to GitHub Pages in Settings → Pages → Custom Domain.

---

## FUTURE IMPROVEMENTS
- Add a downloadable CV/Resume button in the hero section
- Add real screenshots to your project cards
- Add a contact form (free at: https://formspree.io)
- Add Google Analytics for visitor tracking
- Add a blog section for industry insights

