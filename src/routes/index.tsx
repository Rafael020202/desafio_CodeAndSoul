import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PostView from '../pages/Post';
import Posts from '../pages/Posts';

const Routes: React.FC = () => 
  <Switch>
    <Route path='/' exact component={Posts} />
    <Route path='/post/:id' component={PostView} />
  </Switch>

export default Routes;