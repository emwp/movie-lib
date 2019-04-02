import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import GlobalStyle from './utils/styles/global.style';
import Content from './utils/styles/content.style';
import Navbar from './components/UI/Navbar/Navbar';
import Movies from './components/Movies/Movies';
import Sidebar from './components/UI/Sidebar/Sidebar';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Sidebar />
        <Navbar />
        <Content>
          <Movies />
        </Content>
      </Router>
    </Provider>
  );
};

export default App;
