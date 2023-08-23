import logo from './logo.svg';
import './App.css';
import { Reset } from 'styled-reset';
import { Global } from '@emotion/react';
import * as S from './styles/common';
import MainLayout from './components/MainLayout/MainLayout';
import { Route, Routes } from 'react-router-dom';
import MyProject from './pages/MyProject/MyProject';
import SharedProject from './pages/SharedProject/SharedProject';

function App() {
  return (
    <>
      <Reset />
      <Global styles={S.GSCommon}></Global>
      <MainLayout>
        <Routes>
          <Route path='/myproject' element={<MyProject/>}/>
          <Route path='/sharedproject' element={<SharedProject/>}/>
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
