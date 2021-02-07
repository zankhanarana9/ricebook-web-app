const userService = require('../services/users.service');
const followerService = require('../services/follower.service')
module.exports = function(app) {

    app.get('/api/users', (req, res) => {
        res.send(userService.getAllUsers());
    });

    app.get('/api/users/:uid', (req,res) => {
        res.send(userService.findUserById(req.params['uid']));
    });

    app.put('/api/users/:uid/updateHeadline', (req,res) => {        
        let user = userService.updateHeadline(req.body.id, req.body.headline);
        return res.json(user);
    });

    //get list of followers
    app.get('/api/users/:uid/followers', (req,res) => {
        res.json(followerService.getAllFollowers(req.params['uid']));
    });

    //add follower
    app.post('/api/users/:uid/followers', (req, res) => {
        res.json(followerService.addFollower(req.body));
    })

    //delete follower
    app.delete('/api/users/:uid/followers',(req,res) => {        
        res.json(followerService.removeFollower(req.body));
    });
}

