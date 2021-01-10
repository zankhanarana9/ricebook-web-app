import { getDefaultNormalizer } from '@testing-library/react';
import Users from './users.json';

let users = Users;

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
        let users =  fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json());           
        return users;              
    }

    static getCurrentUser =() => {
        return users[0];
    };

    static getUserById = (userId) => {           
        return users.find(user => 
                user.id === userId
            );        
    }

    static getFriendList = (user) => {
        let friends = [];
        if(user !== undefined) {
            let friendList = user.friends.filter(friend => friend.follow === false);
            if(friendList.length > 5) {
                friendList = getRandom(friendList,5);
            }
            for(let i =0; i < friendList.length; i++) {
                let friend = friendList[i];
                let user = this.getUserById(friend.friendid);                
                user.follow = friend.follow;
                friends.push(user);
            }
        }
        
        return friends;
    }
    
    static getFollowers = (user) => {
        let followers = user.friends.filter(friend => friend.follow === true);;        
        let f = [];
        if(followers.length > 3) {
            followers = getRandom(followers,3);
        }
        for(let i=0; i < followers.length; i++) {
            let user = this.getUserById(followers[i].friendid);            
            user.follow = followers[i].follow;
            f.push(user);
        }                                    
        return f;
    }

    static updateFollow(user, follower) {
        let friend = user.friends.find(friend => 
                friend.friendid === follower.id
            );
       friend.follow = !friend.follow;          
    }
}

export default UserService;