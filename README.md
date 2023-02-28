# Getting started
```bash
npx create-react-app kes --template typescript
cd kes
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install gh-pages --save-dev
```

In package.json, add the following
```json
"homepage": "https://melvinlecoy.github.io/kes",

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

In tailwind.config.js "content", add the following
```javascript
"./src/**/*.{js,ts,jsx,tsx}",
"./pages/**/*.{js,ts,jsx,tsx}",
"./components/**/*.{js,ts,jsx,tsx}",
```

In src/App.css, replace with the following
```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

```bash
git add .
git commit -m "Msg"
Add remote repo
git push -u origin master
npm run deploy
```
`npm start` to run application