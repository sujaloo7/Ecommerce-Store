import * as actionType from "./shopping-type";
const INITIAL_STATE = {
  cart: [],
};
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      console.log("ha ha yhi se hua h ", action.payload);
      console.log("cart ", state.cart);
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      console.log("ye kya de rha h bhai", inCart)
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) => {
            return item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : {
                ...item,
              };
          })
          : [...state.cart, { ...action.payload, qty: 1 }],
      };
    case actionType.EMPTY_CART:
      return {
        ...state,
        cart: [],
      };

    case actionType.REMOVE_FROM_CART:
      const itemData = state.cart.find((item) => {
        console.log("thosn is id", action.payload);
        if (item.id === action.payload) {
          console.log(item);
          return item;
        }
      });
      console.log("this is item", itemData);

      state.cart.splice(state.cart.indexOf(itemData), 1);

      return {
        ...state,
        cart: state.cart,
      };
    case actionType.INC_CART_ITEM: {

      let updatedCart = state.cart.map((element) => {
        if (element.id == action.payload.id) {
          element.qty = element.qty;
        }
        return element;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case actionType.DEC_CART_ITEM: {
      let updatedCart = state.cart.map((element) => {
        if (element.id == action.payload.id) {
          element.qty = element.qty - 1;
        }
        return element;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    }
    // const check1 = state.cart.find((item) => {
    //   console.log("here is item", item);
    //   return item.id === action.payload.id ? item : false;
    // });
    // if (check1) {
    //   console.log("check", {
    //     ...check1,
    //     qty: check1.qty >= 0 ? check1.qty - 1 : 0,
    //   });
    //   return {
    //     ...state,
    //     cart: [{ ...check1, qty: check1.qty > 1 ? check1.qty - 1 : 1 }],
    //   };
    // }

    default:
      return state;
  }
};

export default shopReducer;
