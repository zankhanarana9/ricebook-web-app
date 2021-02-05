
const users = require('./users.json');


getAllUsers = () => users;

findUserById = (uid) => {
    return users.find(u => u.id == uid);
}   

getUserFriends = (uid) => {
    let friends = [];
    let user = users.find(u => u.id == uid);
    if(user !== undefined) {
        let friendList = user.friends;
        for(let i = 0; i < friendList.length; i++) {
            let user = findUserById(friendList[i].friendid);
            user.follow = friendList[i].follow;
            friends.push(user);
        }
    }
    return friends;
}

updateFollow = (uid, friendId) => {
    console.log("I came here.." + uid + friendId);
    let user = users.find(u => u.id == uid);
    console.log(user);
    if(user !== undefined) {
        console.log(friendId);
        user.friends = user.friends.map((friend) => {
            if(friend.friendid == friendId) {
                console.log(friend);
                friend.follow = !friend.follow;
            }
            return friend
        })
    }    
    return user;
}



module.exports  = {      
    getAllUsers,
    findUserById,
    getUserFriends,
    updateFollow
}