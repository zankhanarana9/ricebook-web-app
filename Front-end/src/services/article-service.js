// import Posts from './posts.json';
import UserService from './user-service';

let posts = []

let comments = ["This is a place holder for comments"]

class ArticleService {
    
    static getPosts = () => {
        return fetch('http://localhost:4200/api/posts')
            .then(response => response.json());

        //return posts;
    }

    static getPostUser = (postId) => {
        return 1;
        // let userId =  posts.find(post => post.id === postId).userid;            
        // return UserService.getUserById(userId);                
    }
    
    static getComments =  (pid) => {
        return fetch(`http://localhost:4200/api/posts/${pid}/comments`)
        .then(response => response.json())
        // fetch(`/api/posts/${postId}/comments`)
        //     .then(response => response.json())
        //     .then(response => console.log(response));
        // return comments.filter(comment => comment.postId === postId);
    }

    static addPost = (newPost) => {
        //call the api that will add the new post
        posts.unshift(newPost);
    }

    static addComment(post, newComment) {
        let comment = {
            "id": 5,
            "body": newComment,
            "postid": post.id,
            "createdBy": {
                "id": 2,
                "username": "bstark"
            }
        }

        return fetch(`http://localhost:4200/api/posts/${post.id}/comments/create`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(comment)
            }).then(res => res.json());
    }

    static likeComment(comment,like) {
        console.log(comment.likes);
        if(like) {
            comment.likes++;
        }
        else{
            comment.likes--;
        }
    }
}

export default ArticleService;