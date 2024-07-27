
import { isExpressionStatement } from 'typescript';
import {User} from '../model/User.js';
import readlinesync from 'readline-sync';


        let users=[];
        let userId=0;
 

 export   function   createUser()
     {
        const user=new User();
        user.name=readlinesync.question("naam ");
        user.address=readlinesync.question("address ");
        user.age= readlinesync.question("age ");
        user.number=readlinesync.question("phone number ");
        user.state=readlinesync.question("state ");
        user.id = ++userId;

        users.push(user);

        console.log("User added successfully" + userId ,user);
     }


export function getUserId(){
    const id =readlinesync.questionInt("Enter user Id: ");

    //console.log(id);

    const user = users.find(user=>user.id ===id);

    if(user)
    {
        console.log("User found",user);
    }
    else
    console.log("User not found 3333");
   
}

export function deleteUserById(){
    const id = readlinesync.questionInt("Enter user Id to delete: ");
    const index=users.findIndex(user=>user.id===id);

    if(index !== -1)
    {
               const deletedUser =users.splice(index,1);
               console.log("User deleted successfully",deletedUser);
    }
    else
    console.log("User not found ");
}

export function updateUserById(){
    const id =readlinesync.questionInt("Enter user Id to update: ");
    const user=users.find(user=>user.id===id);
    if(user)
    {
        user.name=readlinesync.question("naam  (${user.name})") || user.name;
        user.address=readlinesync.question("address ");
        user.age= readlinesync.question("age ");
        user.number=readlinesync.question("phone number ");
        user.state=readlinesync.question("state ");
        console.log("User updated successfully",user);
    }
    else
    console.log("User not found ");
}

export function listAllUsers() {
    if(users.length>0)
    {
        console.log("All users " ,users);
    }
    else
    {
        console.log("no user ");
    }
}



/*
//import user from  user .js
//let User = require('../User');
let readline = require('readline');

// Initialize the readline interface

import {user} from '../model/User.js';



   

// Initialize an array to store the user object 

    let userArray = [];

    // function to add a new user to the array

    function addUser(){
        let user = new User();
        user.name = readline.question('Enter name: ');
        user.address = readline.question('Enter address: ');
        user.age = readline.question('Enter age: ');
        user.number = readline.question('Enter phone number: ');
        user.state = readline.question('Enter state: ');
        userArray.push(user);
    }

    addUser();
    console.log(userArray);

    */