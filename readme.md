# Restfull-API
Latihan Restfull API sederhana pada sesi pagi lively-fox phase 2.
## Daftar Routes
Berikut adalah daftar Restfull API yang bisa diakses. Daftar berikut dikategorikan berdasarkan data.
### Basic Route
| Route           | HTTP   | Description   |
| ----------      |:------| :-------------|
| /api/users      |GET     |GET all the users|
| /api/users/:id  |GET     |GET a single user|
| /api/users      |POST    |Create a user    |
| /api/users/:id  |DELETE  |Delete a user    |
| /api/users/:id  |PUT     |Update a user with new info|
| /api/users/:id  |PATCH   | Update a user with spesific new info|

### Filter Route
| Route    | HTTP | Description |
| -------  | ---- | ----------- |
| /api/users?name="{name}"|GET|Get {name} match in users|
| /api/users?name="{na}"|GET|Get {na} like in users
