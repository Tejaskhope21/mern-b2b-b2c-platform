const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPassword = (password) => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
};

const isValidName = (name) => {
  return name && name.trim().length >= 2;
};

const isValidProduct = ({ name, price, category, stock }) => {
  return (
    name &&
    name.trim().length >= 2 &&
    typeof price === 'number' &&
    price > 0 &&
    category &&
    category.trim().length >= 2 &&
    typeof stock === 'number' &&
    stock >= 0
  );
};

const isValidQuote = ({ productName, quantity, comments }) => {
  return (
    productName &&
    productName.trim().length >= 2 &&
    typeof quantity === 'number' &&
    quantity > 0 &&
    (comments === undefined || typeof comments === 'string')
  );
};

const isValidOrder = ({ shippingAddress, paymentMethod }) => {
  return (
    shippingAddress &&
    shippingAddress.trim().length >= 5 &&
    paymentMethod &&
    ['Credit Card', 'PayPal'].includes(paymentMethod)
  );
};

module.exports = {
  isValidEmail,
  isValidPassword,
  isValidName,
  isValidProduct,
  isValidQuote,
  isValidOrder,
};