
const postsService = require('../services/posts.service');

module.exports = function(app) {

    //get all posts
    app.get('/api/posts', (req,res) => {
        res.send(postsService.getAllPosts());
    });      

    //add a new post
    app.post('/api/posts/create', (req,res) => {
        res.json(postsService.addPost(req.body));
    });

    //get post by id
    app.get('/api/posts/:pid', (req, res) => {
        res.json(postsService.getPostById(req.params['pid']));
    });

    //update a post in the list of posts
    app.put('/api/posts/:pid', (req,res) => {
        res.send("API in development")
    });

    //delete a post
    app.delete('/api/posts/delete', (req,res) => {
        res.json(postsService.deletePost(req.body.id))
    });  
    
    //add a new comment to the post
    //add a comment
    app.post('/api/posts/:pid/comments/create', (req,res) => {
        res.json(postsService.addCommentToPost(req.body));
    });
}