# E-commerce App
## Overview
This project is an eCommerce application where users can browse and add products to their cart. The app is fully responsive and uses Redux for state management. The data for the products is fetched from the FakeStore API, and the cart state is persisted using redux-persist.

## Features
* Product Listing: Users can view a list of products fetched from FakeStore API.
* Product Details: Each product has a detailed view with additional information.
* Add to Cart: Users can add items to their cart and update item quantities.
* Cart Summary: Users can view a summary of the items in their cart, with the ability to remove or adjust quantities.
* State Management: The app uses Redux for managing the global state of the cart.
* State Persistence: The cart state is persisted across sessions using redux-persist.
* Responsive Design: Styled using Tailwind CSS for fully responsive layouts.
## Tech Stack
* React: JavaScript library for building user interfaces.
* Redux: For state management.
* Tailwind CSS: For styling and ensuring responsiveness.
* FakeStore API: The source of product data.
## Endpoints:
* GET /products: Fetch all products.
* GET /products/:id:Fetch a specific product by ID.
* GET /products/category/men's clothing: Fetch all products of men category
* GET /products/category/women's clothing: Fetch all products of women category
* GET /produts/category/jewelery: Fetch all products of jewelery category
* GET /produts/category/electronics: Fetch all products of electronics category
* GET /about: Renders about page 

## Installation
* Clone the repository: git clone https://github.com/Dimple278/Fashion_E-Commerce
* Navigate to the project directory
* Install dependencies: npm install
* Start the development server: npm run dev
* Open the app in your browser: http://localhost:3000


