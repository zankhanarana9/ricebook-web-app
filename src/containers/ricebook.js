import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from '../components/auth/LandingPage';
import MainPage from '../components/main/MainPage';
import Profile from '../components/profile/Profile';
class Ricebook extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            isUserLoggedIn : false
        }
    }
    render() {
        return(
            <Router>
                <Route path="/" 
                    exact
                    render={() =>
                        <LandingPage 
                            isUserLoggedIn = {this.state.isUserLoggedIn} />
                    }                     
                />                                    
                <Route 
                    path="/main" 
                    render={() =>   <MainPage />}    
                    />                   
                <Route 
                    exact
                    path="/profile"
                    render= {() => <Profile />}    
                />                    
            </Router>
        )
    }
}

export default Ricebook;