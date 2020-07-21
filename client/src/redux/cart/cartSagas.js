import { all, call, takeLatest, put } from "redux-saga/effects";

import UserActionTypes from "../user/userTypes";
import { clearCart } from "./cartActions";
import CartActionTypes from "./cartTypes";

export function* clearCartStart() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartStart);
}

export function* checkOut() {
  yield takeLatest(CartActionTypes.CHECK_OUT, clearCartStart);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(checkOut)]);
}
