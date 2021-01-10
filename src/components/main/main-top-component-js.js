import React from 'react';
import Self from './self-component-js';
import AddPost from './add-post-component-js';
import Followers from './Followers';


const MainTop = ({currentUser, userHeadline, followers, follow, updateHeadline}) => {
    return( 
        <div className="row mt-3" >
            <div className="col-md-3 d-none d-md-block border ms-3">
                <div className="row">
                    <Self 
                        user = {currentUser}
                        headline = {userHeadline}
                        update = {updateHeadline}
                    />
                </div>
            </div>
            
            <div className="col-sm-12 col-md-5 d-block border ms-3">
                <AddPost />
            </div> 
            
            <div className="col-md-3 d-none d-md-block border ms-3" >
                <div className="row m-2 ">
                {
                    followers.map(follower =>{                                    
                        return (
                            <Followers 
                                key={follower.id.toString()}
                                user={follower}
                                follow={follow}
                            />
                        )
                    })   
                }
                </div>
            </div>   
        </div>
    )
}

export default MainTop;