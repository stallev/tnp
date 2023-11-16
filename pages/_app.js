import Script from 'next/script';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { gaMeasurementId } from '../analytics/constants';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <GoogleAnalytics gaMeasurementId={gaMeasurementId} trackPageViews />
        <Component {...pageProps} />
      </>
    );
}

export default MyApp
