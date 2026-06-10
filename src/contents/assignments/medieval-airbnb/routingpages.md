# 🧭 FRONTEND ROUTING & PAGE DETAILS

| Route                   | Page              |
| ----------------------- | ----------------- |
| /                       | Home              |
| /login                  | Login             |
| /register               | Register          |
| /listings               | Listing Explore   |
| /listings/:id           | Listing Detail    |
| /host/dashboard         | Host dashboard    |
| /host/listings          | Host listing list |
| /host/listings/new      | Create listing    |
| /host/listings/:id/edit | Edit listing      |
| /cart                   | Cart page         |
| /checkout               | Checkout          |
| /invoices               | Invoice list      |
| /invoices/:id           | Invoice detail    |
| /notifications          | Notifications     |
| /profile                | Profile page      |

---

# 🧱 PAGE DETAILS (DENGAN FITUR)

## 🏠 **Home**

- Hero banner bertema Medieval
- CTA: Explore listings
- Listing populer

---

## 🔎 **Listing Explore**

Fitur lengkap:

- Filtering:
  - kategori (Castle, Wooden Hut, Mage Tower, War Tent, Arena)
  - harga (min, max)
  - kapasitas
  - lokasi
  - status available
- Sorting:
  - Harga termurah
  - Harga termahal
  - Rating
  - Popularitas
- Pagination
- Search bar
- Cards dengan:
  - gambar utama
  - harga per malam
  - rating
  - lokasi

---

## 🏰 **Listing Detail**

- Carousel images
- Detail deskripsi
- Fasilitas
- Review (future)
- Kalender availability
- Form pilih tanggal
- Tombol **Add to Cart**

---

## 🛒 **Cart**

- Daftar item + tanggal
- Update tanggal
- Update qty (jika listing punya kapasitas grup)
- Hapus item
- Total real-time
- Tombol **Proceed to Checkout**

---

## 💳 **Checkout**

- Ringkasan pesanan
- Snapshot harga
- Informasi user (readonly)
- Kontrol tanggal
- Konfirmasi → hit API `/cart/checkout`

---

## 🧾 **Invoice List & Detail**

- Riwayat invoice
- Badge status: pending, paid, canceled
- Detail invoice:
  - items
  - tanggal
  - total
  - snapshot harga

---

## 🛡️ **Host Dashboard**

- Statistik host:
  - total listing
  - total booking
  - earnings (future)
- Chart (future)

---

## 🏯 **Host Listing Management**

- CRUD listing
- Upload gambar
- Manage categories
- Manage availability
- Edit harga, status

---

## 🔔 **Notification Center**

- List notifikasi user
- Mark as read

---

## 🙋 **Profile Page**

- Edit avatar
- Edit displayName
- Edit medievalTitle
