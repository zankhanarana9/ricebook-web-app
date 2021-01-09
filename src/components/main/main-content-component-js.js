import React from 'react';
import Followers from './Followers';
import Article from './Article';
import HeadLine from './Headline';

const MainContent = ({followers, follow}) => {
    return(
        <div className="row mt-2">
            <div className="col-md-3 d-none d-md-block  ms-3">
                <div className="row m-2 border">
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
            <div className="col-sm-12 col-md-8 d-block ms-3">
                    <div className="row">
                        <div className="col-8">
                        <HeadLine 
                            headline = ""
                            updateHeadLine = {() => alert("I have to update!")}/>                                
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <Article />                                        
                        </div>
                    </div>
                </div>                            
        </div>
    )
}

export default MainContent;