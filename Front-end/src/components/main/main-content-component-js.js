import React from 'react';
import Article from './Article';
import HeadLine from './Headline';
import Followers from './Followers';
import { connect } from 'react-redux';
import ArticleService from '../../services/article-service';

class MainContent extends React.Component {

    render() {
        return (
            <div className="row mt-2">
            <div className="col-md-3 d-none d-md-block  ms-3">                                           
                {/* {
                    ContentReducer.friends.length > 0 ? 
                    (<div className="row m-2 border">   
                        <h5 className="text-left mt-1">Friends</h5>                     
                    {
                        ContentReducer.friends.map(friend =>                                    
                            <Followers 
                                key={friend.id.toString()}
                                follower={friend}
                                follow={friend.follow}
                                currentUser = {currentUser}
                                updateFollowers = {updateFollowers}
                                display={!friend.follow}
                            />
                        )   
                    }                            
                    </div> ) :
                    <div className="row m-2 border">
                        <h5 className="text-left mt-1">Friends</h5> 
                        <h6 className="text-left mt-1">
                            Hurray! You're following all your friends!
                        </h6>
                    </div>
                }                              */}
            </div>
            <div className="col-sm-12 col-md-8 d-block ms-3">                
                    <div className="row">
                        <div className="col-8">
                        {/* <HeadLine 
                            headline = ""
                            updateHeadLine = {() => alert("I have to update!")}/>     */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">                                                                 
                            {
                                this.props.posts.map(post =>                                     
                                    <Article key = {post.id}
                                        post =  {post}    
                                        addComment = {this.props.addComment}                                           
                                        onLike={this.props.likeComment}                             
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

export default MainContent;