import React from 'react';

const NavBar = function() {
    return(
        <div className="mx-auto sticky-top">
            <nav className="container-fluid  navbar  navbar-expand-md navbar-dark">
                <a className="navbar-brand  mb-0 h1 pl-2" href="Main.html">LinkZone</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">              
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item ">
                        <a className="nav-link" href="/">Profile </a>
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