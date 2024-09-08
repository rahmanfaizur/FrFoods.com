// Import necessary modules from Auth0 React SDK
import { Auth0Provider, AppState, User } from "@auth0/auth0-react";
import React from "react";
// Define the expected prop types. In this case, 'children' is of type React.ReactNode.
type Props = {
  children: React.ReactNode;
};

// Define a custom Auth0Provider component that integrates Auth0 with routing
const Auth0ProviderWithNavigate = ({ children }: Props) => {
  // Retrieve Auth0 domain, clientId, and redirectUri from environment variables
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  // Check if any of the required environment variables are missing and throw an error if so
  if (!domain || !clientId || !redirectUri) {
    throw new Error("Unable to initialize Auth! Missing required Auth0 configuration.");
  }

  // Define the callback function that will be executed after successful redirection from Auth0
  const onRedirectCallback = (appState?: AppState, user?: User) => {
    // Log the user object to the console (you can replace this with navigation logic if needed)
    console.log("USER", user);
  };

  // Return the Auth0Provider component with the domain, clientId, and redirectUri passed in
  // The 'children' prop will render any nested components inside Auth0Provider
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

// Export the custom Auth0Provider component for use in other parts of the app
export default Auth0ProviderWithNavigate;