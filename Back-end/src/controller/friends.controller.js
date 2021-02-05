module.exports = function(app) {

    //get list of friends
    app.get('/api/users/:uid/friends', (req,res) => {
        res.send(userService.getUserFriends(req.params['uid']));
    });

    //update following on a friend
    app.put('/api/users/:uid/friends/:friendId', (req, res) => {
        res.send(userService.updateFollow(req.params['uid'], req.params['friendId']));
    });
}