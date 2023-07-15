import { createContext, useEffect, useReducer } from "react";
import { ProductAPI } from "../API/ProductAPI";
import reducer from "../Reducer/Reducer";
const AppContext = createContext();
const initialState = {
  item: ProductAPI,
  totalAmount: 0,
  totalItem: 0,
  quantity: 1,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  // we will use the useEffect to update the data
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item]);
  return (
    <AppContext.Provider
      value={{ ...state, clearCart, removeItem, increment, decrement }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
