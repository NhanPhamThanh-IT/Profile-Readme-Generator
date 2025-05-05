/**
 * Root component of the React application.
 *
 * This component serves as the top-level component in the component hierarchy.
 * It delegates route-based rendering to the `AppRoutes` component.
 * 
 * Imports:
 * - React: Core React library needed for JSX support.
 * - AppRoutes: Component that defines the application's routing logic.
 *
 * @returns {JSX.Element} The routed component tree based on current URL.
 */

import React from 'react';
import AppRoutes from './routes';

function App() {
  return <AppRoutes />;
}

export default App;
