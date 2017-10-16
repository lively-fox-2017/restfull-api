# RESTful API
Demo app with basic REST API.
## ROUTES
List of basic routes :

|Route                                               |HTTP     | Description        |
|----------------------------------------------------|:-------:|-------------------:|
| <div style="color:cyan">/api/hello?name={name}</div>|** GET **|Print Hello, {name}!|

List of user routes :

|Route                                         |HTTP         |Description                          |
|----------------------------------------------|:-----------:|------------------------------------:|
| <div style="color:cyan">/api/users</div>     |** GET **    |Get all the users                    |
| <div style="color:cyan">/api/users/:id</div> |** GET **    |Get a single user                    |
| <div style="color:cyan">/api/users</div>     |** POST **   |Create a user                        |
| <div style="color:cyan">/api/users/:id</div> |** DELETE ** |Delete a user                        |
| <div style="color:cyan">/api/users/:id</div> |** PUT **    |Update a user with new info          |
| <div style="color:cyan">/api/users/:id</div> |** PATCH **  |Update a user with specific new info |

List of filter routes :

|Route                                                    |HTTP       |Description                |
|---------------------------------------------------------|:---------:|--------------------------:|
| <div style="color:cyan">/api/users?name="{name}"</div>  |** GET **  |Get {name} match in users  |
| <div style="color:cyan">/api/users?name="{na}"</div>    |** GET **  |Get {na} like in users     |
