# 🧱 FULL DATABASE SCHEMA (WITH DATA TYPES)

## 1️⃣ Users

| Field       | Type                         | Notes            |
| ----------- | ---------------------------- | ---------------- |
| id          | UUID (PK)                    | default uuidv4   |
| firebaseUid | STRING                       | unique           |
| email       | STRING                       | unique, required |
| role        | ENUM('admin','host','guest') | required         |
| displayName | STRING                       | optional         |
| avatar      | TEXT                         | optional         |
| createdAt   | DATE                         | default NOW      |

---

## 2️⃣ Profiles

| Field         | Type               | Notes        |
| ------------- | ------------------ | ------------ |
| id            | UUID (PK)          | uuidv4       |
| userId        | UUID (FK Users.id) | unique (1:1) |
| medievalTitle | STRING             | optional     |
| address       | TEXT               | optional     |
| rating        | FLOAT              | default 0    |
| bio           | TEXT               | optional     |

---

## 3️⃣ Listings

| Field         | Type                                | Notes          |
| ------------- | ----------------------------------- | -------------- |
| id            | UUID (PK)                           | uuidv4         |
| hostId        | UUID (FK Users.id)                  | required       |
| title         | STRING                              | required       |
| description   | TEXT                                | required       |
| location      | STRING                              | required       |
| pricePerNight | INTEGER                             | required       |
| capacity      | INTEGER                             | required       |
| slug          | STRING                              | unique         |
| status        | ENUM('active','inactive','deleted') | default active |

---

## 4️⃣ ListingImages

| Field     | Type                  | Notes          |
| --------- | --------------------- | -------------- |
| id        | UUID (PK)             | uuidv4         |
| listingId | UUID (FK Listings.id) | required       |
| url       | TEXT                  | required       |
| order     | INTEGER               | sequence index |

---

## 5️⃣ Categories

| Field | Type      | Notes            |
| ----- | --------- | ---------------- |
| id    | UUID (PK) | uuidv4           |
| name  | STRING    | unique, required |

---

## 6️⃣ ListingCategories (Junction)

| Field      | Type                    | Notes   |
| ---------- | ----------------------- | ------- |
| listingId  | UUID (FK Listings.id)   | PK part |
| categoryId | UUID (FK Categories.id) | PK part |

Composite PK → (listingId, categoryId)

---

## 7️⃣ Availability

| Field     | Type                                   | Notes    |
| --------- | -------------------------------------- | -------- |
| id        | UUID (PK)                              | uuidv4   |
| listingId | UUID (FK Listings.id)                  | required |
| dateFrom  | DATE                                   | required |
| dateTo    | DATE                                   | required |
| status    | ENUM('available','reserved','blocked') | required |

---

## 8️⃣ Carts

| Field  | Type               | Notes                      |
| ------ | ------------------ | -------------------------- |
| id     | UUID (PK)          | uuidv4                     |
| userId | UUID (FK Users.id) | unique (1:1 cart per user) |

---

## 9️⃣ CartItems

| Field         | Type                  | Notes     |
| ------------- | --------------------- | --------- |
| id            | UUID (PK)             | uuidv4    |
| cartId        | UUID (FK Carts.id)    | required  |
| listingId     | UUID (FK Listings.id) | required  |
| startDate     | DATE                  | required  |
| endDate       | DATE                  | required  |
| qty           | INTEGER               | default 1 |
| priceSnapshot | INTEGER               | required  |

---

## 🔟 Invoices

| Field       | Type                              | Notes           |
| ----------- | --------------------------------- | --------------- |
| id          | UUID (PK)                         | uuidv4          |
| userId      | UUID (FK Users.id)                | required        |
| totalAmount | INTEGER                           | required        |
| status      | ENUM('pending','paid','canceled') | default pending |
| invoiceDate | DATE                              | default NOW     |

---

## 1️⃣1️⃣ InvoiceItems

| Field         | Type                  | Notes    |
| ------------- | --------------------- | -------- |
| id            | UUID (PK)             | uuidv4   |
| invoiceId     | UUID (FK Invoices.id) | required |
| listingId     | UUID (FK Listings.id) | required |
| startDate     | DATE                  | required |
| endDate       | DATE                  | required |
| priceSnapshot | INTEGER               | required |

---

## 1️⃣2️⃣ Notifications

| Field  | Type                                              | Notes         |
| ------ | ------------------------------------------------- | ------------- |
| id     | UUID (PK)                                         | uuidv4        |
| userId | UUID (FK Users.id)                                | required      |
| type   | ENUM('system','invoice','booking','host','admin') | required      |
| title  | STRING                                            | required      |
| body   | TEXT                                              | required      |
| link   | STRING                                            | optional      |
| read   | BOOLEAN                                           | default false |
