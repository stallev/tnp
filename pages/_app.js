import Script from 'next/script';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <GoogleAnalytics trackPageViews />
        <Component {...pageProps} />
      </>
    );
}

export default MyApp
