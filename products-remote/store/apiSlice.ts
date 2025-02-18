import { configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * Similar RTK Query setup for products-remote.
 * Typically you might share logic with the host, 
 * but here's a local config for demonstration.
 */
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_BASE_URL || 'https://fakestoreapi.com'
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<any[], void>({
      query: () => '/products'
    })
  })
});

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware)
});

export const { useGetAllProductsQuery } = productsApi;
