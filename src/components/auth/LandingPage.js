import React from 'react';
import Login from './Login.js';
import Register from './Register.js';

const LandingPage = function() {
    return(
        <div className="container">
            <div className="row">
                <div className="col bg-light m-5">
                    <Register />
                </div>
                <div className="col bg-light m-5" >
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default LandingPage;