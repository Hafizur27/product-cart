/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
import { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartData = {
  cartItem: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const findCartData = state.cartItem.find(
        (nc) => nc.id == action.payload.id
      );
      return findCartData
        ? state
        : {
            cartItem: [
              ...state.cartItem,
              {
                ...action.payload,
                orderQty: 1,
              },
            ],
          };
    case "INCREASE_QUANTITY":
       
      const updateList = state.cartItem.map((item) => {
        if (item.id === action.payload.id) {
        
          return {
            ...item,
            orderQty: item.orderQty += 1,
          };

        } else {
          return item;
        }
      });
       
      return { cartItem: updateList };

    case "DECREASE_QUANTITY":
      
      if (action.payload.orderQty > 0) {
        const decreaseQuantity = action.payload.orderQty - 1;
        return {
          ...state.cartItem,
          cartItem: [
            {
              ...action.payload,
              orderQty: decreaseQuantity,
            },
          ],
        };
      }
      return state;
    case "REMOVE_PRODUCT":
      const remainProduct = state.cartItem.filter(
        (data) => data.id !== action.payload
      );
      return { cartItem: remainProduct };

    default:
      return state;
  }
};

const Context = ({ children }) => {
  const [carts, dispatch] = useReducer(reducer, cartData);
  console.log(carts);
  return (
    <CartContext.Provider
      value={{
        carts,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default Context;
