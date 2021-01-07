import React from 'react'

const ProfileImage = function() {
    return(
        <div className="row">
            <div className="col">
              <div className="card" style={{width: "18rem"}}>
                <div>
                    <img className="card-img-top rounded-circle profileImage" alt="Card image cap" />
                </div>
                <div className="card-body">
                  <p className="card-text">Status goes here...</p>
                </div>
                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
              </div>
            </div>
          </div>
    )
}

export default ProfileImage;