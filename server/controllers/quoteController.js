import Quote from '../models/Quote.js';

// Request a quote (B2B only)
export const requestQuote = async (req, res) => {
  const { productName, quantity, comments } = req.body;

  try {
    const quote = await Quote.create({
      user: req.user._id,
      productName,
      quantity,
      comments,
    });
    res.status(201).json(quote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all quotes for a user (B2B only)
export const getQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find({ user: req.user._id });
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update quote status (admin only)
export const updateQuoteStatus = async (req, res) => {
  const { status } = req.body;

  try {
    const quote = await Quote.findById(req.params.id);
    if (quote) {
      quote.status = status || quote.status;
      const updatedQuote = await quote.save();
      res.json(updatedQuote);
    } else {
      res.status(404).json({ message: 'Quote not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
