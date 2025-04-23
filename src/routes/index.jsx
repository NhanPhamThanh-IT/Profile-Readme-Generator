import React, { useState, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Loading from '@components/Loading';
import Page from '@components/Page';

const Layout = React.lazy(() => import('@components/layouts'));
const Home = React.lazy(() => import('@pages/Home'));
const Generator = React.lazy(() => import('@pages/Generator'));
const NotFound = React.lazy(() => import('@pages/NotFound'));

const AppRoutes = () => {
    const [darkMode, setDarkMode] = useState(false);
    const location = useLocation();

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
