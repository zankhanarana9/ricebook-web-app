import React from 'react'
import Article from './Article';
import Followers from './Followers';
import HeadLine from './Headline';
import './main.css';
import NavBar from './NavBar';
import Self from './Self';

const Main = function() {
    return(
        <div>
            <NavBar />
            
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <Self />
                    </div>
                    <div className="col-7">
                        <HeadLine />
                        <Article />
                        <Article />
                        <Article />
                    </div>
                    <div className="col-3">
                        <div className="row mt-3 border">            
                            <Followers />
                            <Followers />
                            <Followers />
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;