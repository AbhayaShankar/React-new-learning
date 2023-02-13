const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART": {
      return { ...state, cart: [] };
    }
    case "REMOVE": {
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };
    }
    case "INC_ITEM": {
      console.log(state);
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return {
        ...state,
        cart: tempCart,
      };
    }
    case "DEC_ITEM": {
      console.log(state);

      let tempCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload) {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }

          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      return {
        ...state,
        cart: tempCart,
      };
    }

    case "GET_TOTALS": {
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          cartTotal.amount += amount;
          const ItemTotal = price * amount;

          cartTotal.total += ItemTotal;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        total,
        amount,
      };
    }

    case "LOADING": {
      return {
        ...state,
        loading: true,
      };
    }

    case "DISPLAY_ITEMS": {
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };
    }
  }
  throw new Error("No matches Found");
};

export default reducer;
