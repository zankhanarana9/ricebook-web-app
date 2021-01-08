import React from 'react';

const Self = function({headline}) {
    return(
       <div className="row mt-3">
            <div className="card-body" style={{width: "18rem"}}>
            <h5 className="card-title">Username goes here...</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">{headline}</p>
                <button className="card-link">Profile</button>                
            </div>
       </div>
    )
}

export default Self;