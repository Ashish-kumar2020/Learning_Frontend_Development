import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch("https://dummyjson.com/products");

  const data = await response.json();

  //   whatever we are returning from here will come in action.payload
  return data.products;
});

const ecommerceSlice = createSlice({
  name: "products",

  initialState: {
    isLoading: false,
    products: null,
  },
  //   using builder we can listen changes of fetchProducts
  //   we can handle all the three case in builder: pending,fullfilled,rejected

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isLoading = true;
    });
  },
});

export default ecommerceSlice.reducer;
