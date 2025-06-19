import express from 'express';
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
} from '../controllers/orderController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';

const router = express.Router();

// User routes (B2C and B2B)
router.post('/', authMiddleware, roleMiddleware(['B2C', 'B2B']), createOrder);
router.get('/', authMiddleware, roleMiddleware(['B2C', 'B2B']), getOrders);
router.get('/:id', authMiddleware, roleMiddleware(['B2C', 'B2B']), getOrderById);

// Admin-only route
router.put('/:id', authMiddleware, roleMiddleware(['admin']), updateOrderStatus);

export default router;
