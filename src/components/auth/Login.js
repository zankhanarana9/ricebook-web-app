import React from 'react';

const Login = function() {
    return(
        <section id="login">
             <div style={{margin: "0px auto",display:"block" }}>
                <div className="row">
                    <h2 className="display-4 text-center">                                    
                        <small className="text-muted">Login</small>
                    </h2>
                </div>
                <div className="row">
                    <form id="login">
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <div className="mb-3">
                                    <label htmlFor="loginUsername" className="form-label">User Name (Email):</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="loginUsername" 
                                        placeholder="email@example.com" 
                                        required />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <div className="mb-3">
                                    <label htmlFor="loginPassword" className="form-label">Password:</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="loginPassword" 
                                        placeholder="password" 
                                        required />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                           <div className="col-lg-6">
                            <div className="mb-3">                                    
                                <button className="btn btn-primary">Login</button>
                            </div>
                           </div>
                        </div>
                    </form>
                </div>
             </div>
        </section>
    )

}
export default Login;
