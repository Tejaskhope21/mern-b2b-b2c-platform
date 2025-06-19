import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';

import  authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';

// Public routes
router.get('/', getProducts);
router.get('/:id', getProductById);

// Admin-only routes
router.post('/', authMiddleware, roleMiddleware(['admin']), createProduct);
router.put('/:id', authMiddleware, roleMiddleware(['admin']), updateProduct);
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), deleteProduct);

export default router;