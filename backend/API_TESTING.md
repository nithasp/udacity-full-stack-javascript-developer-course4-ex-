# API Testing (cURL)

> Base URL: `http://localhost:3000` -- run `npm run watch` first.

---

## Quick Walkthrough

Run these in order to seed data, then verify the two special features.

```bash
# 1. Create a user and save the token
curl -s -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"first_name":"John","last_name":"Doe","username":"johndoe","password":"pass123"}'

TOKEN="paste.your.token.here"

# 2. Create a few products
curl -s -X POST http://localhost:3000/products \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"name":"Keyboard","price":49.99,"category":"electronics"}'

curl -s -X POST http://localhost:3000/products \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"name":"Mouse","price":29.99,"category":"electronics"}'

curl -s -X POST http://localhost:3000/products \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"name":"Monitor","price":299.99,"category":"electronics"}'

# 3. Create an order and add products to it
curl -s -X POST http://localhost:3000/orders \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"user_id":1}'

curl -s -X POST http://localhost:3000/orders/1/products \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"product_id":1,"quantity":5}'

curl -s -X POST http://localhost:3000/orders/1/products \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"product_id":2,"quantity":2}'

curl -s -X POST http://localhost:3000/orders/1/products \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"product_id":3,"quantity":1}'

# 4. Complete the order
curl -s -X PUT http://localhost:3000/orders/1 \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"status":"complete"}'

# 5. Verify: most popular products (sorted by total quantity ordered)
curl http://localhost:3000/products/popular

# 6. Verify: user show includes 5 most recent purchases
curl http://localhost:3000/users/1 -H "Authorization: Bearer $TOKEN"
```

---

## All Endpoints

### 1. Users

**Create user** (returns a JWT token -- save it):
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"first_name":"John","last_name":"Doe","username":"johndoe","password":"pass123"}'
```

**Authenticate** (also returns a token):
```bash
curl -X POST http://localhost:3000/users/authenticate \
  -H "Content-Type: application/json" \
  -d '{"username":"johndoe","password":"pass123"}'
```

Save the token from either response, then use it as `TOKEN` below:

```bash
TOKEN="paste.your.token.here"
```

**List all users:**
```bash
curl http://localhost:3000/users -H "Authorization: Bearer $TOKEN"
```

**Get user by id** (includes 5 most recent purchases):
```bash
curl http://localhost:3000/users/1 -H "Authorization: Bearer $TOKEN"
```

**Update user:**
```bash
curl -X PUT http://localhost:3000/users/1 \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"first_name":"Jane"}'
```

**Delete user:**
```bash
curl -X DELETE http://localhost:3000/users/1 -H "Authorization: Bearer $TOKEN"
```

### 2. Products

**Create product:**
```bash
curl -X POST http://localhost:3000/products \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"Widget","price":9.99,"category":"gadgets"}'
```

**List all products:**
```bash
curl http://localhost:3000/products
```

**Filter by category:**
```bash
curl "http://localhost:3000/products?category=gadgets"
```

**Most popular products** (ranked by total quantity ordered):
```bash
curl http://localhost:3000/products/popular
```

**Get product by id:**
```bash
curl http://localhost:3000/products/1
```

**Update product:**
```bash
curl -X PUT http://localhost:3000/products/1 \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"price":14.99}'
```

**Delete product:**
```bash
curl -X DELETE http://localhost:3000/products/1 -H "Authorization: Bearer $TOKEN"
```

### 3. Orders

**Create order:**
```bash
curl -X POST http://localhost:3000/orders \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"user_id":1}'
```

**Add product to order:**
```bash
curl -X POST http://localhost:3000/orders/1/products \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"product_id":1,"quantity":3}'
```

**List all orders:**
```bash
curl http://localhost:3000/orders -H "Authorization: Bearer $TOKEN"
```

**Filter orders:**
```bash
curl "http://localhost:3000/orders?status=active&userId=1" -H "Authorization: Bearer $TOKEN"
```

**Get order by id:**
```bash
curl http://localhost:3000/orders/1 -H "Authorization: Bearer $TOKEN"
```

**Get products in order:**
```bash
curl http://localhost:3000/orders/1/products -H "Authorization: Bearer $TOKEN"
```

**Current (active) orders for user:**
```bash
curl http://localhost:3000/orders/user/1/current -H "Authorization: Bearer $TOKEN"
```

**Completed orders for user:**
```bash
curl http://localhost:3000/orders/user/1/completed -H "Authorization: Bearer $TOKEN"
```

**Complete an order:**
```bash
curl -X PUT http://localhost:3000/orders/1 \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"status":"complete"}'
```

**Delete order:**
```bash
curl -X DELETE http://localhost:3000/orders/1 -H "Authorization: Bearer $TOKEN"
```
