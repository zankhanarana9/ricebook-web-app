import React from 'react';

class Self extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newHeadLine: ""
        }
    }


   handleChange = (event) => {
      this.setState({
          newHeadLine: event.target.value
      })
   }

   updateHeadline = () => {
        this.props.updateHeadline(this.state.newHeadLine)
        this.setState({
            newHeadLine: ""
        })
   }

   render() {
    return(        
        <div className="row mt-3">                  
             <div className="card-body " style={{width: "18rem"}}>
                 <h5 className="card-title">{this.props.user.name}</h5>
                 <h6 className="card-subtitle mb-2 text-muted">{this.props.user.headline}</h6>                
 
                 <div className="input-group">
                     <input type="text" className="form-control"
                         placeholder="What's on your mind?" 
                         value={this.state.newHeadLine}    
                         onChange={this.handleChange}                    
                     />
                     <span className="input-group-text" id="basic-addon2">
                         <button className="btn"
                            onClick = {() => {                                
                                this.updateHeadline()
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

export default Self;