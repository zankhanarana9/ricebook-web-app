let comments = require('./comments.json');


//get comments for a post
getAllComments = (pid) => {
    return comments.filter(comemnt => comments.postid == pid);
};

//add a new comment
addComment = (comment) => {
    comments.push(comment);   
    return comments; 
};

module.exports = {
    getAllComments,
    addComment
}