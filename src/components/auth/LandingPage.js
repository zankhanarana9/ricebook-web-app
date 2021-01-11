import React from 'react';
import { Redirect } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import {useHistory} from 'react-router-dom';



const LandingPage =({login,LoginReducer}) => { 
    const history = useHistory();
    console.log(LoginReducer.isUserLoggedIn);
    function handleLogin() {
        
        login()
            .then(res => {
                console.log(LoginReducer.isUserLoggedIn);
            })
       
        history.push("/main/")
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col bg-light m-5">
                    <Register />
                </div>
                <div className="col bg-light m-5" >
                    <Login                         
                        login={handleLogin}
                    />
                </div>
            </div>
        </div>
    )  
}

export default LandingPage;