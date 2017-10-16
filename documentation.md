# User Logi Application

Demo app with basic REST API

# REST API
List of basic routes:
| Route | HTTP | Description |
| ------ | ------ | ------ |
| `/api/hello?name={name}` | GET | Print hello, {name} ! |

List  of user routes:
| Route | HTTP | Description |
| ------ | ------ | ------ |
| `/api/users` | GET | Get all the users |
| `/api/users/:id` | GET | Get single users |
| `/api/users` | POST | Create a users |
| `/api/users/:id` | DELETE | Delete a user users |
| `/api/users/:id` | PUT | Update a user with new info |
| `/api/users/:id` | PATCH | Update a user with specific new info |

List  of user routes:
| Route | HTTP | Description |
| ------ | ------ | ------ |
| `/api/users?name={name}` | GET | Get `{name}` match in users |
| `/api/users?name={na}` | GET | Get `{na}` like in users |

# Usage
```sh
$ npm install
$ npm start
$ npm run dev
```
Acces the website via `http://localhost:3000` or API via
`http://localhost:3000/api`
