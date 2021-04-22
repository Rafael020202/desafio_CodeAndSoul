import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Global from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <Routes/>
    <Global />
  </Router>
)

export default App;
