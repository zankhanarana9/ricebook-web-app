import { getDefaultNormalizer } from '@testing-library/react';

let users = [];

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

class UserService {
    
    static getUsers =   () => {          
        return fetch('http://localhost:4200/api/users')
            .then(response => response.json());            
    }

    static updateUserHeadline = (user, headline) => {        
        //https://localhost:4200/api/users/${user.id}/updateHeadLine
        return fetch(`http://localhost:4200/api/users/1/updateHeadLine`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                  },
                body:JSON.stringify( {
                        "id": 1,
                        "headline": headline
                    })
            }).then(response => response.json());
    }

    static getUserById = (uid) => {
        return fetch(`http://localhost:4200/api/users/${uid}`)
            .then(response => response.json());     
    }

    static getCurrentUser =() => {
        return fetch('http://localhost:4200/api/users/1')
            .then(response => response.json());        
    };

    static getFriendList = async(user, followers) => {        
        let users = await this.getUsers();
        let f = followers.map(follower => follower.user.id);
        f.push(user.id);
        users = users.filter(user => !f.includes(user.id));
        if(users.length > 5) {
            users = getRandom(users, 5)
        }
        return users;
    }
    
    static getFollowers = (user) => {
        return fetch(`http://localhost:4200/api/users/${user.id}/followers`)
            .then(res => res.json());      
    }

    static addFollower = (user, follow) => {
        let follower = {
            user : {
                id: follow.id,
                username: follow.username
            },
            followerid: user.id
        }

        return fetch(`http://localhost:4200/api/users/${user.id}/followers`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(follower)
        })
            .then(res => res.json())
    }

    static removeFollower = (user, follower) => {
        return fetch(`http://localhost:4200/api/users/${user.id}/followers`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(follower)
        })
            .then(res => res.json())
    }
}

export default UserService;