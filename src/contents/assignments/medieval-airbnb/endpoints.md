# 🌐 API ENDPOINTS

| Method | Endpoint                | Role       | Description                  |
| ------ | ----------------------- | ---------- | ---------------------------- |
| POST   | /auth/verify            | All        | Verifikasi Firebase ID token |
| GET    | /users/me               | Auth       | Ambil profil                 |
| PUT    | /users/me               | Auth       | Update profil                |
| GET    | /listings               | Public     | List all listings + filters  |
| GET    | /listings/:id           | Public     | Listing detail               |
| POST   | /listings               | Host       | Create listing               |
| PUT    | /listings/:id           | Host/Admin | Update listing               |
| DELETE | /listings/:id           | Host/Admin | Delete listing               |
| GET    | /cart                   | Guest      | Get cart                     |
| POST   | /cart/items             | Guest      | Add to cart                  |
| PUT    | /cart/items/:id         | Guest      | Update item                  |
| DELETE | /cart/items/:id         | Guest      | Remove                       |
| POST   | /cart/checkout          | Guest      | Checkout → create invoice    |
| GET    | /invoices               | Guest      | List invoices                |
| GET    | /invoices/:id           | Guest      | Detail invoice               |
| GET    | /notifications          | Auth       | User notifications           |
| PUT    | /notifications/:id/read | Auth       | Mark read                    |

## 📝 Notes

- Checkout harus memakai **Sequelize Transaction**
- Availability harus di-hard-checked saat checkout
- Listing → Categories memakai junction table (M:M)
