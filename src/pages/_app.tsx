import 'styles/tailwind.css';
import 'styles/main.css';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { UIRoot } from 'components/UI/UIRoot';

const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps, router }) {
  const Layout = Component.Layout || Noop;
  return (
    <>
      <Provider store={store}>
        <Layout>
          <UIRoot />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
