import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <Link  className="btn btn-primary" to="/posts/new">Add a Post</Link>
        Posts list.
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(Posts);
