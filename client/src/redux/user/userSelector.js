import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectErrorMessage = createSelector(
  [selectUser],
  (user) => user.errorMessage
);

export const selectSignUpErrorMessage = createSelector(
  [selectUser],
  (user) => user.signUpErrorMessage
);

export const selectCurrentUserId = createSelector(
  [selectCurrentUser],
  (currentUser) => (currentUser ? currentUser.id : null)
);

export const selectCurrentUserInfo = createSelector(
  [selectCurrentUser],
  (currentUser) => ({
    displayName: currentUser.displayName,
    email: currentUser.email,
    createdAt: currentUser.createdAt,
  })
);

export const selectCurrentUserPurchaseHistory = createSelector(
  [selectCurrentUser],
  (currentUser) => (currentUser ? currentUser.purchaseHistory : null)
);
