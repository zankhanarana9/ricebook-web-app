import React from 'react';
import Login from './Login.js';
import Register from './Register.js';

class LandingPage extends React.Component {
    
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col bg-light m-5">
                        <Register />
                    </div>
                    <div className="col bg-light m-5" >
                        <Login 
                            isUserLoggedIn = {this.props.isUserLoggedIn}
                        />
                    </div>
                </div>
            </div>
        )
    }    
}

export default LandingPage;