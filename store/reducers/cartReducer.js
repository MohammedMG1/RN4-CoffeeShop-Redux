import * as actionTypes from "../actions/types";

const initialState = {
  items: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      let item = action.payload;
      let foundItem = state.items.find(
        theItem =>
          theItem.drink === item.drink && theItem.option === item.option
      );
      if (foundItem) {
        foundItem.quantity++;
        return {
          ...state,
          items: [...state.items]
        };
      } else {
        return {
          ...state,
          items: state.items.concat(item)
        };
      }

    case actionTypes.REMOVE_ITEM:
      let updatedItems = state.items.filter(item => item !== action.payload);
      return {
        ...state,
        items: updatedItems
      };
    case actionTypes.CHECKOUT:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
};

export default cartReducer;
