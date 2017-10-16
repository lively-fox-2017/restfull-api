# REST API with Authetication
Simple REST API implements HTTP Verbs to send or retrieve JSON objects.

Documentation for This REST API:
## API
METHOD | ROUTE | DESCRIPTION
--- | --- |  ---
POST | /api/signup | Sign up with new user info
POST | /api/signin | Sign in while get an access token based on credential
GET | /api/users | Get all the users info (Admin Required)
GET | /api/users/:id | Get a single user info (Admin and authenticated user Required)
POST | /api/users | Create a user (Admin Required)
DELETE | /api/users/:id | Delete a user (Admin Required)
PUT | /api/users/:id | Update a user with new info (Admin and authenticated user Required)
