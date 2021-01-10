import React from 'react'

const Comment = function({comment}) {
    return (
        <div className="card mt-1" key={comment.id}>
            <div className="card-body">
            <span>{comment.body}
                <a className="like" style={{float:"right"}}>
                <i className="far fa-thumbs-up"></i> 
                </a> 
            </span>
            </div>
        </div>
    )
}

export default Comment;