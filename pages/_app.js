import App from '../components/App'
import '../pages/index.css';

export default function MyApp({ Component, pageProps }) {
  return <><App/><Component {...pageProps} />
   </>;
}