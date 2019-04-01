import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './global.style';
import Navbar from './components/UI/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <h1>Hello</h1>
    </Router>
  );
};

export default App;
