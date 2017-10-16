# My App Name

Demo App with basic REST API.

## REST API

List of basic routes:

| Route        | HTTP           | Description  |
| ------------- |:-------------:| -----:|
| <span style="color:blue">/api/hello?name={name}</span>       | GET           | Print hello, {name} !  |

List of user routes:

| Route        | HTTP           | Description  |
| ------------- |:-------------:| -----:|
| <span style="color:blue">/api/users</span>       | GET           | Get all the users  |
| <span style="color:blue">/api/users/:id</span>        | GET           | Get a single user  |
| <span style="color:blue">/api/users</span>        | POST           | Create a user  |
| <span style="color:blue">/api/users/:id </span>      | DELETE           | Delete a user  |
| <span style="color:blue">/api/users/:id </span>       | PUT           | Update a user with a new info |
| <span style="color:blue">/api/users/:id  </span>      | PATCH           | Update a user with a specific new info |

List of filter routes:

| Route        | HTTP           | Description  |
| ------------- |:-------------:| -----:|
| <span style="color:blue">/api/users?name="{name}"</span>      | GET           | Get {name} match in users  |
| <span style="color:blue">/api/users?name="{na}" </span>       | GET           | Get {na} like in users  |
