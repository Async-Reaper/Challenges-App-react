import styled from '@emotion/styled';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoute from './components/AppRoute';
import Sidebar from './components/UI/Sidebar/Sidebar';

const AppWrapper = styled('div')({
  display: 'flex'
})

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Sidebar />
        <AppRoute/>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
