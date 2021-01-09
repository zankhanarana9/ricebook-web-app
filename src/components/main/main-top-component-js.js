import React from 'react';
import Self from './Self';
import AddPost from './add-post-component-js';
import Followers from './Followers';


const MainTop = ({followers, follow}) => {
    return( 
        <div className="row mt-3" >
            <div className="col-md-3 d-none d-md-block border ms-3">
                <div className="row">
                    <Self />
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