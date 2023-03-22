import App from '../components/App'

export default function MyApp({ Component, pageProps }) {
  return <><App/><Component {...pageProps} />
   </>;
}