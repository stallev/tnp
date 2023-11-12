import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: process.env.REACT_APP_GOOGLE_TAG_MANAGER_ID,
    });

    ReactGA.initialize(process.env.REACT_APP_GOOGLE_TAG_MANAGER_ID);
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
