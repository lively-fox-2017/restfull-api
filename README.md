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
| <span style="color:blue">/api/signup</span>       | GET           | Sign up with new user info  |
| <span style="color:blue">/api/signin</span>       | GET           | Sign in while get an access token based on credentials  |
| <span style="color:blue">/api/users</span>       | GET           | Get all the users info (admin only)  |
| <span style="color:blue">/api/users/:id</span>        | GET           | Get a single user (admin and authenticated user)  |
| <span style="color:blue">/api/users</span>        | POST           | Create a user (admin only) |
| <span style="color:blue">/api/users/:id </span>      | DELETE           | Delete a user (admin only)  |
| <span style="color:blue">/api/users/:id </span>       | PUT           | Update a user with a new info (admin and authenticated user) |
| <span style="color:blue">/api/users/:id  </span>      | PATCH           | Update a user with a specific new info |

List of filter routes:

| Route        | HTTP           | Description  |
| ------------- |:-------------:| -----:|
| <span style="color:blue">/api/users?name="{name}"</span>      | GET           | Get {name} match in users  |
| <span style="color:blue">/api/users?name="{na}" </span>       | GET           | Get {na} like in users  |
