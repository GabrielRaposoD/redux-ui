import 'styles/tailwind.css';
import 'styles/main.css';
import { Provider } from 'react-redux';
import store from 'redux/store';

const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps, router }) {
  const Layout = Component.Layout || Noop;
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
