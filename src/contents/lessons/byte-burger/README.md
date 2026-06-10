# 🍔 ByteBurger — Digital Fast Food Ordering App

## Storyline

Kamu baru direkrut sebagai Frontend Engineer di sebuah restoran cepat saji futuristik bernama **ByteBurger**.  
ByteBurger ingin membangun aplikasi pemesanan makanan digital yang modern, cepat, dan estetik.

Tugasmu: membuat **React Fast Food Ordering App** dengan fitur CRUD menu burger, halaman lengkap dengan React Router, state global menggunakan Redux, UI dengan TailwindCSS, serta komunikasi API menggunakan axios.

Gunakan kreativitasmu agar aplikasinya terlihat keren — karena ini akan ditampilkan ke investor ByteBurger!

---

## Requirements

Gunakan 3 teknologi berikut:

- **React Router**
- **React Redux**
- **React Hooks (useState, useEffect)**

UI & Tools:

- **TailwindCSS**
- **axios**
- **react-icons / lucide-react**

CRUD:

- Data utama: **burgers** (menu)
- Boleh menambah kategori, addon, drinks, dll (opsional)

---

## Objectives

### 🍟 Task 1 — Routing (Minimal 6 Halaman)

Buat minimal halaman berikut:

1. **Home Page**

   - Banner hero ByteBurger
   - Tombol menuju menu

2. **Menu List Page**

   - List semua burger
   - Tombol: _Detail_, _Edit_, _Delete_
   - Tombol “Add New Burger”

3. **Burger Detail Page**

   - Detail lengkap burger: nama, harga, kalori, deskripsi

4. **Create Burger Page**

   - Form tambah menu burger
   - Field wajib: name, price, calories, category, imageURL

5. **Edit Burger Page**

   - Form edit data burger
   - Preloaded data

6. **Cart Page (Redux Required)**
   - Tambah burger ke keranjang
   - Tampilkan cart items dari Redux store
   - Update qty, hapus item

_(Tambahan opsional: Checkout page, Profile page, Promo page)_

---

### 🍔 Task 2 — State Management with Redux

Buat Redux store dengan minimal:

- `cartSlice` → menambah, menghapus, mengubah jumlah item di cart
- (Opsional) `menuSlice` → memanage menu global

Gunakan:

- `useSelector`
- `useDispatch`

---

### 🍖 Task 3 — CRUD Menu (axios)

Implementasikan CRUD penuh:

- **GET** list burger
- **GET** detail burger
- **POST** tambah burger
- **PUT/PATCH** update burger
- **DELETE** hapus burger

Tampilkan loading & error state (bebas desainnya).

---

### 🍹 Task 4 — UI / Components

Gunakan TailwindCSS + icons untuk membuat minimal:

- Navbar
- Card Burger
- Button utama
- Cart Bubble Icon (jumlah item)
- Footer sederhana

Aplikasi harus:

- Responsif
- Clean
- Fresh & modern (tema fast food futuristik)

---

### 🎁 Bonus (Optional)

- Animasi (framer-motion)
- Filter by category
- Search burger
- Dark mode toggle
- Checkout simulation

---

## Output Akhir

- Aplikasi ByteBurger lengkap
- CRUD bekerja
- Redux cart bekerja
- Routing lengkap
- UI rapi
- Reusable components
- Repo GitHub

Selamat bersenang-senang membangun restoran masa depan! 🍔⚡
