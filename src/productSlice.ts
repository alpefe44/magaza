import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import products from "../data/products";
import { RootState } from "./store";


export interface productDetail {
  id:string,
  image:string,
  images:string[],
  name:string,
  price:number,
  sizes:number[],
  description:string
}

export interface productState {
  products: productDetail[],
  selectedProduct:null,
}

const initialState:productState = {
  products: products,
  selectedProduct:null
}

export const productSlice = createSlice({
  name:'products',
  initialState,
  reducers:{
    setSelectedProduct:(state:RootState , action :PayloadAction<productDetail>) => {     
      const productid = action.payload;
      state.selectedProduct = state.products.find((p:any) => p.id === productid)
    }
  }
})