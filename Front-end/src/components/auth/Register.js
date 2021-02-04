import React from 'react';
import { Link } from 'react-router-dom';

const Register = function() {
    return(
        <section id="register">
            <div style={{margin: "0px auto",display:"block" }}>
                <div className="row">
                    <h2 className="display-4 text-center">                                    
                        <small className="text-muted">Register</small>
                    </h2>
                </div>
                <div className="row m-2">
                    <form id="registerForm">
                        <div className="form-group row">
                            <div className="col-lg-6">
                                <div className="mb-3 text-left">
                                    <label htmlFor="firstName" className="form-label">First Name:</label>
                                    <input type="text" 
                                        className="form-control" 
                                        id="firstName" 
                                        name="firstName"
                                        placeholder="John" 
                                        onInvalid={() => console.log('First Name cannot be left blank')}
                                        required />                                                
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name:</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="lastName" 
                                        name="lastName"
                                        placeholder="Doe" 
                                        onInvalid={() => console.log("Last Name cannot be left blank")}
                                        required />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label htmlFor="emailAddress" className="form-label">Email Address: </label>
                                    <input  type="email" 
                                        className="form-control" 
                                        id="emailAddress" 
                                        name="emailAddress"
                                        placeholder="abc@example.com" 
                                        onInvalid={() => console.log("Email Address cannot be left blank")}
                                        required />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label htmlFor="birthDate" className="form-label">Date of Birth: </label>
                                    <input type="date" 
                                        className="form-control" 
                                        id="birthDate" 
                                        name="birthDate"
                                        placeholder="yyyy/mm/dd" 
                                        onInvalid={() => console.log("Date of Birth cannot be left blank")}
                                        required />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label htmlFor="Password" className="form-label">Password: </label>
                                    <input type="password" 
                                        className="form-control" 
                                        id="password" 
                                        name="password"
                                        placeholder="qwec$123" 
                                        onInvalid={() => console.log("Password cannot be left blank")}
                                        required />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label htmlFor="ConfirmPassword" className="form-label">Confirm Password: </label>
                                    <input type="password" 
                                        className="form-control" 
                                        id="confirmPassword" 
                                        name="confirmPassword"
                                        placeholder="qwec$123" 
                                        onInvalid={() => console.log("Confirm Password cannot be left blank")}
                                        required />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-lg-6">
                                <div className="mb-3">                                    
                                    {/* <button className="btn btn-primary">Register</button> */}
                                    <Link to="/main/" className="btn btn-primary">
                                        Register
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">                                    
                                    <input className="btn btn-secondary" type="reset" value="Reset" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register;