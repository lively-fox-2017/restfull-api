#LOGIN USER
Demo app with basic REST API.
#REST API
List of basic routes:
Route | HTTP | Description
----- | ---- | -----------
/api/hello?name={name} | GET | Print hello, {name} !

List of user routers:

Route | HTTP | Description
----- | ---- | -----------
/api/users | GET | Get all the users
/api/users/:id | GET | Get a single user
/api/users/ | POST | Create a user
/api/users/:id | DELETE | Delete a user
/api/users/:id | PUT | Update users with new info