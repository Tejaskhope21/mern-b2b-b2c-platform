import express from 'express';
const router = express.Router();

import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
import {
  requestQuote,
  getQuotes,
  updateQuoteStatus
} from '../controllers/quoteController.js';

router.post('/', authMiddleware, roleMiddleware('B2B'), requestQuote);
router.get('/', authMiddleware, roleMiddleware('B2B'), getQuotes);
router.put('/:id', authMiddleware, roleMiddleware('admin'), updateQuoteStatus);

export default router;
