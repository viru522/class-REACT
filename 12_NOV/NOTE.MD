Component Based Arch (CBA)




# ⚡ React Command Cheat Sheet (2025 Edition)

---

## 🧩 INITIAL SETUP

```bash
# Check Node & npm versions
node -v
npm -v

# Create new React app (Vite - recommended)
npm create vite@latest my-portfolio --template react

# Move into project folder
cd my-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## ⚙️ PROJECT MANAGEMENT

```bash
# Open project in VS Code
code .

# List files in current directory
ls      # (Mac/Linux)
dir     # (Windows)

# Navigate between folders
cd folderName     # Enter folder
cd ..             # Go back one level
```

---

## 📦 DEPENDENCY CONTROL

```bash
# Install a package
npm install package-name

# Install multiple packages
npm install axios react-router-dom framer-motion

# Uninstall a package
npm uninstall package-name

# Install as dev dependency
npm install package-name --save-dev

# Reinstall all (after cloning repo)
npm install
```

---

## 🧰 COMMON PACKAGES

```bash
npm install react-router-dom     # Routing
npm install framer-motion        # Animations
npm install react-icons          # Icons
npm install axios                # API requests
npm install tailwindcss          # Styling
npm install gh-pages --save-dev  # Deploy to GitHub Pages
```

---

## 🚀 DEVELOPMENT & BUILD

```bash
# Start local development server
npm run dev        # (Vite)
npm start          # (Create React App)

# Build production version
npm run build

# Preview production build (Vite)
npm run preview

# Test app (if setup)
npm test
```

---

## 🌐 DEPLOYMENT

### 🔸 GitHub Pages

```bash
npm install gh-pages --save-dev
```

**package.json**

```json
"homepage": "https://<username>.github.io/<repo>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

**Then run:**

```bash
npm run deploy
```

---

### 🔸 Vercel (Recommended)

```bash
npm run build
```

Then:

1. Push to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Import repo → Click **Deploy**

---

## 🔧 GIT SHORTCUTS

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <repo-url>
git push -u origin main
```

---

## 🧠 GLOBAL INSTALLS (Optional)

```bash
npm install -g vite             # Install Vite globally
npm install -g yarn             # Install Yarn globally
yarn create vite my-app --template react
```

---

✅ **Tip:** Prefer Vite for modern React setups — it’s faster, cleaner, and lighter than Create React App.
