import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { inject as injectVercelAnalytics } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));

// Initialize Vercel Analytics
injectVercelAnalytics({
  mode: 'auto',
  debug: false,
});

// Initialize Vercel Speed Insights
// This tracks Core Web Vitals and performance metrics
// Documentation: https://vercel.com/docs/speed-insights
injectSpeedInsights({
  // Enable debug mode in development for viewing events in console
  debug: false,
  // Sample rate: 1.0 means 100% of events are sent (adjust to reduce costs if needed)
  sampleRate: 1.0,
});
