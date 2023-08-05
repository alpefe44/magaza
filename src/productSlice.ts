import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import products from "../data/products";
import { RootState } from "./store";


export interface productDetail {
  id: string,
  image: string,
  images: string[],
  name: string,
  price: number,
  sizes: number[],
  size:null,
  description: string
}

export interface productState {
  products: productDetail[],
  selectedProduct: null,
  size: null
}

const initialState: productState = {
  products: products,
  selectedProduct: null,
  size: null
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProduct: (state: RootState, action: PayloadAction<productDetail>) => {
      const productid = action.payload.id;
      state.selectedProduct = state.products.find((p: any) => p.id === productid)

    },
    setSelectedSize: (state: RootState, action: PayloadAction<Number>) => {
      const sizeNumber = action.payload;
      state.size = sizeNumber;
      state.selectedProduct.size = state.size;
      console.log(state.selectedProduct.size);
    }
  }
})