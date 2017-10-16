# Rest API
Demo app with basic REST API.


## List of User routes :

| Route              | HTTP   | Description                        |
|--------------------|--------|------------------------------------|
|`/api/users`          |GET     |Get all the users (admin only)      |
|`/api/users`          |POST    |Create a user (admin only)            |
|`/api/users/:id`      |GET     |Get a single user (admin and authenticated user)                  |
|`/api/users/:id`      |DELETE  |Delete a user (admin only)             |
|`/api/users/:id`      |PUT     |Update a user with new info  (admin and authenticated user)        |

## Authentication routes:

| Route        | HTTP   | Description          |
|--------------|--------| ---------------------|
| `/api/signup`  | POST    | Sign up with a new user info |
| `/api/signin`  | POST    | Sign in while get an access token based on credentials |

## Usage
With only npm:
```
 npm install
 npm start
 sequelize db:migrate
```
Access the websites via http://localhost:3000 

## Heroku
[nurach-rest-api](https://nurach-rest-api.herokuapp.com)
