import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions';

class CommentList extends React.Component {

  // on app start, load the data
  componentDidMount() {
    this.props.fetchComments();
  }

  // create a unique div for each comment
  renderList() {
    return this.props.comments.map(comment => {
      return (
        <div className="item" key={comment.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{comment.name}</h2>
              <p>{comment.body}</p>
            </div>
          </div>
        </div>
      );
    })
  }

  render() {
    console.log(this.props.comments)
    return (
      <div className="ui relaxed divided list">
        {this.renderList()}
      </div>
    );
  }
}

// pull in the comments data from the state
const mapStateToProps = (state) => {
  return { comments: state.comments };
}

export default connect(
  mapStateToProps,
  {fetchComments}
) (CommentList);