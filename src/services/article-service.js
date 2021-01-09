import Article from "../components/main/Article";

class ArticleService {
    
    static getPosts =() => {
        let posts =  fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())            
        
        return posts;   
    }
}

export default ArticleService;