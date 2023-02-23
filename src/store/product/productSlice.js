import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URI, POSTFIX } from '../../consts';

const initialState = {
  products: [],
  error: '',
};

export const productReqestAsync = createAsyncThunk(
  'product/fetch',
  (category) =>
    fetch(`${API_URI}${POSTFIX}?category=${category}`)
      .then(req => req.json())
      .catch(error => ({ error }))
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(productReqestAsync.pending, state => {
      state.error = ''
    })
    .addCase(productReqestAsync.fulfilled, (state, action) => {
      state.error = '';
      state.products = action.payload;
    })
    .addCase(productReqestAsync.rejected, (state, action) => {
      state.error = action.payload.error
    })
  },
});

export default productSlice.reducer;
