import React from 'react';

const HeadLine = function() {
    return (
        <div className="row mt-3">
            <div className="input-group ">
                <input type="text" className="form-control" placeholder="What's on your mind?" />
                <span class="input-group-text" id="basic-addon2">
                    <button class="btn">
                        Post
                    </button>
                </span>
            </div>
        </div>
    
    )
}

export default HeadLine;