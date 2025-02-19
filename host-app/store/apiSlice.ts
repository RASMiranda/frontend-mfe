import { configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * Represents a product retrieved from the Fake Store API.
 * Adjust fields as needed to match the actual API response.
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
 * RTK Query API for the Fake Store.
 * Base URL defaults to https://fakestoreapi.com if not supplied via env vars.
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
 * Primary Redux store configuration.
 * Includes the productsApi reducer and middleware for RTK Query.
 */
export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

// Export the auto-generated hook for the `getAllProducts` query
export const { useGetAllProductsQuery } = productsApi;

/**
 * Optional: Export types for RootState and AppDispatch
 * for usage in typed hooks or components.
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
