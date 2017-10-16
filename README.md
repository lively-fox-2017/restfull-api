# REST API

list of basic routes:

```diff
|Routes|HTTP|Description|
|---|---|---|
|`/api/hello?name={name}`|GET|Print hello, {name} !|
```

List of User routes:

|Routes|HTTP|Description|
|---|---|---|
|`/api/users`|GET`|Get all the users|
|`/api/users/:id`|GET|Get single user|
|`/api/users`|POST|create a user|
|`/api/users/:id`|DELETE|delete a user|
|`/api/users/:id`|PUT|update a user with new info|
|`/api/users/:id`|PATCH|update a user with specific new info|

List of filter routes:

|Routes|HTTP|Description|
|---|---|---|
|`/api/users?name="{name}"`|GET|Get {name} match in users|
|`/api/users?name="{na}"`|GET|Get {na} in like in users|
|`/api/users`|POST|create a user|
|`/api/users/:id`|DELETE|delete a user|
|`/api/users/:id`|PUT|update a user with new info|

## Usage

  With only npm:
```sh
   npm install
   npm start
   npm run dev
```

```diff
- this will be highlighted in red
```

Access the website via   `http://localhost:3000` or API via
`http://localhost:3000/api`.
