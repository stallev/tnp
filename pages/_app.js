import ReactGA from 'react-ga';

import '../styles/globals.css'

ReactGA.initialize('G-MEFQELMPRT');

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
