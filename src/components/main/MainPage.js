import React from 'react';
import NavBar from './NavBar';
import Self from './Self';
import Followers from './Followers';
import Article from './Article';
import HeadLine from './Headline';
import './main.css';

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
                    <div className="row mt-3" >
                        <div className="col-md-2 d-none d-md-block border ms-3">
                            <div className="row">
                                <Self />
                            </div>
                        </div>
                        
                        <div className="col-sm-12 col-md-6 d-block border ms-3">
                            <div className="row m-2">
                                <div className="col">
                                        <img className="img-thumbnail" />                                        
                                </div>
                                <div className="col">
                                    <textarea  
                                        style={{width:"100%", height:"100%"}} 
                                        value="Something goes here..."
                                        onChange={() => console.log("change triggered...")}></textarea>                                    
                                </div> 
                            </div>
                            <div className="row mb-2">
                                <div className="col">
                                    <button className="btn btn-secondary mt-2">Cancel</button>
                                </div>
                                <div className="col">
                                <button className="btn btn-primary mt-2">Post</button>
                                </div>
                            </div>
                        </div> 
                        
                        <div className="col-md-3 d-none d-md-block border ms-3" >
                            <div className="row m-2 ">
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
                    <div className="row mt-2">
                        <div className="col-md-2 d-none d-md-block  ms-3">
                            <div className="row m-2 border">
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
                        <div className="col-sm-12 col-md-9 d-block ms-3">
                                <div className="row">
                                    <div className="col-8">
                                    <HeadLine 
                                        headline = ""
                                        updateHeadLine = {this.updateHeadLine}/>                                
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <Article />
                                        <Article />
                                        <Article />
                                    </div>
                                </div>
                            </div>                            
                    </div>
                    </div>
                </div>
        )
    }
}

export default MainPage;