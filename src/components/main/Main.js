import React from 'react'
import Article from './Article';
import './main.css';
import NavBar from './NavBar';

const Main = function() {
    return(
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        {/* <!--Add side bar content here--> */}
                    </div>
                    <div className="col-6">
                        <Article />
                        <Article />
                        <Article />
                    </div>
                    <div className="col-3">
                        {/* <!--Add side bar content here--> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;