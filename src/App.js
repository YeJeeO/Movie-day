import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';

function App({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Main />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default App;