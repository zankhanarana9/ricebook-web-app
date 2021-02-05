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

    static getCurrentUser =() => {
        return fetch('http://localhost:4200/api/users/1')
            .then(response => response.json());        
    };

    static getUserById = (userId) => {      
        // return fetch('http://localhost:4200/api/users/' + userId)
        //     .then(response => response.json());   
        
        return users.find(user => 
                user.id === userId
            );        
    }

    static getFriendList = async (user) => {        
        let friends =  await fetch(`http://localhost:4200/api/users/${user.id}/friends`)
            .then(response => response.json());            
        let friendList = friends.filter(friend => friend.follow === false);            
        if(friendList.length > 5) {
            friendList = getRandom(friendList, 5);
        }    
        return friendList;
    }
    
    static getFollowers = async (user) => {
        let friends =  await fetch(`http://localhost:4200/api/users/${user.id}/friends`)
            .then(response => response.json());
        let friendList = friends.filter(friend => friend.follow === true);            
        if(friendList.length > 5) {
            friendList = getRandom(friendList, 5);
        }    
        return friendList;        
    }

    static updateFollow(user, follower) {
        console.log(user);
        return fetch(`http://localhost:4200/api/users/${user.id}/friends/${follower.id}`, {
            method:'PUT'
        })
                .then(response => response.json());        
    }
}

export default UserService;