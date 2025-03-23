# Activity 4

- Author: Titus Lund
- Course: CST-391
- Date: 3/22/25

## Introduction

In this activity we will expand our angular application to utilize API calls to interract with our musicapp that we made in activity 1.

## Recordings

- [Loom Recording](https://www.loom.com/share/739fc524deae4d71952594cf89988f0b?sid=1b9d60a7-0a4b-4acf-a696-69dec240b3c2)

## Technologies Used

- MySql
- Angular JS
- Express JS
- Typescript

## Research Question
There are two ways that authentication can be maintained. The first is by storing session data on the server, and also sending it to the client. Then the client just sends the session data with every request and the server can check it against it's session data. The other, and more modern way is by using JSON Web Tokens (JWTs). JWTs contain payload data such as the user logged in and the user id, and then there is a checksum to make sure that the JWT was not tampered with. The checksum is generated with a secret key that only the server knows. As long as the checksum is valid, the token is valid, and the authentication is good.

## Conclusion

This activity shows us how to use API calls to interract with our Express JS backend. We retreived the data and displayed it with our Angular JS frontend.
