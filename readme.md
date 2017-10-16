# RESTful API
Demo app with basic REST API.
## ROUTES
List of user routes :

|Route                                         |HTTP         |Description                                             |
|----------------------------------------------|:-----------:|-------------------------------------------------------:|
| <div style="color:cyan">/api/users</div>     |** GET **    |Get all the users(admin only)                           |
| <div style="color:cyan">/api/users/:id</div> |** GET **    |Get a single user(admin and autenthicate user)          |
| <div style="color:cyan">/api/users</div>     |** POST **   |Create a user(admin only)                               |
| <div style="color:cyan">/api/users/:id</div> |** DELETE ** |Delete a user(admin only)                               |
| <div style="color:cyan">/api/users/:id</div> |** PUT **    |Update a user with new info(admin and autenthicate user)|

List of signup and signin routes :

|Route                                      |HTTP      |Description                                           |
|-------------------------------------------|:--------:|-----------------------------------------------------:|
| <div style="color:cyan">/api/signup</div> |** POST **|Signup with new user info                             |
| <div style="color:cyan">/api/signin</div> |** POST **|Sign in while get an access token based on credentials|

## Heroku link
[redhaputra-restfulapi.herokuapp.com](https://redhaputra-restfulapi.herokuapp.com)
