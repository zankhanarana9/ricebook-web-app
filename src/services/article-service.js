import Posts from './posts.json';
import UserService from './user-service';

let posts = Posts

let comments = ["This is a place holder for comments"]

class ArticleService {
    
    // static getPosts =  async () => { 
    //     let posts = await fetch('https://jsonplaceholder.typicode.com/posts/')
    //         .then(response => response.json());
    //     posts = posts.slice(0,2);
    //     await posts.map((post) => {
    //         return fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    //             .then(comments => comments.json())
    //             .then(comments =>  post.comments =comments)                
    //     });
    //     return posts;
    // }
    
    static getPosts = () => {
        return posts;
    }

    static getPostUser = (postId) => {
        let userId =  posts.find(post => post.id === postId).userid;            
        return UserService.getUserById(userId);                
    }
    
    static getComments =  (postId) => {
        return comments.filter(comment => comment.postId === postId);
    }

    static addPost = (newPost) => {
        //call the api that will add the new post
        posts.unshift(newPost);
    }
}

export default ArticleService;