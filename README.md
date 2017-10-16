# Restful API
Demo app with basic REST API

## User routes:
| Route             | HTTP          | Description                   |
| ----------------- | ------------- | ----------------------------- |
| `/api/users`      | GET           | Get all the users             |
| `/api/users`      | POST          | Create a user                 |
| `/api/users/:id`  | GET           | Get a single user             |
| `/api/users/:id`  | DELETE        | Delete a user                 |
| `/api/users/:id`  | PUT           | Update a user with a new info |

## Authentication routes:
| Route             | HTTP          | Description                                            |
| ----------------- | ------------- | ------------------------------------------------------ |
| `/api/signup`     | POST          | Sign up with a new user info                           |
| `/api/signin`     | POST          | Sign in while get an access token based on credentials |

## Usage
```
  $ npm install
  $ npm start
```

Access the API via `http://localhost:3000/api`
