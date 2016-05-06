import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions';
import { Link } from 'react-router';

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.onPostSubmit = this.onPostSubmit.bind(this);
  }

  onPostSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onPostSubmit)}>
        <h3>Add new post</h3>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <p className="text-help">
            {title.touched ? title.error : ''}
          </p>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
            <p className="text-help">
              {categories.touched ? categories.error : ''}
            </p>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea type="text" className="form-control" {...content} />
            <p className="text-help">
              {content.touched ? content.error : ''}
            </p>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="btn btn-default" to="/">Cancel</Link>
      </form>
    );
  }
}

NewPost.contextTypes = {
  router: PropTypes.object
};

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
  }

  if (!values.categories) {
    errors.categories = 'Enter a category';
  }

  if (!values.content) {
    errors.content = 'Enter some content';
  }

  return errors;
}

// connect: first arg is mapStateToProps, second is mapDispatchToProps
// reduxForm: first arg is config, second mapStateToProps and third mapDispatchToProps

export default reduxForm({
  form: 'NewPostForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(NewPost);
