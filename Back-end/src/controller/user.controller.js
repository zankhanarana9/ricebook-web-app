const userService = require('../services/user.service');

module.exports = function(app) {

    app.get('/api/users', (req, res) => {
        res.send(userService.getAllUsers());
    });

    app.get('/api/users/:uid', (req,res) => {
        res.send(userService.findUserById(req.params['uid']));
    });

    app.get('/api/users/:uid/friends', (req,res) => {
        res.send(userService.getUserFriends(req.params['uid']));
    });

    app.put('/api/users/:uid/friends/:friendId', (req, res) => {
        res.send(userService.updateFollow(req.params['uid'], req.params['friendId']));
    });
}

