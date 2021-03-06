
let posts = require('./posts.json');


//Post API

//get a list of posts
//get post by id
//update a post

//get all posts
getAllPosts = () => posts;


//get post by id
getPostById = (pid) => {
    return posts.find(post => post.id == pid);
}

//add a new post
addPost = (post) => {
    posts.push(post);
    return post;
}

//update a new post
updatePost = (post) => {
    return post;
}

//delete a post by id
deletePost = (pid) => {
    posts = posts.filter(post => post.id !== pid);
    return {
        deleted: true
    }
}

//add a new post
addPost = (post) => {
    posts.push(post);
    return post;
}

module.exports = {
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
    addPost
}