import React from 'react';

const AddPost = () => {
    return (
        <div>
            <div className="row m-2">
                <div className="col">
                        <img className="img-thumbnail" />                                        
                </div>
                <div className="col">
                    <textarea  
                        style={{width:"100%", height:"100%"}} 
                        value="Something goes here..."
                        onChange={() => console.log("change triggered...")}></textarea>                                    
                </div> 
            </div>
            <div className="row mb-2">
                <div className="col">
                    <button className="btn btn-secondary mt-2">Cancel</button>
                </div>
                <div className="col">
                <button className="btn btn-primary mt-2">Post</button>
                </div>
            </div>
        </div>
    )
}

export default AddPost;