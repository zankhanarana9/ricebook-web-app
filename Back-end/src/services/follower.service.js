let followers = require('./followers.json')

//get list of users that uid follows 
getAllFollowers = (uid) => {
    return followers.filter(follower => follower.followerid == uid);
}

addFollower = (follow) => {
    followers.push(follow);
    return follow;
}


removeFollower = (follow) => {
    followers = followers.filter(follower => 
            JSON.stringify(follower) !== JSON.stringify(follow)
        );
    return followers
}

module.exports = {
    getAllFollowers,
    addFollower,
    removeFollower
}