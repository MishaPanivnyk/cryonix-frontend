import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import MainPage from 'pages/MainPage/MainPage';
import FindBookPage from 'pages/FindBook/FindBook';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <SharedLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/find" element={<FindBookPage />} />
        </Routes>
      </SharedLayout>
    </>
  );
};

export default App;
