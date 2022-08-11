import '../styles/globals.css'
import {CartProvider} from '../hooks/useCart';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}

export default MyApp
