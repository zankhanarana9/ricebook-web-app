const commentsService = require('../services/comments.service');

module.exports= function(app) {

    //get all comments on a post
    app.get('/api/posts/:pid/comments', (req, res) => {
        res.json(commentsService.getAllComments(req.params['pid']));
    });
}