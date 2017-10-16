# My App Name

Demo App with basic REST API.

## REST API

List of basic routes:

| Route        | HTTP           | Description  |
| ------------- |:-------------:| -----:|
| `/api/hello?name={name}`       | GET           | `Print hello, {name} !`  |

List of user routes:

| Route        | HTTP           | Description  |
| ------------- |:-------------:| -----:|
| /api/signup      | GET           | Sign up with new user info  |
| /api/signin      | GET           | Sign in while get an access token based on credentials  |
| /api/users       | GET           | Get all the users info (admin only)  |
| /api/users/:id        | GET           | Get a single user (admin and authenticated user)  |
| /api/users        | POST           | Create a user (admin only) |
| /api/users/:id      | DELETE           | Delete a user (admin only)  |
| /api/users/:id       | PUT           | Update a user with a new info (admin and authenticated user) |
| /api/users/:id      | PATCH           | Update a user with a specific new info |

List of filter routes:

| Route        | HTTP           | Description  |
| ------------- |:-------------:| -----:|
| ``/api/users?name="{name}"``    | GET           | ``Get {name} match in users``  |
| ``/api/users?name="{na}"``     | GET           | ``Get {na} like in users``  |

## Heroku Link

[I'm an inline-style link with title](https://ian-api-auth.herokuapp.com "Ian Heroku API Auth")
