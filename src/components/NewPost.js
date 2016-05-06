import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions';

class NewPost extends Component {
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Add new post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea type="text" className="form-control" {...content} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

// connect: first arg is mapStateToProps, second is mapDispatchToProps
// reduxForm: first arg is config, second mapStateToProps and third mapDispatchToProps

export default reduxForm({
  form: 'NewPostForm',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(NewPost);
