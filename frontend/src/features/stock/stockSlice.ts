import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import stockService from "./stockService";

export interface InitialStockState {
  stock: [] | null;
  price: [] | null;
  metrics: [] | null;
  news: [] | null;
  symbol: [] | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | null | unknown;
}

const initialState: InitialStockState = {
  stock: [],
  price: [],
  metrics: [],
  news: [],
  symbol: [],
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

// Get stock price data
export const getStockPrice = createAsyncThunk(
  "stock/getStockPrice",
  async (ticker: string, thunkAPI) => {
    try {
      return await stockService.getCompanyPrice(ticker);
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

// Get stock valuation metrics data
export const getStockMetrics = createAsyncThunk(
  "stock/getStockMetrics",
  async (ticker: string, thunkAPI) => {
    try {
      return await stockService.getCompanyMetrics(ticker);
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

// Get stock news
export const getStockNews = createAsyncThunk(
  "stock/getStockNews",
  async (ticker: string, thunkAPI) => {
    try {
      return await stockService.getCompanyNews(ticker);
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

// Get stock symbol
export const getStockSymbol = createAsyncThunk(
  "stock/getStockSymbol",
  async (name: string, thunkAPI) => {
    try {
      return await stockService.getStockSymbol(name);
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
      })
      .addCase(getStockPrice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStockPrice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.price = action.payload;
      })
      .addCase(getStockPrice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getStockMetrics.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStockMetrics.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.metrics = action.payload;
      })
      .addCase(getStockMetrics.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getStockNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStockNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.news = action.payload;
      })
      .addCase(getStockNews.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getStockSymbol.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStockSymbol.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.symbol = action.payload;
      })
      .addCase(getStockSymbol.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = stockSlice.actions;
export default stockSlice.reducer;
