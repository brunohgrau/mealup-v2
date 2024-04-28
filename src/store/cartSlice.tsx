import { createSlice } from "@reduxjs/toolkit";
import { ShopItem } from "../types";

export interface CartItem extends ShopItem {
  quantity: number;
}

export type CartState = {
  visible: boolean;
  items: CartItem[];
};

const initialState: CartState = {
  visible: false,
  items: [
    {
      id: 1,
      name: "Item 1",
      price: 10,
      quantity: 1,
      imageUrl: "",
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
