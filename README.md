My App Name
===================
Demo app with basic REST API


Hey! I'm your first Markdown document in **StackEdit**[^stackedit]. Don't delete me, I'm very helpful! I can be recovered anyway in the **Utils** tab of the <i class="icon-cog"></i> **Settings** dialog.

----------


REST API
==================

List of basic routes: 

| Route | HTTP | Description |
| :----------- |	:---------- | :----------:|
| [/api/hello?name={name}][3] | GET | Print hello, {name} !

List of user routes:

| Route | HTTP | Description |
| :----------- |	:---------- | ---------- |
| [/api/users][3] | GET | Get all the users |
| [/api/users/:id][3] | GET | Get a single user |
| [/api/users][3] | POST | Create a user |
| [/api/users/:id][3] | DELETE | Delete a user |
| [/api/users/:id][3] | PUT | Update a user with new info |
| [/api/users/:id][3] | PATCH | Update a user with specific new info |

List of fiter routes:

| Route | HTTP | Description |
| :----------- |	:---------- | ---------- |
| [/api/users?name="{name}"][3] | GET | Get ${name} the users |
| [/api/users?name="${na}"][3] | GET | Get {na} single user |



--------

  [1]: http://math.stackexchange.com/
  [2]: http://daringfireball.net/projects/markdown/syntax "Markdown"
  [3]: https://github.com/jmcmanus/pagedown-extra "Pagedown Extra"
  [4]: http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference
  [5]: https://code.google.com/p/google-code-prettify/
  [6]: http://highlightjs.org/
  [7]: http://bramp.github.io/js-sequence-diagrams/
  [8]: http://adrai.github.io/flowchart.js/
