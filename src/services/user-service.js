import Users from './users.json';

let users = Users;

class UserService {
    
    static getUsers =   () => {
        let users =  fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json());
        
        return users;              
    }

    static getUserById = (userId) => {
        return users.find(user => 
                user.id === userId
            ).username;
    }

}

export default UserService;