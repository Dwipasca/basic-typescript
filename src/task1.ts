interface Cart {
  items: Array<CartItem>;
}

interface CartItem {
  product: Product;
  qty: number;
}

interface Product {
  name?: string;
  price: number;
}

function getSubtotal(cartItem: CartItem): number {
  return cartItem.product.price * cartItem.qty;
}

function getCartTotal(cart: Cart): number {
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
