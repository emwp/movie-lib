import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './utils/styles/global.style';
import Content from './utils/styles/content.style';
import Navbar from './components/UI/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Content>
        <p>Hello</p>
      </Content>
    </Router>
  );
};

export default App;
