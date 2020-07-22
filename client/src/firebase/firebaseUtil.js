import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import FIREBASE_CONFIG from "../api/FIREBASE_CONFIG";

const config = FIREBASE_CONFIG;

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email } = userAuth;
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const createdAt = `${year}/${month}/${day}`;
    const purchaseHistory = [];

    try {
      await userRef.set({
        email,
        createdAt,
        purchaseHistory,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user!", error.message);
    }
  }
  return userRef;
};

export const addPurchaseHistory = async (
  currentUserPurchaseHistory,
  userId
) => {
  if (userId) {
    console.log(currentUserPurchaseHistory);
    const userRef = firestore.doc(`users/${userId}`);
    try {
      userRef.set(
        {
          purchaseHistory: currentUserPurchaseHistory,
        },
        { merge: true }
      );
    } catch (error) {
      console.log("error", error.message);
    }
  } else {
    return;
  }
};

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accu, collection) => {
    accu[collection.title.toLowerCase()] = collection;
    return accu;
  }, {});
};

export const getInformationItems = async (informationItem) => {
  const gotInformationItem = await informationItem.docs.map((doc) => {
    const { informationItems } = doc.data();
    return {
      informationItems,
    };
  });
  return gotInformationItem[0].informationItems;
};

export const getCuurentUser = () => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((userAuth) => {
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export default firebase;
