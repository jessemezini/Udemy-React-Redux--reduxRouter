import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Posts from './components/Posts';
import NewPost from './components/NewPost';
import ShowPost from './components/ShowPost';

export default (
    <Route path="/" component={App}>
      <IndexRoute component={Posts} />
      <Route path="posts/new" component={NewPost} />
      <Route path="posts/:id" component={ShowPost} />
    </Route>
);

// Every time using nested routes
// the parent route need {this.props.children}
