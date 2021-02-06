import React from 'react';
import NavBar from './navbar-component-js';
import './main.css';
import MainTop from './main-top-component-js';
import MainContent from './main-content-component-js';

class MainPage extends React.Component {    

    componentDidMount () {
        this.props.init();
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
                        updateHeadline = {this.props.updateHeadLine} 
                        updateFollowers={this.props.updateFollower}
                        addPost={this.props.addPost}                                                                          
                    />
                    <MainContent 
                        currentUser = {this.props.currentUser}
                        ContentReducer = {this.props.ContentReducer}  
                        updateFollowers={this.props.updateFollower} 
                        addComment = {this.props.addComment}       
                        likeComment={this.props.likeComment}                                      
                    />                                
                    </div>
                </div>
        )
    }
}

export default MainPage;