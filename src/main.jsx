/**
 * Entry point for the React application.
 * 
 * This file initializes the root React component tree and renders it to the DOM.
 * It wraps the application with multiple context providers:
 * - React.StrictMode: Helps identify potential problems in an application.
 * - HelmetProvider: Provides context for react-helmet-async to manage document head.
 * - BrowserRouter: Enables client-side routing using React Router.
 * - ThemeProvider: Applies the Material-UI theme across the app.
 * - CssBaseline: Resets CSS for consistency across browsers.
 * 
 * Imports:
 * - StrictMode: React component that activates additional checks and warnings.
 * - createRoot: ReactDOM API for concurrent rendering.
 * - BrowserRouter: React Router component for navigation.
 * - ThemeProvider: Material-UI component to inject the custom theme.
 * - CssBaseline: MUI component that applies baseline CSS styles.
 * - HelmetProvider: Context provider for managing document head with react-helmet-async.
 * - App: Main application component.
 * - theme: Custom Material-UI theme object.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import theme from '@styles/theme';

// Render the root application wrapped in all necessary providers.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
