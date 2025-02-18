import { configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * RTK Query API for Fake Store
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

// Our store configuration 
export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware)
});

// Typed hooks or standard hooks if needed
export const { useGetAllProductsQuery } = productsApi;
