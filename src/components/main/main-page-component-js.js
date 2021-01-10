import React from 'react';
import NavBar from './navbar-component-js';
import './main.css';
import MainTop from './main-top-component-js';
import MainContent from './main-content-component-js';

class MainPage extends React.Component {
    constructor(props) {
        super(props);        
        props.init();               
    }
    render() {

        return (
            <div>            
                <NavBar />
                <div className="container-fluid">
                    <MainTop 
                        currentUser = {this.props.UserReducer.currentUser}
                        userHeadline = {this.props.UserReducer.userHeadLine}
                        followers = {this.props.ContentReducer.followers} 
                        updateHeadline = {this.props.updateHeadLine} 
                        updateFollowers={this.props.updateFollower}
                        addPost={this.props.addPost}                                                                          
                    />
                    <MainContent 
                        currentUser = {this.props.UserReducer.currentUser}
                        ContentReducer = {this.props.ContentReducer}  
                        updateFollowers={this.props.updateFollower}                                              
                    />                                
                    </div>
                </div>
        )
    }
}

export default MainPage;