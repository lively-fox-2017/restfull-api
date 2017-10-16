# Restful API
Demo app with basic REST API

## User routes:
| Route             | HTTP          | Description                                                  |
| ----------------- | ------------- | ------------------------------------------------------------ |
| `/api/users`      | GET           | Get all the users (admin only)                               |
| `/api/users`      | POST          | Create a user (admin only)                                   |
| `/api/users/:id`  | GET           | Get a single user (admin and authenticated user)             |
| `/api/users/:id`  | DELETE        | Delete a user (admin only)                                   |
| `/api/users/:id`  | PUT           | Update a user with a new info (admin and authenticated user) |

## Authentication routes:
| Route             | HTTP          | Description                                            |
| ----------------- | ------------- | ------------------------------------------------------ |
| `/api/signup`     | POST          | Sign up with a new user info                           |
| `/api/signin`     | POST          | Sign in while get an access token based on credentials |

## Locally
```
  $ npm install
  $ npm start
```

And then access the API via [http://localhost:3000](http://localhost:3000)

## Heroku
[http://dimitri-restful-api.herokuapp.com](http://dimitri-restful-api.herokuapp.com)
