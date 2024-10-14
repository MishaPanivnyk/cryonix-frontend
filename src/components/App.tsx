import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import MainPage from 'pages/MainPage/MainPage';
import FindBookPage from 'pages/FindBook/FindBook';
import ErrorsPage from 'pages/ErrorsPage/ErrorsPage';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <SharedLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/find" element={<FindBookPage />} />
          <Route path="/error" element={<ErrorsPage />} />
        </Routes>
      </SharedLayout>
    </>
  );
};

export default App;
