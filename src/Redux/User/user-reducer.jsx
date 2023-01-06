import * as actionType from "./user-type";

const INITIAL_STATE = {
  user: {},
};
const userReducer = (state = INITIAL_STATE, action) => {
  console.log("inside reducer user", action.payload, action.type);

  switch (action.type) {
    case actionType.STORE_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    case actionType.REMOVE_USER_DATA:
      return {
        ...state,
        user: {},
      };

    default:
      return state;
  }
};

export default userReducer;
