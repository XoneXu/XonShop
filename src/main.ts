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
injectSpeedInsights();
