# Storefront Backend API

## Setup

### 1. Install packages
```bash
npm install
```

### 2. Database setup
The application uses **PostgreSQL** running on **port 5432**.

**Option A -- Docker (recommended):**
```bash
docker-compose up -d
```
This starts PostgreSQL and automatically creates the user, `storefront_dev` database, and `storefront_test` database (via `init-db.sh`). You can skip to step 4.

**Option B -- Local PostgreSQL:**
```sql
CREATE USER storefront_user WITH PASSWORD 'storefront_pass';
CREATE DATABASE storefront_dev;
CREATE DATABASE storefront_test;
GRANT ALL PRIVILEGES ON DATABASE storefront_dev TO storefront_user;
GRANT ALL PRIVILEGES ON DATABASE storefront_test TO storefront_user;
```

### 3. Environment variables
Create a `.env` file in the project root:

```
# Environment
ENV=dev

# Database Configuration
POSTGRES_HOST=127.0.0.1
POSTGRES_PORT=5432
POSTGRES_DB=storefront_dev
POSTGRES_TEST_DB=storefront_test
POSTGRES_USER=storefront_user
POSTGRES_PASSWORD=storefront_pass

# Bcrypt
BCRYPT_PASSWORD=your-secret-pepper-change-this
SALT_ROUNDS=10

# JWT
TOKEN_SECRET=your-secret-token-change-this

# Server
PORT=3000
```

### 4. Run database migrations
```bash
npm run migrate:up
```

### 5. Start the server
```bash
npm run watch    # development (auto-reload)
npm start        # production (run npm run build first)
```

### 6. Run tests
```bash
npm test
```

## API Testing

See [API_TESTING.md](API_TESTING.md) for ready-to-use cURL commands for every endpoint.

## Ports

| Service  | Port |
| -------- | ---- |
| Backend  | 3000 |
| Database | 5432 |

## Scripts

| Command              | Description                |
| -------------------- | -------------------------- |
| `npm run watch`      | Dev server with auto-reload |
| `npm run build`      | Compile TypeScript          |
| `npm start`          | Run compiled server         |
| `npm test`           | Run test suite              |
| `npm run migrate:up` | Run migrations              |
| `npm run migrate:down` | Rollback last migration   |
| `npm run migrate:reset` | Reset all migrations     |