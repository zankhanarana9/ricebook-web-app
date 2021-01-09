import React from 'react';
import NavBar from './NavBar';
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
        this.state = {
            isUserLoggedIn: true,
            defaultHeadLine: "",
            headLine:"Status goes here...",
            follow: false
        }
    }
    updateHeadLine = (newHeadLine) => {
        this.setState({
            headLine: newHeadLine
        });
    }

    render() {

        return (
            <div>
                <NavBar />
                <div className="container-fluid">
                    <MainTop 
                        followers={followers}
                        follow={this.state.follow}                            
                    />
                    <MainContent 
                        followers={followers}
                        follow={this.state.follow} 
                    />                                
                    </div>
                </div>
        )
    }
}

export default MainPage;