```bash
npx create-react-app melvinlecoy.github.io --template typescript
cd melvinlecoy.github.io
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install gh-pages --save-dev
```

In package.json
```json
"homepage": "https://melvinlecoy.github.io/melvinlecoy.github.io",

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

In tailwind.config.js
```javascript
"./src/**/*.{js,ts,jsx,tsx}",
"./pages/**/*.{js,ts,jsx,tsx}",
"./components/**/*.{js,ts,jsx,tsx}",
```

In src/App.css
```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

```bash
git add .
git commit -m "MSG"
Add remote repo
git push -u origin master
npm run deploy
```