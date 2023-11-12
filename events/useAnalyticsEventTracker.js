import ReactGA from 'react-ga';

export const useAnalyticsEventTracker = (params) => {
  const generalParams = {
    action: 'custom_user_event',
  };
  
  return ReactGA.event({ ...generalParams, ...params });
};