import React from 'react';
import Self from './self-component-js';
import AddPost from './add-post-component-js';
import Followers from './Followers';

const MainTop = ({currentUser, userHeadline, followers, updateHeadline,updateFollowers, addPost}) => {
    return( 
        <div className="row mt-3" >
            <div className="col-md-3 d-none d-md-block border ms-3">
                <div className="row">
                    <Self 
                        user = {currentUser}                                                
                    />
                </div>
            </div>
            
            <div className="col-sm-12 col-md-5 d-block border ms-3">
                <AddPost 
                    currentUser= {currentUser}
                    addPost = {addPost}
                />
            </div> 
            
            <div className="col-md-3 d-none d-md-block border ms-3" >
                   
                {/* {
                    followers.length > 0 && 
                    <div className="row m-2 ">
                        <h5 className="mt-1">Following</h5>                     
                        {
                        
                            followers.map(follower =>{                                    
                                return (
                                    <Followers 
                                        key={follower.id.toString()}
                                        follower={follower}
                                        follow={follower.follow}
                                        currentUser = {currentUser}
                                        updateFollowers = {updateFollowers}
                                        display={true}
                                    />
                                )
                            }) 
                        }
                    </div>  
                } */}
                
            </div>   
        </div>
    )
}

export default MainTop;