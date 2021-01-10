import React from 'react'
import NavBar from '../main/navbar-component-js.js'
import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';

const Profile = function() {
    return(
        <div>
            <NavBar />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-3">
                        <ProfileImage />
                    </div>
                    
                    <div className="col-md-6 offset-md-3">
                        <ProfileInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;