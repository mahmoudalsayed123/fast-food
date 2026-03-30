import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '@/app/_constant';

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    updateQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export const {
  addItem,
  removeFromCart,
  clearCart,
  updateQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
