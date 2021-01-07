import React from 'react'
import NavBar from '../main/NavBar'
import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';

const Profile = function() {
    return(
        <div>
            <NavBar />
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <ProfileImage />
                    </div>
                    <div className="col">
                        <ProfileInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;