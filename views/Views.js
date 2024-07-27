import readline from 'readline-sync';

import {createUser , getUserId,deleteUserById,updateUserById, listAllUsers} from '../service/UserServices.js';


function main(){
    while(true){
        console.log("\nWelcome to Address Book\n");
        console.log("1. Add a new user");
        console.log("2. Get user by UserId");
        console.log("3. Update user details");
        console.log("4. Delete a user");
        console.log("5.List all users");
        console.log("6. Exit");

        const choice = readline.question("Enter ur choice ");

        switch(choice){
            case '1' :
                createUser();
                break;
            case '2' :
                getUserId();
                break;
                
            case '3' :
                updateUserById();
                break;
                
            case '4' :
                deleteUserById();
                break;
                
            case '5' :
                // List all users
                listAllUsers();
                break;
                
            case '6' :
                console.log("Exiting...");
                process.exit();
                
            default:
                console.log("invalid choice");

         
        }
    }
}


main();