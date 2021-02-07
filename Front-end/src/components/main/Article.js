import React from 'react';
import Comment from './Comment';
import ArticleService from '../../services/article-service';
import { connect } from 'react-redux';

class Article extends React.Component {

    componentDidMount() {      
        this.props.getComments(this.props.post.id);
    }

    handleChange = (event) => {
      this.props.handleChange(event.target.value);
    }

    onCommentClick = () => {
      if(this.props.newComment !== ""
        && this.props.newComment !== undefined
      ) {
        this.props.addComment(this.props.post, this.props.newComment);
      }
    }  

    render() {
      return(
        <div className="row mt-3">
          <div className="col">
            <div className="card p-3 text-left">            
             {/* display an image if the post has imageUrl */}
             <h5 className="card-title">
                {
                  this.props.post.createdBy.username
                }
            </h5>
             {
               (this.props.post.image !== undefined 
                && this.props.post.image !== ""
               )               
               &&
               <div>
               <img className="card-img-top" 
                  id="image" 
                  alt=""                    
                  />
                </div>
             }
              {/* display post */}
              <div className="card-body">                
                  <p className="card-text ">
                    {this.props.post.body}
                  </p>  

                {/* add comment button */}
                <div className="input-group mt-1">
                  <input type="text" className="form-control"
                    placeholder="Add a comment" 
                      value={this.props.newComment}
                      onChange={this.handleChange}
                    />
                  <span className="input-group-text">
                    <button className="btn"
                    onClick={this.onCommentClick}>
                      Comment
                  </button>
                  </span>
                </div>    

                {/* display post comments */}                 
                {
                  this.props.comments !== undefined && 
                  this.props.comments.map(comment => 
                    <Comment
                     key={comment.id} 
                       comment = {comment}
                       onLike = {this.props.onLike}
                     />
                  )
                }                                            
              </div>
            </div>
          </div>
        </div>
      )
    }
}


const stateToPropertyMapper =  state => {
  return state.ArticleReducer
}

const actionToPropertyMapper = dispatch => ({
    getComments: (pid) => {
        ArticleService.getComments(pid)
        .then(res => dispatch({
          type: "INITIAL",
          comments: res
        }));
    },

    addComment: (post,comment) => {
      ArticleService.addComment(post,comment)
        .then(res => {            
          dispatch({
            type: "ADD_NEW_COMMENT",
            comment: res
          })
        })
    },

    handleChange: (newComment) => {      
      dispatch({
        type: "HANDLE_COMMENT_CHANGE",
        newComment: newComment
      })
    },
})
export default connect(stateToPropertyMapper, actionToPropertyMapper)(Article);
