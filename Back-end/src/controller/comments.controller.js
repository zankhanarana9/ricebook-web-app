const commentsService = require('../services/comments.service');

module.exports= function(app) {

    //get all comments on a post
    app.get('/api/posts/:pid/comments', (req, res) => {
        res.json(commentsService.getAllComments(req.params['pid']));
    });

    //add a comment
    app.post('/api/posts/:pid/comments/add', (req,res) => {
        res.json(commentsService.addComment(req.body));
    });
}