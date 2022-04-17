import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './pages/publicPages/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Login />
      </div>
    </BrowserRouter>
  );
}

export default App;
