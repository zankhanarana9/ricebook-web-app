import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from '../components/auth/LandingPage';
import MainPage from '../components/main/MainPage';
import Profile from '../components/profile/profile-component-js';
import UserService from '../services/user-service';
import ArticleService from '../services/article-service';

class Ricebook extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            isUserLoggedIn : false,            
            users :  [],
            posts : []
        }        
        console.log()
    }

    componentDidMount = async() => {
        let users = await UserService.getUsers();  
        let posts = await ArticleService.getPosts();      
        this.setState({
            users: users,
            posts: posts
        })
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