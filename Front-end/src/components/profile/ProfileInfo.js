import React from 'react'
import './profile-component-css.css'
const ProfileInfo = function() {
    return(
        <div className="row text-left">
            <div className="col">
              <form id="formProfile" 
                className="needs-validation" novalidate
                action="./ProfilePage.html" 
                method="GET">
                {/* <!-- First Name--> */}
                <div className="form-row">
                  <div className="form-group col-md-6 mt-2">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" 
                      className="form-control" 
                      id="firstName" 
                      name="firstName"
                      placeholder="First Name" 
                      value="Zankhana" />
                  </div>                  
                </div>

                {/* <!-- Last Name--> */}
                <div className="form-row col-md-6 mt-2">
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" 
                      className="form-control" 
                      id="lastName" 
                      name="lastName"
                      placeholder="Last Name" 
                      value="Rana" />
                  </div>
                </div>

                {/* <!--Email address-->                */}
                <div className="form-group row  mt-2">
                  <label htmlFor="staticEmail" className="col-sm-3 col-form-label">Email Address</label>
                  <div className="col-sm-9">
                    <input type="text" readonly 
                      className="form-control-plaintext"
                      id="staticEmail" 
                      value="email@example.com" />
                  </div>
                </div>
                    
                {/* <!--Date of birth--> */}
                <div className="form-group row  mt-2">
                  <label htmlFor="staticEmail" className="col-sm-3 col-form-label">Date of Birth</label>
                  <div className="col-sm-9">
                    <input type="text" readonly 
                      className="form-control-plaintext" 
                      id="staticEmail" 
                      value="09/04/1993" />
                  </div>
                </div>
                
                {/* <!-- Last updated--> */}
                <div className="form-group row mt-2">
                  <label htmlFor="staticEmail" className="col-sm-3 col-form-label">Last Updated</label>
                  <div className="col-sm-10">
                    <span readonly className="form-control-plaintext" id="timeStamp" name="timeStamp"></span>
                  </div>
                </div>

            
                {/* <!-- submit --> */}
                <div className="form-row col-md-6 mt-2 mb-2">
                  <div className="col-sm-6">
                   <button className="btn btn-primary">
                       Update
                   </button>
                  </div>
               </div>                              

              </form>
            </div>
          </div>
    )
}

export default ProfileInfo;