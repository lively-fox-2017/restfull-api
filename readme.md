# First App Restful API
This is a Demo app with basic REST API.

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/s)

# REST API
List of basic routes :

| Route | HTTP | Description |
| ------ | ------ | ------ |
| /api/hello?name={name} | GET | Print hello, `{name}` ! |

List of user routes :

| Route | HTTP | Description |
| ------ | ------ | ------ |
| `/api/users` | GET | Get All The Users |
| `/api/users/:id` | GET | Get a Single User |
| `/api/users | POST` | Create a User |
| `/api/users/:id` | DELETE | Delete a User |
| `/api/users/:id` | PUT | Update a User With New Info |
| `/api/users/:id` | PATCH | Update a User With Spesific New Info |

List of filter routes :

| Route | HTTP | Description |
| ------ | ------ | ------ |
| `/api/users?name="{name}"` | GET | Get `{name}` Match In Users |
| `/api/users/?name="{na}"` | GET | Get `{na}` Like In Users |

# Usage

#### With only npm :
```sh
$ npm install
$ npm start
$ npm run dev
```
