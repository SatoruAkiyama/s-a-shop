import { takeLatest, all, call, put } from "redux-saga/effects";

import { firestore, getInformationItems } from "../../firebase/firebaseUtil";
import {
  fetchInformationSuccess,
  fetchInformationFailure,
} from "./informationActions";

import InformationActionTypes from "./informationTypes";

export function* fetchInformationStartAsync() {
  try {
    const informationRef = yield firestore.collection("information");
    const snapShot = yield informationRef.get();
    const informationItems = yield getInformationItems(snapShot);
    yield put(fetchInformationSuccess(informationItems));
  } catch (error) {
    yield put(fetchInformationFailure(error.message));
  }
}

export function* fetchInformationStart() {
  yield takeLatest(
    InformationActionTypes.FETCH_INFORMATION_START,
    fetchInformationStartAsync
  );
}

export function* informationSagas() {
  yield all([call(fetchInformationStart)]);
}
