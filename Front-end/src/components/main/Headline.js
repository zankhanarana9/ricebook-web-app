import React from 'react';

class HeadLine extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            newHeadLine: this.props.headline
        }
    }


    handleChange = (event) => {        
        this.setState({
            newHeadLine: event.target.value
        })
    }    

    postOnClick =() => {
        this.props.updateHeadLine(this.state.newHeadLine);
        this.setState({
            newHeadLine: this.props.headline
        })
    }
    
    render() {
        return (
            <div className="row mt-3">
                <div className="input-group ">
                    <input type="text" className="form-control"
                     placeholder="What's on your mind?" 
                     value={this.state.newHeadLine}                     
                     onChange={this.handleChange}/>
                    <span className="input-group-text" id="basic-addon2">
                        <button className="btn"
                            onClick={this.postOnClick}>
                            Post
                        </button>
                    </span>
                </div>
            </div>
        
        )
    }
}

export default HeadLine;