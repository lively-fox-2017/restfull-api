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
|  `/api/signup` |POST  |  Sign up with new user info |
|  `/api/signin` |  POST  |  Sign in while get an access token based on credentials |
|  `/api/users` |GET  |  Get all the users |
|  `/api/users/:id` |  GET  |  Get all the users |
|  `/api/users/:id`  |  GET |  Get a single user  |
| `/api/users`  | POST  | Create a user  |
| `/api/users/:id`  |  DELETE  | Delete a user  |
| `/api/users/:id`   |   PUT   | Update a user with new info |
| `/api/users/:id`  |    PATCH   | Update a user with spesific new info |

List of filter routes

Route | HTTP | Description
------------ | ------------- | ----------
`/api/users?name="{name}"` | GET |Get {name} match in users!
`/api/users?name="{na}"` | GET | Get {na} match in users!

USAGE
-----

With only npm:

>npm install

>npm start

>npm run dev

Access the website via `http://localhost:3000`  or API via  `http://localhost:3000/api` 
`http://userinterface-livelyfox.herokuapp.com`

 
  [1]: http://math.stackexchange.com/
  [2]: http://daringfireball.net/projects/markdown/syntax "Markdown"
  [3]: https://github.com/jmcmanus/pagedown-extra "Pagedown Extra"
  [4]: http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference
  [5]: https://code.google.com/p/google-code-prettify/
  [6]: http://highlightjs.org/
  [7]: http://bramp.github.io/js-sequence-diagrams/
  [8]: http://adrai.github.io/flowchart.js/
