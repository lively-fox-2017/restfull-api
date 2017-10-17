# My First Applications API

Demo app with basic REST API

# REST API

List of basic routes :

| Route | HTTP | Description |
| ------ | ------ | ------ |
| `${/api/hello?name={name}` | GET | Print hello, {name} !

List of user routes :

| Route | HTTP | Description |
| ------ | ------ | ------ |
| `${/api/users}` | GET | Get all the users
| `${/api/users/:id}` | GET | Get single user
| `${/api/users}` | POST | Create a user
| `${/api/users/:id}` | DELETE | Delete a users
| `${/api/users/:id}` | PUT | Update a user with new info
| `${/api/users/:id}` | PATCH | Update a user with specific new info

List of filter routes :

| Route | HTTP | Description |
| ------ | ------ | ------ |
|  `${/api/users?name={"name"}` | GET | Get `${name}` match in users
| `${/api/users?name="{na}"}` | GET | Get `${na}` like in users

# Usage
With only npm :
```sh
npm install
npm start
npm run dev
```

Access the website via `${http://localhost:3000}` or API via
`${http://localhost:3000/api}`.

Access Online : https://restfull-api-harynp.herokuapp.com/
List of user routes :

| Route | HTTP | Description |
| ------ | ------ | ------ |
| `${https://restfull-api-harynp.herokuapp.com/users}` | GET | Get get user
| `${https://restfull-api-harynp.herokuapp.com/users}` | POST | Get post user
| `${https://restfull-api-harynp.herokuapp.com/signup}` | POST | Create a user
| `${https://restfull-api-harynp.herokuapp.com/login}` | POST | Get Token a users
| `${https://restfull-api-harynp.herokuapp.com/users/:id}` | DELETE | Delete users
| `${https://restfull-api-harynp.herokuapp.com/users/:id}` | PUT | Update a user with specific new info
