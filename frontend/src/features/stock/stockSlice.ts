import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import stockService from "./stockService";

export interface InitialStockState {
  stock: [] | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | null | unknown;
}

const initialState: InitialStockState = {
  stock: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get stock profile data
export const getStock = createAsyncThunk(
  "stock/getStock",
  async (ticker: string, thunkAPI) => {
    try {
      return await stockService.getCompanyProfile(ticker);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const stockSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStock.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStock.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.stock = action.payload;
      })
      .addCase(getStock.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = stockSlice.actions;
export default stockSlice.reducer;
