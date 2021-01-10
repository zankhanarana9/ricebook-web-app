import React from 'react';
import NavBar from './navbar-component-js';
import './main.css';
import MainTop from './main-top-component-js';
import MainContent from './main-content-component-js';


const followers = [
    {
        name: "John Doe",
        id: 123
    },
    {
        name: "Harvey Spectre",
        id: 234
    },
    {
        name: "Mike Ross",
        id: 345
    }
]

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        props.init();
    }

    // updateHeadLine = (newHeadLine) => {
    //     this.setState({
    //         headLine: newHeadLine
    //     });
    // }
    render() {

        return (
            <div>            
                <NavBar />
                <div className="container-fluid">
                    <MainTop 
                        currentUser = {this.props.currentUser}
                        userHeadline = {this.props.userHeadLine}
                        followers = {this.props.followers} 
                        updateHeadline = {this.props.updateHeadLine}                       
                        follow={false}                            
                    />
                    <MainContent 
                        posts = {this.props.posts}
                        followers={followers}
                        follow={false} 
                    />                                
                    </div>
                </div>
        )
    }
}

export default MainPage;