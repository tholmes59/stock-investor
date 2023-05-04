import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tickerService from "./tickerService";
import { RootState } from "../../app/store";

export interface InitialTickerState {
  stockData: StockItem[] | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | null | unknown;
}

const initialState: InitialTickerState = {
  stockData: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

interface User {
  _id: string;
  name: string;
  email: string;
  token: string;
}

//Get user from localStorage
// const getUser = localStorage.getItem("user");

// let user: User;

// if (getUser) {
//   user = JSON.parse(getUser);
// }

interface StockItem {
  image: string;
  companyName: string;
  symbol: string;
}

// Create ticker profile
export const createTicker = createAsyncThunk(
  "ticker/create",
  async (savedStock: StockItem[] | null | undefined, thunkAPI) => {
    try {
      const user = (thunkAPI.getState() as RootState).auth.user;
      if (!user || (typeof user === "object" && !("token" in user))) {
        throw new Error("User not found or token missing");
      }
      const token = user.token;
      return await tickerService.createTicker(savedStock?.pop(), token);
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

//Get ticker data
export const getTickers = createAsyncThunk(
  "ticker/getAll",
  async (_, thunkAPI) => {
    try {
      const user = (thunkAPI.getState() as RootState).auth.user;
      if (!user || (typeof user === "object" && !("token" in user))) {
        throw new Error("User not found or token missing");
      }
      const token = user.token;
      return await tickerService.getTickers(token);
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

//Delete Ticker
export const deleteTicker = createAsyncThunk(
  "ticker/delete",
  async (tickerId: string, thunkAPI) => {
    try {
      const user = (thunkAPI.getState() as RootState).auth.user;
      if (!user || (typeof user === "object" && !("token" in user))) {
        throw new Error("User not found or token missing");
      }
      const token = user.token;
      return await tickerService.deleteTicker(tickerId, token);
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

export const tickerSlice = createSlice({
  name: "tickers",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTicker.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTicker.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createTicker.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTickers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTickers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.stockData = action.payload;
      })
      .addCase(getTickers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteTicker.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTicker.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.stockData = state.stockData!.filter(
          (ticker) => ticker.symbol !== action.payload
        );
      })
      .addCase(deleteTicker.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = tickerSlice.actions;
export default tickerSlice.reducer;
