import React from 'react';

const Self = function() {
    return(
       <div className="row mt-3">
            <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Username goes here...</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Status goes here...</p>
                <button className="card-link">Profile</button>                
            </div>
        </div>
       </div>
    )
}

export default Self;