export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};
