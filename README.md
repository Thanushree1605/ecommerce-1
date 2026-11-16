# ShopSphere — E-commerce Frontend

A responsive React e-commerce frontend created for the **Web Development – Week 05 Minor Project: E-commerce Frontend with Redux/Context**.

## Features

### Required assignment features
- Home page with landing hero, featured products, navigation and search
- Product listing in a responsive grid with image, title, price, category and rating
- Product details page with image gallery, description, price and Add to Cart
- Shopping cart: add, remove, increase/decrease quantity, item count and total price
- Redux Toolkit global state for products, cart, wishlist and preferences
- Search by product name
- Category filtering and price/rating sorting
- Responsive layouts for desktop, tablet and mobile
- Functional components, props, hooks, conditional rendering and event handling
- React Router navigation
- Loading and error UI
- Reusable components and organized folders

### Bonus features
- Wishlist
- Dark mode
- Product pagination
- Login/Register interface (UI demonstration only)
- Cart and wishlist persistence with Local Storage

## Tech stack
- React 18 + Vite
- Redux Toolkit + React Redux
- React Router DOM
- JavaScript (ES6+)
- CSS3
- DummyJSON Products API
- Local Storage

## Getting started

### 1. Install Node.js
Install the current LTS version of Node.js from https://nodejs.org/.

### 2. Extract the ZIP
Extract the `shopsphere-ecommerce.zip` file to a folder.

### 3. Open in VS Code
Open the extracted `shopsphere-ecommerce` folder in VS Code.

### 4. Install dependencies
Open the VS Code terminal in the project folder and run:

```bash
npm install
```

### 5. Start the development server

```bash
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:5173`).

### 6. Create a production build

```bash
npm run build
```

The production-ready files will be created in the `dist` folder.

## Folder structure

```text
shopsphere-ecommerce/
├── public/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Loading.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProductGrid.jsx
│   ├── pages/
│   │   ├── Auth.jsx
│   │   ├── Cart.jsx
│   │   ├── Home.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Shop.jsx
│   │   └── Wishlist.jsx
│   ├── services/
│   │   └── productService.js
│   ├── store/
│   │   ├── cartSlice.js
│   │   ├── preferencesSlice.js
│   │   ├── productsSlice.js
│   │   ├── store.js
│   │   └── wishlistSlice.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Redux Toolkit concepts demonstrated

- **Store configuration:** `src/store/store.js`
- **Slices:** `productsSlice.js`, `cartSlice.js`, `wishlistSlice.js`, `preferencesSlice.js`
- **Actions:** `addToCart`, `removeFromCart`, `increaseQuantity`, `decreaseQuantity`, `toggleWishlist`, `toggleTheme`
- **Reducers:** Reducer logic is defined inside each slice
- **Dispatch:** Components dispatch actions with `useDispatch()`
- **Selectors:** Cart count and total are calculated with selector functions and `useSelector()`
- **Async state:** `createAsyncThunk()` handles product API loading, success and failure

## Data source and demo notes

Product data is loaded from the public DummyJSON endpoint: `https://dummyjson.com/products?limit=100`. If the API cannot be reached, a small local sample catalog is used so the app remains explorable.

This is a **frontend-only student project**. Checkout displays a demo notice; no payment is processed. Login/register are interface demonstrations and do not create real accounts. Do not enter real passwords or payment information.

## Suggested GitHub upload

Create a new GitHub repository named `shopsphere-ecommerce`. In the extracted project folder, open a terminal and run:

```bash
git init
git add .
git commit -m "Build ShopSphere e-commerce frontend"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/shopsphere-ecommerce.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

## Before submission
- Run `npm install`
- Run `npm run dev` and test all pages
- Run `npm run build`
- Check cart quantity and total calculations
- Test search, category filter and sorting
- Test mobile layout
- Push the complete source code to GitHub
- Submit your GitHub repository link in the LMS form
