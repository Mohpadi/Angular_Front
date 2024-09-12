import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { provideHttpClient } from '@angular/common/http';  // Utilisez provideHttpClient pour HttpClient
// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     provideHttpClient(),  // Ajoutez ici le support pour HttpClient
//     provideClientHydration(),
//     provideAnimationsAsync()
//   ]
// };
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),  // Active le support pour fetch
    provideClientHydration(),
    provideAnimationsAsync()
  ]
};
