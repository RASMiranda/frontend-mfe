import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/apiSlice'; // we export the store from apiSlice or a dedicated store.ts
import 'antd/dist/reset.css'; // or "antd/dist/antd.css" based on your version

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
