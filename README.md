#### Membuat API untuk user
di mana api ini nantinya bisa di gunakan untuk register dan login

> berikut adalah daftar dasar list sebuah route atau yang kita kenal sebagai enpoint atau url yang akan kita gunakan

|  Route | HTTP |DESCRIPTION  |
| ------------ | ------------ | ------------ |
|  /api/users | POST  | Untuk menambahkan user |
| /api/users | GET  | unutk menampilkan semua user  |
|/api/users/:id  | GET  | Menampilkan berdasrkan id yang di pilih |
| /api/user/:id  | DELETE  | menghapus bersarkan ID yang di pilih |
|/api/users/:id | PUT | Mengedit berdasarkan ID yang di pilih |

**Cara menggunakannya**
dengan menggunakan npm

        npm install  => unutk meng install package.json
        npm start => untuk menjalankan
        npm run dev => untuk menjalankan juga
