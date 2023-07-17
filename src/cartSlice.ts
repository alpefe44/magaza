import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface cartState {
  items:[],
}

const initialState:cartState = {
  items:[],
}

export const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers : {
    addCartItem:(state:RootState,action) => {
      const newProduct = action.payload.product;
      console.log(newProduct,'newproduct')
      const cartItem = state.items.find((item) => item.product.id === newProduct.id)
      console.log(cartItem,'cartitem')
      
      if(cartItem) {
        cartItem.quantity += 1;
      }else{
        state.items.push({product:newProduct,quantity:1})
      }

    }
  }
})

