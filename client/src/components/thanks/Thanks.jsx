import React, { useEffect } from "react";
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

  const { push } = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const addedPurchaseHistory = async () => {
      await addPurchaseHistory(purchaseHistory, currentUserId);
      dispatch(checkOut());
    };
    addedPurchaseHistory();
  }, [purchaseHistory, currentUserId, dispatch]);

  return (
    <div className="thanks">
      <div className="cover" />
      <div className="contents">
        <div className="title">
          <h1>S&A</h1>
        </div>
        <div className="text">
          <h2>Thank you.</h2>
          <h2>Payment is success !!</h2>
        </div>
        <Button value="Ok" inverted onClick={() => push("/account")} />
      </div>
    </div>
  );
};

export default ThanksPage;
