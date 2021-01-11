import React from 'react';
import { Redirect } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import {useHistory} from 'react-router-dom';


class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        props.init();       
    }
    
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col bg-light m-5">
                        <Register />
                    </div>
                    <div className="col bg-light m-5" >
                        <Login  
                            {...this.props}                             
                        />
                    </div>
                </div>
            </div>                
        ) 
    }
}


export default LandingPage;