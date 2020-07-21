export const changeHistory = (curretUser, items) => {
  const currentPurchaseHistory = curretUser.purchaseHistory;
  const nextPurchaseHistory = [...currentPurchaseHistory, ...items];
  return { ...curretUser, purchaseHistory: nextPurchaseHistory };
};
