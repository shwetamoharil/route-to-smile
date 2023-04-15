import { createSlice } from "@reduxjs/toolkit";

const initialProductsState = {
  products: []
};

const productSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {
    setProductsData(state, action) {
      state.products = action.payload;
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    }
  }
});

export default productSlice.reducer;
export const productActions = productSlice.actions;
