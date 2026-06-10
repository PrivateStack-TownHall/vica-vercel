//////////////////////////////////////////////////////
// 🏰 MEDIEVAL AIRBNB — DATABASE SCHEMA (PostgreSQL)
//////////////////////////////////////////////////////

```
Table users {
  id              serial       [pk]
  firebaseUid     varchar(255) [unique]
  email           varchar(255) [unique, not null]
  role            varchar(50)  // traveler, host, admin
  displayName     varchar(255)
  avatar          text
  createdAt       timestamp    [default: `now()`]
}

Table profiles {
  id              serial       [pk]
  userId          int          [not null, unique, ref: > users.id]
  medievalTitle   varchar(255) // Lord, Lady, Squire, Knight
  address         text
  rating          numeric(3,2)
  bio             text
}

Table listings {
  id              serial       [pk]
  hostId          int          [not null, ref: > users.id]
  title           varchar(255)
  description     text
  location        varchar(255)
  pricePerNight   int
  capacity        int
  slug            varchar(255) [unique]
  status          varchar(50)  // active, inactive, draft
}

Table listingImages {
  id              serial       [pk]
  listingId       int          [ref: > listings.id]
  url             text
  order           int
}

Table categories {
  id              serial       [pk]
  name            varchar(255) [unique]
}
```

//////////////////////////////////////////////////////
// JUNCTION TABLES
//////////////////////////////////////////////////////

```
Table listingCategories {
  listingId       int [ref: > listings.id]
  categoryId      int [ref: > categories.id]

  Note: "PRIMARY KEY (listingId, categoryId)"
}
```

//////////////////////////////////////////////////////

```
Table availability {
  id              serial       [pk]
  listingId       int          [ref: > listings.id]
  dateFrom        date
  dateTo          date
  status          varchar(50)  // available, booked, blocked
}

Table carts {
  id              serial       [pk]
  userId          int [unique, ref: > users.id]
}

Table cartItems {
  id              serial       [pk]
  cartId          int [ref: > carts.id]
  listingId       int [ref: > listings.id]
  startDate       date
  endDate         date
  qty             int
  priceSnapshot   int
}

Table invoices {
  id              serial       [pk]
  userId          int [ref: > users.id]
  totalAmount     int
  status          varchar(50) // created, pending, paid, cancelled
  invoiceDate     timestamp    [default: `now()`]
}

Table invoiceItems {
  id              serial       [pk]
  invoiceId       int [ref: > invoices.id]
  listingId       int [ref: > listings.id]
  startDate       date
  endDate         date
  priceSnapshot   int
}

Table notifications {
  id              serial       [pk]
  userId          int          [ref: > users.id]
  type            varchar(50)
  title           varchar(255)
  body            text
  link            text
  read            boolean [default: false]
}
```
