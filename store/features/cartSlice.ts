import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product } from "../../interfaces";
import { RootState } from "../store";

export interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increament: (state, action: PayloadAction<Product>) => {
      const item = state.cartItems.find(
        (el) => el.product.id == action.payload.id
      );
      if (item) item.qty;
      else {
        state.cartItems.push({
          product: action.payload,
          qty: 1,
        });
      }
    },
    decreament: (state, action: PayloadAction<Product>) => {
      const item = state.cartItems.find(
        (el) => el.product.id == action.payload.id
      );
      if (item) {
        item.qty--;

        if (item.qty == 0) {
          state.cartItems = state.cartItems.filter(
            (el) => el.product.id !== action.payload.id
          );
        }
      }
    },
  },
});

const cartItems = (state: RootState) => state.cart.cartItems;
export const totalCartItemsSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce((total: number, curr: CartItem) => (total += curr.qty), 0)
);
export const totalPriceSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce(
    (total: number, curr: CartItem) => (total += curr.qty * curr.product.price),
    0
  )
);
export const productQtyInCartSelector = createSelector(
  [cartItems, (cartItems, productId: string) => productId],
  (cartItems, projectId) => 
    cartItems.find((el) => el.product.id == projectId)?.qty
);

export const { increament, decreament } = cartSlice.actions;
export default cartSlice.reducer;
