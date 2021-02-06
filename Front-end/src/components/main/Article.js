import React from 'react';
import Comment from './Comment';
import ArticleService from '../../services/article-service';

class Article extends React.Component {

    constructor(props) {
      super(props);
      this.state ={
        newComment: "",
        comments: [] 
      }
    }

    componentDidMount() {
      fetch(`http://localhost:4200/api/posts/${this.props.post.id}/comments`)
        .then(response => response.json())
        .then(res => {
          this.setState({
            comments: res
          });
        });
    }

    handleChange = (event) => {
      this.setState({
        newComment: event.target.value
      })
    }

    onCommentClick = () => {
      if(this.state.newComment !== ""
        && this.state.newComment !== undefined
      ) {
        let newComment ={
            "postid": this.props.post.id,
            "id" : (new Date()).getTime(),
            "userid": 2,
            "date": new Date(),
            "body": this.state.newComment,
            "likes": 0
        }
        this.props.addComment(this.props.post,newComment);
        this.setState({
          newComment: ""
        });
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
                  ArticleService.getPostUser(this.props.post.id).name
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
                      value={this.state.newComment}
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
                  this.state.comments !== undefined && 
                  this.state.comments.map(comment => 
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

export default Article;