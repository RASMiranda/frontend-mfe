import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/apiSlice';
// Import the Ant Design reset or default CSS
import 'antd/dist/reset.css';

/**
 * The main application entry point that wraps every page in the Redux Provider.
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
