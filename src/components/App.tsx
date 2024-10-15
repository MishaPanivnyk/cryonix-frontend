import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import MainPage from 'pages/MainPage/MainPage';
import FindBookPage from 'pages/FindBook/FindBook';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <SharedLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/find" element={<FindBookPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </SharedLayout>
    </>
  );
};

export default App;
