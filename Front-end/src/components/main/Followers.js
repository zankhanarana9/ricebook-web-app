import React from 'react';

class Followers extends React.Component {

   constructor(props) {
       super(props);                   
   }
   
   toggleFollow = () => {
        this.props.updateFollowers(this.props.currentUser, this.props.follower);        
    }
   
   render() {    
        return (            
            <div className="px-auto mt-3 mb-3">
               <div className="row">
                   <div className="col text-left" style={{textAlign: "left"}}>                   
                        <button className="btn">{this.props.follower.username}</button>                        
                   </div>
                   <div className="col">
                   {                      
                       this.props.display &&
                       <button className="btn btn-primary"
                            onClick={this.toggleFollow}>
                                {this.props.follow ? "Unfollow" : "Follow"}
                        </button>
                   }                        
                   </div>
               </div>
            </div>        
        )
   }
}

export default Followers;