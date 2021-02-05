const userService = require('../services/users.service');

module.exports = function(app) {

    app.get('/api/users', (req, res) => {
        res.send(userService.getAllUsers());
    });

    app.get('/api/users/:uid', (req,res) => {
        res.send(userService.findUserById(req.params['uid']));
    });

    app.put('/api/users/:uid/updateHeadline', (req,res) => {
        console.log(req.body);
        let user = userService.updateHeadline(req.body.id, req.body.headline);
        return res.json(user);
    });

    app.put('/api/users/:uid/friends/:friendId', (req, res) => {
        res.send(userService.updateFollow(req.params['uid'], req.params['friendId']));
    });
}

