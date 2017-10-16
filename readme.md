# LOGIN USER
Demo app with basic REST API.
# REST API

List of basic routes:

| Route               | HTTP           | Description       |
| --------------------- |:--------------:| ------------     |
| `/api/hello?name={name}`| GET            | Print hello, `{name}`! |

List of filter routes:

| Route               | HTTP           | Description       |
| --------------------- |:--------------:| ------------    |
| `/api/users`| GET            | Get all the users |
| `/api/users/:id`| GET            | Get a single user |
| `/api/users`| POST            | Create a user |
| `/api/users/:id`| DELETE  | Delete a user |
| `/api/users/:id`| PUT            | Update a user with new info |
| `/api/users/:id`| PATCH            | Update a user with spesific new info |

List of basic routes:

| Route               | HTTP           | Description       |
| --------------------- |:--------------:| ------------     |
| `/api/users?name="{name}"`| GET            | Get `{name}` match in users |
| `/api/users?name="{na}"`| GET            | Get `{na}` like in users |

# Usage
## With only npm:
**Acces the website via POSTMAN ** `https://restfullapibany.herokuapp.com/` **or API via**
`http://localhost:3000/api`**.**
