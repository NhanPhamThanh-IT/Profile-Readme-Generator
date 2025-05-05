/**
 * Application route configuration component.
 *
 * This component defines the main routing structure of the app using React Router.
 * It includes route-level code splitting with `React.lazy` and `Suspense` to optimize performance.
 * It also manages the dark mode toggle state and passes it to layout and pages.
 * 
 * Features:
 * - Uses `Suspense` with a fallback `Loading` component while lazily loading routes.
 * - Defines three main routes: Home (`/`), Generator (`/generator`), and a fallback for 404 (`*`).
 * - Wraps each page with a `Page` component that sets the document title (via react-helmet-async).
 * - Provides `darkMode` and `toggleDarkMode` as props to components that need theme control.
 *
 * @component
 * @returns {JSX.Element} The set of application routes rendered conditionally.
 */

import React, { useState, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Loading from '@components/Loading';
import Page from '@components/Page';

// Lazy-loaded layout and pages to improve performance via code splitting
const Layout = React.lazy(() => import('@components/layouts'));
const Home = React.lazy(() => import('@pages/Home'));
const Generator = React.lazy(() => import('@pages/Generator'));
const NotFound = React.lazy(() => import('@pages/NotFound'));

const AppRoutes = () => {
    const [darkMode, setDarkMode] = useState(false);
    const location = useLocation();

    /**
     * Toggles the dark mode state between true and false.
     */
    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    }
                >
                    <Route
                        index
                        element={
                            <Page key={location.pathname} title="Home">
                                <Home darkMode={darkMode} />
                            </Page>
                        }
                    />
                    <Route
                        path="generator"
                        element={
                            <Page key={location.pathname} title="Generator">
                                <Generator darkMode={darkMode} />
                            </Page>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <Page key={location.pathname} title="404 - Not Found">
                                <NotFound darkMode={darkMode} />
                            </Page>
                        }
                    />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
