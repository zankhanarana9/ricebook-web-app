import React from 'react';

class Followers extends React.Component {

   constructor(props) {
       super(props);
       this.state={
           follow: this.props.follow
       }
   }
   
   toggleFollow = () => {
        this.setState(function(prevState) {
            return {
                follow: !prevState.follow
            }
        });
    }
   
   render() {    
        return (            
            <div className="px-auto mt-3 mb-3">
               <div className="row">
                   <div className="col text-left" style={{textAlign: "left"}}>
                        <button className="btn">{this.props.user.name}</button>                        
                   </div>
                   <div className="col">
                        <button className="btn btn-primary"
                            onClick={this.toggleFollow}>
                                {this.state.follow ? "Unfollow" : "Follow"}
                        </button>
                   </div>
               </div>
            </div>        
        )
   }
}

export default Followers;