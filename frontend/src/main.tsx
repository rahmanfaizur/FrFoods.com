import { StrictMode } from 'react'; 
// Importing React's StrictMode, which helps detect potential issues by adding extra checks in the development mode

import { createRoot } from 'react-dom/client'; 
// Importing 'createRoot' from 'react-dom/client' to render the React app into the DOM

import './index.css'; // Importing the global CSS file for styling the entire app

import { BrowserRouter as Router } from "react-router-dom"; 
// Importing BrowserRouter from 'react-router-dom' and aliasing it as 'Router' for easier usage in the app
// BrowserRouter provides the routing context for the application

import AppRoutes from './AppRoutes'; 
// Importing the AppRoutes component which defines the routes (or pages) of the application

import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate'; 
// Importing custom Auth0Provider that likely wraps the Auth0 authentication logic and integrates navigation with the provider

// Render the application into the root element of the DOM
createRoot(document.getElementById('root')!).render( // '!' is a TypeScript non-null assertion operator, ensuring that 'root' exists
  <StrictMode> {/* Enabling StrictMode for development warnings and checks */}
    <Router> {/* Wrapping the app in the Router to enable routing */}
      <Auth0ProviderWithNavigate> 
        {/* Wrapping routes in Auth0Provider to handle authentication and navigation logic */}
        <AppRoutes /> {/* Rendering the application's routes */}
      </Auth0ProviderWithNavigate>
    </Router>
  </StrictMode>
);
