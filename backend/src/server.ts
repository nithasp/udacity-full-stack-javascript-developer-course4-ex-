import express, { Request, Response } from 'express';
import cors from 'cors';
import authRoutes from './handlers/auth';
import userRoutes from './handlers/users';
import productRoutes from './handlers/products';
import orderRoutes from './handlers/orders';
import { errorMiddleware } from './utils/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Storefront API is running!' });
});

// Routes
authRoutes(app);
userRoutes(app);
productRoutes(app);
orderRoutes(app);

// Error handling middleware (MUST BE LAST!)
app.use(errorMiddleware);

// Only start the server if not in test environment
if (process.env.ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
