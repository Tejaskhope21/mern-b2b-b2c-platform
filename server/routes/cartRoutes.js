import express from 'express';
const router = express.Router();
import {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
} from '../controllers/cartController.js';
import authMiddleware from '../middleware/authMiddleware.js'; 
import roleMiddleware from '../middleware/roleMiddleware.js';

// B2C-only routes
router.get('/', authMiddleware, roleMiddleware(['B2C']), getCart);
router.post('/', authMiddleware, roleMiddleware(['B2C']), addToCart);
router.put('/', authMiddleware, roleMiddleware(['B2C']), updateCartItem);
router.delete('/:productId', authMiddleware, roleMiddleware(['B2C']), removeFromCart);

export default router;