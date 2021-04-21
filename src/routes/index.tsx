import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Post from '../pages/Post';
import Posts from '../pages/Posts';

const Routes: React.FC = () => 
  <Switch>
    <Route path='/' exact component={Posts} />
    <Route path='/post/:id' exact component={Post} />
  </Switch>

export default Routes;