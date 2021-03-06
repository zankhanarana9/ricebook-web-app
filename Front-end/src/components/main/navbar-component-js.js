import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = function({currentUser}) {
    return(
        <div className="mx-auto sticky-top">
            <nav className="container-fluid  navbar  navbar-expand-md navbar-dark">
                <Link to="/main/" className="navbar-brand  mb-0 h1 pl-2" >
                    Ricebook
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">              
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item ">
                        <Link to={`/profile/${currentUser.id}`} className="nav-link">Profile </Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>  
        </div> 
    )
}

export default NavBar;