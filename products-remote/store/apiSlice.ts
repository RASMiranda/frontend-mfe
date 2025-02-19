import { configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * Represents a product object from the Fake Store API.
 * Adjust fields as needed to match actual API data.
 */
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

/**
 * RTK Query setup for products-remote.
 * In a real-world scenario, you might share logic with the host application,
 * but this local config demonstrates how to keep remotes self-contained.
 */
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_BASE_URL || 'https://fakestoreapi.com',
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => '/products',
    }),
  }),
});

/**
 * The local Redux store for products-remote,
 * including the productsApi reducer and middleware.
 */
export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

/**
 * Export auto-generated hooks for each endpoint.
 * Here, we only have one: `useGetAllProductsQuery`.
 */
export const { useGetAllProductsQuery } = productsApi;

/**
 * (Optional) Export types for RootState and AppDispatch,
 * which can be used to create typed hooks if needed.
 */
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
