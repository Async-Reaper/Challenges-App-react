import styled from '@emotion/styled';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Sidebar from './components/UI/Sidebar/Sidebar';
import Login from './pages/publicPages/Login';
import Signup from './pages/publicPages/Signup';

const AppWrapper = styled('div')({
  display: 'grid',
  gridTemplateColumns: '13% 1fr',
  gridTemplateRows: '1fr',
})

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Sidebar />
        <Signup />
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
