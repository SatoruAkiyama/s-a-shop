import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebaseUtil";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shopActions";

import ShopActionTypes from "./shopTypes";

export function* fetchCollectionsStartAsync() {
  try {
    const collectionRef = yield firestore.collection("collections");
    const snapshot = yield collectionRef.orderBy("id").get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (e) {
    yield put(fetchCollectionsFailure(e.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsStartAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
