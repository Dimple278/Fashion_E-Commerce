import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (args) => {
        const { category } = args || {};
        if (category) {
          return `products/category/${encodeURIComponent(category)}`;
        }
        return "products";
      },
    }),
    getCategories: builder.query({
      query: () => "products/categories",
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductByIdQuery,
} = apiSlice;
