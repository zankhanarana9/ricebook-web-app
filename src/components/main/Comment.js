import React from 'react'

class Comment extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            like: false
        }
    }

    handleClick = () => {
        this.props.onLike(this.props.comment,!this.state.like);
        this.setState(prevState => ({
            like: !prevState.like
        }))
        console.log(this.state.like);

    }
    render() {
        return (
            <div className="card mt-1" key={this.props.comment.id}>
                <div className="card-body">
                <span>{this.props.comment.body}
                    <span style={{float:"right"}}>
                    <a className="like" onClick={this.handleClick} style={{marginRight:"4px"}}>
                        <i className={this.state.like ? "fas fa-thumbs-up" : "far fa-thumbs-up"}></i>                            
                    </a> 
                    <span>{this.props.comment.likes}</span>
                    </span>                    
                </span>
                </div>
            </div>
        )
    }
}

export default Comment;