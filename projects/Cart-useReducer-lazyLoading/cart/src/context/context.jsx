import React, { useState, useContext, useReducer } from "react";
import cartItems from "../data";
import reducer from "../reducer/reducer";

const AppContext = React.createContext();
const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  loading: false,
  cart: cartItems,
  amount: 0,
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const incItem = (id) => {
    dispatch({ type: "INC_ITEM", payload: id });
  };

  const decItem = (id) => {
    dispatch({ type: "DEC_ITEM", payload: id });
  };

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, remove, incItem, decItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
