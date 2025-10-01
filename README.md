# shopping_cart
A minimal e-commerce site with product listing, add-to-cart, and checkout functionality. Built with React, TailwindCSS, and MongoDB. Features persistent cart using localStorage, dynamic quantity management, and a real-world styled UI.


# Minimal E-commerce Shopping Cart

A minimal e-commerce web application to list products and manage a shopping cart. Built to showcase full-stack development skills with real-world features.

## Features
- **Product Listing:** Fetch and display products in a responsive grid.
- **Add to Cart:** Users can add products to the cart.
- **Cart Management:** Increase/decrease item quantity, remove items.
- **Persistent Cart:** Cart contents are saved in `localStorage` across sessions.
- **Checkout:** Sends order details to backend and stores them in MongoDB.
- **Real-world UI:** Styled with TailwindCSS and TailwindUI for a professional look.

## Tech Stack
- **Frontend:** React, TailwindCSS, TailwindUI
- **Backend:** Node.js, Express, MongoDB
- **State Management:** React Context API

Note: Any OOP language is accepted; however, JavaScript/TypeScript is preferred. Some model files are implemented in JS/JSX.

## Additional Enhancements
- Full CRUD on cart items (update quantity, remove items)
- Responsive design with TailwindUI components
- Real database integration (MongoDB) instead of hardcoded data

## Usage
1. Clone the repo: `git clone https://github.com/Adi7558/shopping_cart`
2. Install dependencies:
   - Backend: `npm install` in `/backend`
   - Frontend: `npm install` in `/frontend`
3. Start servers:
   - Backend: `npm run dev` (port 8000)
   - Frontend: `npm start` (port 3000)
4. Open `http://localhost:3000` to view the app.

## Goal
A user can view products, manage a cart, and simulate checkout while demonstrating clean frontend-backend separation and real-world UI/UX.

