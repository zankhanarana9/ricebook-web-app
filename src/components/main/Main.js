import React from 'react'
import Article from './Article';
import Followers from './Followers';
import HeadLine from './Headline';
import './main.css';
import NavBar from './NavBar';
import Self from './Self';

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
class Main extends React.Component {

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
        return(
            <div>
                <NavBar />                
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <Self 
                               headline={this.state.headLine}
                            />
                        </div>
                        <div className="col-7">
                            <HeadLine 
                                headline = ""
                                updateHeadLine = {this.updateHeadLine}/>
                            <Article />
                            <Article />
                            <Article />
                        </div>
                        <div className="col-3">
                            <div className="row mt-3 border">            
                                
                            {
                                followers.map(follower =>{                                    
                                    return (
                                        <Followers 
                                        key={follower.id.toString()}
                                        user={follower}
                                        follow={this.state.follow}
                                    />
                                    )
                                })   
                            }
                            </div>                        
                        </div>
                    </div>
                </div>
                </div>            
        )
    }
}

export default Main;