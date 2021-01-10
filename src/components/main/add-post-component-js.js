import React from 'react';

class AddPost extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        }
    }

    handleChange =(event) => {
        this.setState({
            body: event.target.value
        })
    }

    handleClick =() => {
        if(this.state.body !== undefined &&
            this.state.body !== "") {
            let newPost ={
                "id": (new Date()).getTime(),
                "userid": this.props.currentUser.id,
                "image": "",
                "date": new Date(),
                "body":this.state.body,  
                "likes": 0,
                "comments": []
            }
            this.props.addPost(newPost);
            this.setState({
                body: ""
            })
        }
    }

    render() {
        return (
            <div>
                <div className="row m-2">
                    <div className="col">
                            <input type="file" />
                              <img className="img-thumbnail" />                                                                    
                    </div>
                    <div className="col">
                        <textarea  
                            style={{width:"100%", height:"100%"}} 
                            placeholder="Write your post..."
                            value={this.state.body}
                            onChange={this.handleChange}>
                            </textarea>                                    
                    </div> 
                </div>
                <div className="row mb-2">
                    <div className="col">
                        {/* <button  type="reset" className="btn btn-secondary mt-2">
                            Cancel
                        </button> */}
                    </div>
                    <div className="col">
                    <button className="btn btn-primary mt-2"
                        onClick={this.handleClick}
                    >Post</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPost;