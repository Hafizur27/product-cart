/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
import { createContext, useReducer } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const cartData = {
  cartItem: [],
  productList: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Set_Data":
      return {
        ...state,
        productList: [...action.payload],
      };

    case "ADD_TO_CART":
      const findCartData = state.cartItem?.find(
        (nc) => nc.id == action.payload.id
      );

      if (findCartData) {
        toast.error("Item is already in the cart!");
        return state;
      } else {
        toast.success("Item added to cart!");
        return {
          ...state,
          cartItem: [
            ...state.cartItem,
            {
              ...action.payload,
              orderQty: 1,
            },
          ],
        };
      }

    // return findCartData
    //   ? state
    //   : {
    //       cartItem: [
    //         ...state.cartItem,
    //         {
    //           ...action.payload,
    //           orderQty: 1,
    //         },
    //       ],
    //     };

    case "INCREASE_QUANTITY":
      const updateList = state.cartItem.map((item) => {
        if (
          item.id === action.payload.id &&
          item.qty > action.payload.orderQty
        ) {
          return {
            ...item,
            orderQty: (item.orderQty += 1),
          };
        } else {
          return item;
        }
      });

      return { cartItem: updateList };

    case "DECREASE_QUANTITY":
      const decreaseList = state.cartItem.map((item) => {
        if (item.id === action.payload.id && action.payload.orderQty > 1) {
          return {
            ...item,
            orderQty: (item.orderQty -= 1),
          };
        } else {
          return item;
        }
      });

      return { cartItem: decreaseList };
    case "REMOVE_PRODUCT":
      const remainProduct = state.cartItem.filter(
        (data) => data.id !== action.payload
      );
      return { cartItem: remainProduct };

    default:
      return state.cartItem;
  }
};

const Context = ({ children }) => {
  const [carts, dispatch] = useReducer(reducer, cartData);
  // console.log(carts);
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
