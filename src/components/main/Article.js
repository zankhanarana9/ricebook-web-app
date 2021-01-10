import React from 'react';
import Comment from './Comment';
import ArticleService from '../../services/article-service';

class Article extends React.Component {

    render() {
      return(
        <div className="row mt-3">
          <div className="col">
            <div className="card p-3 text-left">            
             {/* display an image if the post has imageUrl */}
             <h5 className="card-title">
                {
                  ArticleService.getPostUser(this.props.post.id)
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
                    placeholder="Add a comment" />
                  <span className="input-group-text">
                    <button className="btn">
                      Comment
                  </button>
                  </span>
                </div>    

                {/* display post comments */}                 
                {
                  this.props.post.comments !== undefined && 
                  this.props.post.comments.map(comment => 
                    <Comment
                     key={comment.id} 
                       comment = {comment}
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