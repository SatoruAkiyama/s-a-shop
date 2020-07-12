// import React from "react";
// import clearItemFromCart from "../../redux/actions/clearItemFromCart";
// import { addItem } from "../../redux/cart/cartActions";
// import removeItem from "../../redux/actions/removeItem";
// import { connect } from "react-redux";
// import "./CheckoutItem.scss";
// import { bindActionCreators } from "redux";

// const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
//   const { name, imageUrl, price, quantity } = cartItem;
//   return (
//     <div className="checkout-item">
//       <div className="image-container">
//         <img src={imageUrl} alt={imageUrl} />
//       </div>
//       <span className="name">{name}</span>
//       <span className="quantity">
//         <div className="arrow" onClick={() => removeItem(cartItem)}>
//           &#10094;
//         </div>
//         <span className="value">{quantity}</span>
//         <div className="arrow" onClick={() => addItem(cartItem)}>
//           &#10095;
//         </div>
//       </span>
//       <span className="price">${price}</span>
//       <span
//         className="remove-button"
//         onClick={() => clearItemFromCart(cartItem)}
//       >
//         &#10005;
//       </span>
//     </div>
//   );
// };

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//     {
//       clearItemFromCart,
//       addItem,
//       removeItem,
//     },
//     dispatch
//   );
// };

// export default connect(null, mapDispatchToProps)(CheckoutItem);

import React from "react";

import { connect } from "react-redux";

import { clearItem, addItem, removeItem } from "../../redux/cart/cartActions";

import "./CheckoutItem.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItem)}>
        x
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
