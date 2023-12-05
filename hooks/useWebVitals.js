import { useReportWebVitals } from 'next/web-vitals';
import { event } from "nextjs-google-analytics";
import { gaMeasurementId } from '../analytics/constants';

const useWebVitals = () => {
  useReportWebVitals((metric) => {
    console.log({
      name: metric.name,
      rating: metric.rating,
      value: Math.round(metric.value),
    })
    event('WebVitals', {
      category: metric.name,
      label: Math.round(metric.value),
      value: Math.round(metric.value),
      rating: metric.rating,
    }, gaMeasurementId);
  })
};

export default useWebVitals;
