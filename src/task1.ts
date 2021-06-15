/**
 * @param {object} cartItem
 * @param {object} cartItem.product
 * @param {string} cartItem.product.name
 * @param {number} cartItem.product.price
 * @param {number} cartItem.qty
 */
function getSubtotal(cartItem) {
  return cartItem.product.price * cartItem.qty;
}

/**
 * @param {object} cart
 * @param {Array<object>} cart.items
 * @return {number}
 */
function getCartTotal(cart) {
  return cart.items
    .map((item) => getSubtotal(item))
    .reduce((total, price) => total + price, 0);
}

const cart = {
  items: [
    { product: { price: 20 }, qty: 2 },
    { product: { price: 10 }, qty: 1 },
  ],
};

console.log(getCartTotal(cart));
