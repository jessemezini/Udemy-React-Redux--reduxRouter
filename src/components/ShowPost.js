import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router';

class ShowPost extends Component {
  constructor() {
    super();

    this.onDeletePost = this.onDeletePost.bind(this);
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeletePost() {
    this.props.deletePost(this.props.params.id);
  }

  onDeletePostSubmit(props) {
    this.props.deletePost(props)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Link to="/">Back to posts list.</Link>
        <button className="btn btn-danger pull-xs-right" onClick={this.onDeletePost}>Detele post</button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

ShowPost.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(ShowPost);
