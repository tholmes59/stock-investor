import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import stockReducer from "../features/stock/stockSlice";
import tickerReducer from "../features/ticker/tickerSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    stock: stockReducer,
    ticker: tickerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
