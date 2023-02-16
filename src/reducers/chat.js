import { CREATE_USER, EXTEND_LIST } from "../action/actionType";

// the function handles all states of cart
export default function chat(state = [], action) {
  switch (action.type) {
    case CREATE_USER:
      state.username = action.userdetails.username;
      state.room = action.userdetails.room;
      return state;

    case EXTEND_LIST:
      return [...state.messageList, action.messageData];

    // case REMOVE_FROM_CART:
    //   const array = state.filter((prod) => prod.id !== action.id);
    //   alert("Product removed from the cart!");
    //   return array;

    // case INCREASE_QUANTITY:
    //   const ind = state.findIndex((prod) => prod.id === action.id);
    //   state[ind].quantity = state[ind].quantity + 1;
    //   return [...state];

    // case DECREASE_QUANTITY:
    //   const indice = state.findIndex((prod) => prod.id === action.id);
    //   if (state[indice].quantity < 2) {
    //     const array = state.filter((prod) => prod.id !== action.id);
    //     return array;
    //   } else {
    //     state[indice].quantity = state[indice].quantity - 1;
    //     return [...state];
    //   }

    default:
      return state;
  }
}
