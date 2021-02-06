
const users = require('./users.json');


//User API
//get a list of users
//get user by id
//update user headline

getAllUsers = () => users;

findUserById = (uid) => {
    return users.find(u => u.id == uid);
}   

updateHeadline = (uid, headline) => {
    let user = users.find(u => u.id == uid);
    if(user != undefined) {
        user.headline = headline;
    }
    return {
        username:  user.username,
        id: user.id,
        headline: user.headline
    };
}

module.exports  = {      
    getAllUsers,
    findUserById,
    updateHeadline
}