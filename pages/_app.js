import '../styles/globals.css'
import {CartProvider} from '../hooks/useCart';

function MyApp({ Component, pageProps }) {
  return <CartProvider><Component {...pageProps} /></CartProvider>
}

export default MyApp
