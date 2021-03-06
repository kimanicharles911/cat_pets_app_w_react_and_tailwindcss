# Cat Pets App is an App/Site made with React and TailwindCSS 
[![Netlify Status](https://api.netlify.com/api/v1/badges/25af5b8e-db22-492b-8709-96bc0e77fd18/deploy-status)](https://app.netlify.com/sites/catpetsapp/deploys)
<p align="">
  <img src="./public/images/american-bobtail-screenshot.jpg" width="190" height="370" alt="Cat Pets App">
  <img src="./public/images/nav-screenshot.jpg" width="190" height="370" alt="Cat Pets App">
  <img src="./public/images/bengal-screenshot.png" width="350" height="370" alt="Cat Pets App">
</p>

### Deployed at:

```
catpetsapp.netlify.com
```

### src folder structure
```
src/
  assets/
    main.css
    tailwind.css
  components/
    AmericanComponent.jsx
    JavaneseComponent.jsx
    KhaoComponent.jsx
    MonthBreedComponent.jsx
    NavbarComponent.jsx
    PersianComponent.jsx
    RagaMuffinComponent.jsx
    ScottishComponent.jsx
    SingapuraComponent.jsx
    YorkComponent.jsx
  App.css
  App.js
  index.css
  index.js
```

## Usage

### Install dependencies

```
npm install
npm i json-server
npm i react-router-dom
npm i -D tailwindcss@latest postcss@latest autoprefixer@latest postcss-cli@latest
npx tailwind init tailwind.js --full
npm i @headlessui/react
npm i react-icons
```

### Run React dev server

```
npm run start
```

### Setup its routing for netlify deployment
```
Create a file in the root directory called _redirects
Copy this inside the_redirects file:
  # Redirect with a 301
  /*  /index.html   200
Add this line to the build script line in package.json
  && cp _redirects build/_redirects
```

### To build for production

```
npm run build
```

## How It Was Built

### Create React App

```
npx create-react-app 
```