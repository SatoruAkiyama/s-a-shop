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

export const selectCurrentUserName = createSelector(
  [selectCurrentUser],
  (currentUser) => (currentUser ? currentUser.displayName : null)
);

export const selectCurrentUserInfo = createSelector(
  [selectCurrentUser],
  (currentUser) =>
    currentUser
      ? {
          displayName: currentUser.displayName,
          email: currentUser.email,
          createdAt: currentUser.createdAt,
        }
      : null
);

export const selectCurrentUserPurchaseHistory = createSelector(
  [selectCurrentUser],
  (currentUser) => (currentUser ? currentUser.purchaseHistory : null)
);
