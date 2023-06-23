import { createAsyncThunk, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../interfaces";
import { RootState } from "../store";
import { ProductInterface } from "@/shared/ProductInterface";




export const fetchCart = createAsyncThunk("cart/fetch",async(thunkApi)=>{
  const res =  await fetch("/api/carts",{
    method:"GET",
  })
  const result = res.json()
  return result; 
})

export const saveCart = createAsyncThunk("cart/save",async(name:string,thunkApi)=>{
  const res = await fetch("/api/carts",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name
    })
  });
  const result=await res.json()
  return result
  })

export interface CartState {
  cartItems: CartItem[];
}

const initialState:CartState = {
  cartItems: [],
  };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increament: (state, action: PayloadAction<ProductInterface>) => {
      const item = state.cartItems.find(
        (el) => el.product._id == action.payload._id
      );
      if (item) item.qty++;
      else {
        state.cartItems.push({
          product: action.payload,
          qty: 1,
        });
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.product._id !== productId);
    },
    decreament: (state, action: PayloadAction<ProductInterface>) => {
      const item = state.cartItems.find(
        (el) => el.product._id == action.payload._id
      );
      if (item) {
        item.qty--;

        if (item.qty == 0) {
          state.cartItems = state.cartItems.filter(
            (el) => el.product._id !== action.payload._id
          );
        }
      }
    },
    saveCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.cartItems = action.payload;
    },
  },
  extraReducers(builder) {
      builder.addCase(fetchCart.fulfilled,(state,action)=>{
        state.cartItems=action.payload; 
      }); 
      builder.addCase(saveCart.fulfilled,(state,action)=>{
        state.cartItems.push(action.payload)
      })
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
    cartItems.find((el) => el.product._id == projectId)?.qty
);

export const { increament, decreament ,removeFromCart,saveCartItems} = cartSlice.actions;
export default cartSlice.reducer;
 