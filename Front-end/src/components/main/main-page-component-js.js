import React from 'react';
import NavBar from './navbar-component-js';
import './main.css';
import MainTop from './main-top-component-js';
import MainContent from './main-content-component-js';

class MainPage extends React.Component {    

    constructor (props) {
        super(props)
        props.init();        
    }

    render() {
        return (            
            <div>            
                <NavBar 
                    currentUser={this.props.currentUser}
                />            
                <div className="container-fluid">                             
                    <MainTop 
                        currentUser = {this.props.currentUser}
                        userHeadline = {this.props.currentUser.headline}
                        followers = {this.props.followers} 
                        updateHeadline = {this.props.updateHeadline} 
                        updateFollower={this.props.removeFollower}
                        addPost={this.props.addPost}                                                                          
                    />                    
                    <MainContent 
                        posts = {this.props.posts}
                        friends = {this.props.friends}
                        currentUser = {this.props.currentUser}                        
                        addFollower = {this.props.addFollower}                                                                                     
                    />                                
                    </div>
                </div>
        )
    }
}

export default MainPage;