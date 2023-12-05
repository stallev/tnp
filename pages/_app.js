import Script from 'next/script';
import { GoogleAnalytics, event } from 'nextjs-google-analytics';
import { gaMeasurementId } from '../analytics/constants';
import '../styles/globals.css'

export function reportWebVitals({ id, name, label, value }) {
  event(name, {
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value),
    label: id, 
    nonInteraction: true,
  });
}

function MyApp({ Component, pageProps }) {
  return (
      <>
        <GoogleAnalytics gaMeasurementId={gaMeasurementId} trackPageViews />
        <Component {...pageProps} />
      </>
    );
}

export default MyApp
