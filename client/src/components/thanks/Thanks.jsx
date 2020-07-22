import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  selectCurrentUserId,
  selectCurrentUserPurchaseHistory,
} from "../../redux/user/userSelector";

import { checkOut } from "../../redux/cart/cartActions";

import { addPurchaseHistory } from "../../firebase/firebaseUtil";

import Button from "../button/Button";

import "./Thanks.scss";

const ThanksPage = () => {
  const currentUserId = useSelector(selectCurrentUserId);
  const purchaseHistory = useSelector(selectCurrentUserPurchaseHistory);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleCheckout = async () => {
    await addPurchaseHistory(purchaseHistory, currentUserId);
    dispatch(checkOut());
    history.push("/account");
  };
  return (
    <div className="thanks">
      <div className="image" />
      <div className="contents">
        <div className="title">
          <h1>S&A</h1>
        </div>
        <div className="text">
          <h2>Payment is success !!</h2>
        </div>
        <Button value="Ok" inverted onClick={handleCheckout} />
      </div>
    </div>
  );
};

export default ThanksPage;
