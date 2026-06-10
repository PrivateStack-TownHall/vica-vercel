# 🔄 CART → INVOICE FLOW (DETAILED VERSION)

Flow ini menjelaskan bagaimana Traveler menambahkan listing ke keranjang, melakukan checkout, hingga sistem membuat invoice & notifikasi secara otomatis.  
Semua proses checkout wajib menggunakan **database transaction** untuk memastikan data tetap konsisten.

---

# 1️⃣ ADD TO CART (Traveler)

### 📌 Alur

1. Traveler memilih **listing**, menentukan **startDate** & **endDate**.
2. Backend melakukan **Soft Availability Check**:
   - Mengecek apakah tanggal yang dipilih belum diblok atau belum di-reserve oleh order lain.
   - Tidak mengunci (lock) ketersediaan, hanya pengecekan awal.
3. Jika lolos:
   - Sistem membuat _CartItems_ berisi:
     - listingId
     - startDate, endDate
     - qty
     - **priceSnapshot** (harga pada saat dimasukkan)
4. Traveler dapat mengedit atau menghapus item dari cart kapan saja sebelum checkout.

### 🎯 Tujuan

- Menyimpan rencana booking user tanpa mengubah availability.
- Menjaga harga agar stabil (snapshot).

---

# 2️⃣ CHECKOUT (Create Invoice)

Checkout dieksekusi dalam **1 transaction atomic** agar tidak ada data yang setengah masuk.

### 📌 Langkah-langkah Di Dalam Transaction

#### 1. Hard Availability Check

- Sistem mengecek ulang availability dengan cara yang lebih ketat.
- Jika tanggal bertabrakan dengan booking lain yang sudah dibayar, checkout dibatalkan.

#### 2. Create Invoice

Membuat data invoice:

- userId
- totalAmount
- invoiceDate
- status default: `pending`

#### 3. Create InvoiceItems

Untuk tiap CartItems:

- listingId
- startDate, endDate
- priceSnapshot
- dihitung total per item

#### 4. Clear Cart

- Hapus semua CartItems milik user.
- Cart tetap ada, hanya itemnya kosong.

#### 5. Reserve Availability (Optional)

- Sistem membuat blok tanggal agar listing tidak bisa dibooking di tanggal yang sama.
- Bisa berupa:
  - Insert ke tabel _Availability_
  - Atau update status ke `reserved`

Jika salah satu langkah gagal → seluruh transaksi di-rollback.

---

# 3️⃣ HISTORY SYSTEM (Auto Logging)

Setiap event penting dicatat otomatis ke tabel `Histories` (opsional tapi sangat berguna).

### 📌 Event yang disimpan:

- **add_to_cart** → ketika Traveler menambah item ke cart.
- **invoice_created** → saat checkout berhasil.
- **invoice_paid** (future) → jika suatu hari fitur pembayaran diaktifkan.
- **listing_created** → ketika Host membuat listing baru.

### 📌 Manfaat:

- Audit log
- Activity timeline
- Riwayat transaksi user & host

---

# 4️⃣ NOTIFICATIONS (Real-Time or Delayed)

Setelah invoice berhasil dibuat, sistem mengirim notifikasi ke berbagai role.

### 👤 Traveler

- “Invoice berhasil dibuat”
- Link menuju halaman invoice detail

### 🛡️ Host

- “Traveler memesan listing kamu”
- Menyertakan nama listing + tanggal booking

### 🏰 Admin (Opsional)

- Digunakan jika ingin membuat flow approval
- Contoh: “Booking baru menunggu persetujuan”

---

# ✅ FLOW BERAKHIR

Cart → Checkout → Invoice → Notifications  
Semua dianggap selesai **ketika invoice berhasil dibuat & notifikasi berhasil disimpan**.

Sistem memastikan:

- Tidak ada double booking
- Harga konsisten (price snapshot)
- Semua proses atomik (transaction)
- Semua role mendapatkan notifikasi yang relevan
