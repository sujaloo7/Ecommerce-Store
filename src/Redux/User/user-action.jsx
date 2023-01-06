import * as actionType from "./user-type";

export const storeUserData = (item) => {
  console.log("hhh", item);
  return {
    type: actionType.STORE_USER_DATA,
    payload: item,
  };
};
export const removeUserData = () => {
  return {
    type: actionType.REMOVE_USER_DATA,
    payload: {},
  };
};
