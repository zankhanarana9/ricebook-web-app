class UserService {
    
    static getUsers =   () => {
        let users =  fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json());
        
        return users;              
    }
}

export default UserService;