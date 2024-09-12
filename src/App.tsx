import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Layout from "./components/Layout";
import Listings from "./pages/Listings";
import { useGetProductsQuery } from "./store/slices/apiSlice";
import ProductDetail from "./pages/ProductDetails";
import StoreLocator from "./pages/Stores";
import Blog from "./pages/Blog";

const App: React.FC = () => {
  const {
    data: allProducts,
    error: allProductsError,
    isLoading: allProductsLoading,
  } = useGetProductsQuery({});

  const {
    data: womenProducts,
    error: womenProductsError,
    isLoading: womenProductsLoading,
  } = useGetProductsQuery({ category: "women's clothing" });

  const {
    data: menProducts,
    error: menProductsError,
    isLoading: menProductsLoading,
  } = useGetProductsQuery({ category: "men's clothing" });

  const {
    data: jewelryProducts,
    error: jewelryProductsError,
    isLoading: jewelryProductsLoading,
  } = useGetProductsQuery({ category: "jewelery" });

  const {
    data: electronicsProducts,
    error: electronicsProductsError,
    isLoading: electronicsProductsLoading,
  } = useGetProductsQuery({ category: "electronics" });

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/products"
          element={
            <Listings
              products={allProducts || []}
              isLoading={allProductsLoading}
              error={allProductsError ? "Error loading products" : null}
              title="All Products"
            />
          }
        />
        <Route
          path="/products/category/women's clothing"
          element={
            <Listings
              products={womenProducts || []}
              isLoading={womenProductsLoading}
              error={
                womenProductsError ? "Error loading women's products" : null
              }
              title="Women's Clothing"
            />
          }
        />
        <Route
          path="/products/category/men's clothing"
          element={
            <Listings
              products={menProducts || []}
              isLoading={menProductsLoading}
              error={menProductsError ? "Error loading men's products" : null}
              title="Men's Clothing"
            />
          }
        />

        <Route
          path="/products/category/jewelery"
          element={
            <Listings
              products={jewelryProducts || []}
              isLoading={jewelryProductsLoading}
              error={
                jewelryProductsError ? "Error loading jewelry products" : null
              }
              title="Jewelry"
            />
          }
        />

        <Route
          path="/products/category/electronics"
          element={
            <Listings
              products={electronicsProducts || []}
              isLoading={electronicsProductsLoading}
              error={
                electronicsProductsError
                  ? "Error loading electronics products"
                  : null
              }
              title="Electronics"
            />
          }
        />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/stores" element={<StoreLocator />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  );
};

export default App;
