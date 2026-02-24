# API Requirements

## API Endpoints

### Users
| Method | Route                  | Auth | Description          |
| ------ | ---------------------- | ---- | -------------------- |
| GET    | `/users`               | JWT  | List all users       |
| GET    | `/users/:id`           | JWT  | Get user by id       |
| POST   | `/users`               | No   | Create user          |
| PUT    | `/users/:id`           | JWT  | Update user          |
| DELETE | `/users/:id`           | JWT  | Delete user          |
| POST   | `/users/authenticate`  | No   | Authenticate user    |

### Products
| Method | Route                  | Auth | Description                          |
| ------ | ---------------------- | ---- | ------------------------------------ |
| GET    | `/products`            | No   | List all products (`?category=` to filter) |
| GET    | `/products/popular`    | No   | Get most popular products            |
| GET    | `/products/:id`        | No   | Get product by id                    |
| POST   | `/products`            | JWT  | Create product                       |
| PUT    | `/products/:id`        | JWT  | Update product                       |
| DELETE | `/products/:id`        | JWT  | Delete product                       |

### Orders
| Method | Route                              | Auth | Description                    |
| ------ | ---------------------------------- | ---- | ------------------------------ |
| GET    | `/orders`                          | JWT  | List orders (`?status=`&`?userId=` to filter) |
| GET    | `/orders/:id`                      | JWT  | Get order by id                |
| GET    | `/orders/user/:userId/current`     | JWT  | Get user's active orders       |
| GET    | `/orders/user/:userId/completed`   | JWT  | Get user's completed orders    |
| GET    | `/orders/:id/products`             | JWT  | Get products in an order       |
| POST   | `/orders`                          | JWT  | Create order                   |
| POST   | `/orders/:id/products`             | JWT  | Add product to order           |
| PUT    | `/orders/:id`                      | JWT  | Update order status            |
| DELETE | `/orders/:id`                      | JWT  | Delete order                   |

**Auth**: Protected routes require header `Authorization: Bearer <token>`. Tokens are returned on user creation and authentication.

## Database Schema

### users
| Column     | Type         | Constraints              |
| ---------- | ------------ | ------------------------ |
| id         | SERIAL       | PRIMARY KEY              |
| first_name | VARCHAR(100) | NOT NULL                 |
| last_name  | VARCHAR(100) | NOT NULL                 |
| username   | VARCHAR(100) | UNIQUE NOT NULL          |
| password   | VARCHAR(255) | NOT NULL                 |

### products
| Column   | Type           | Constraints |
| -------- | -------------- | ----------- |
| id       | SERIAL         | PRIMARY KEY |
| name     | VARCHAR(255)   | NOT NULL    |
| price    | NUMERIC(10, 2) | NOT NULL    |
| category | VARCHAR(100)   |             |

### orders
| Column  | Type        | Constraints                                           |
| ------- | ----------- | ----------------------------------------------------- |
| id      | SERIAL      | PRIMARY KEY                                           |
| user_id | INTEGER     | REFERENCES users(id) ON DELETE CASCADE                |
| status  | VARCHAR(20) | DEFAULT 'active', CHECK IN ('active', 'complete')     |

### order_products
| Column     | Type    | Constraints                            |
| ---------- | ------- | -------------------------------------- |
| id         | SERIAL  | PRIMARY KEY                            |
| order_id   | INTEGER | REFERENCES orders(id) ON DELETE CASCADE  |
| product_id | INTEGER | REFERENCES products(id) ON DELETE CASCADE |
| quantity   | INTEGER | NOT NULL, DEFAULT 1                    |

## Data Shapes
```typescript
User      { id: number, first_name: string, last_name: string, username: string, password: string }
Product   { id: number, name: string, price: number, category?: string }
Order     { id: number, user_id: number, status: 'active' | 'complete' }
OrderProduct { id: number, order_id: number, product_id: number, quantity: number }
```
