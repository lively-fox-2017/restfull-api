My App Name
============
Demo app with basic REST API.

REST API
-----------
List of basic routes:

Route | HTTP | Description
------------ | ------------- | ----------
`/api/hello?name={name}` | GET | Print hello, {name}!

List of routes:

| Route  |  HTTP |  Description |
| ------------ | ------------ | ------------ |
|  `/api/users` |GET  [3] |  [3]Get all the users |
|  `/api/users/:id` |  GET  |  Get all the users |
|  `/api/users/:id`  |  GET [3] |  [3]Get a single user  |
| `/api/users`  | POST  | Create a user  |
| `/api/users/:id`  |  DELETE [3] | [3]Delete a user  |
| `/api/users/:id`   |   PUT   | Update a user with new info |
| `/api/users/:id`  |    PATCH  [3] | [3]Update a user with spesific new info |

List of filter routes

Route | HTTP | Description
------------ | ------------- | ----------
`/api/users?name="{name}"` | GET [3]|[3] Get {name} match in users!
`/api/users?name="{na}"` | GET | Get {na} match in users!

USAGE
-----

With only npm:

>npm install

>npm start

>npm run dev

Access the website via `http://localhost:3000`  or API via  `http://localhost:3000/api` 

 [3]: https://github.com/jmcmanus/pagedown-extra "Pagedown Extra"
