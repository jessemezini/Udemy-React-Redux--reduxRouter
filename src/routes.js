import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Posts from './components/Posts';
import NewPost from './components/NewPost';

export default (
    <Route path="/" component={App}>
      <IndexRoute component={Posts} />
      <Route path="posts/new" component={NewPost} />
    </Route>
);

// Every time using nested routes
// the parent route need {this.props.children}
