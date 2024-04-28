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
  items: [],
};
