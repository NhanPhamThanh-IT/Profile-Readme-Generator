import React, { useState, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import Generator from '@pages/Generator';
import Layout from '@components/Layout';
import NotFound from '@pages/NotFound';
import Loading from '@components/Loading';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path="/"
          element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        >
          <Route index element={<Home darkMode={darkMode} />} />
          <Route path="generator" element={<Generator darkMode={darkMode} />} />
          <Route path="*" element={<NotFound darkMode={darkMode} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
