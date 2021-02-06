import React from 'react';
import { connect } from 'react-redux';
import UserService from '../../services/user-service';

class Self extends React.Component {

   componentDidMount() {              
       this.props.getHeadline();
       console.log(this.props);
   }

   handleChange = (event) => {
      this.props.handleChange(event.target.value)
   }
   render() {
    return(
        <div className="row mt-3">          
             <div className="card-body " style={{width: "18rem"}}>
                 <h5 className="card-title">{this.props.user.name}</h5>
                 <h6 className="card-subtitle mb-2 text-muted">{this.props.headline}</h6>                
 
                 <div className="input-group">
                     <input type="text" className="form-control"
                         placeholder="What's on your mind?" 
                         value={this.props.newHeadLine}    
                         onChange={this.handleChange}                    
                     />
                     <span className="input-group-text" id="basic-addon2">
                         <button className="btn"
                            onClick = {() => {                                
                                this.props.update(this.props.newHeadLine);
                            }}>
                             Post
                         </button>
                     </span>
                 </div>                                
             </div>
        </div>
     )
   }
}

const stateToPropertyMapper = (state) => {    
    return state.SelfReducer;
}

const actionToPropertyMapper = (dispatch) => ({
    getHeadline : () => {
        UserService.getCurrentUser().then(res => {
            
            dispatch({
                type: "INITIAL",
                headline: res.headline
            })
        })
    },

    update: (newHeadLine) => { 
        UserService.updateUserHeadline(1, newHeadLine).then(res => {
            dispatch({
                type: "UPDATE_HEADLINE",
                headline: newHeadLine
            });
        })             
    },

    handleChange: (newHeadLine) => {
        dispatch({
            type: "NEW_HEADLINE",
            headline: newHeadLine
        });
    }
});

export default connect(stateToPropertyMapper, actionToPropertyMapper)(Self);