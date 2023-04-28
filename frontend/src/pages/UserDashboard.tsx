import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import TickerPortfolio from "../components/TickerPortfolio";
import { getTickers } from "../features/ticker/tickerSlice";

export default function UserDashboard() {
  const { user, isLoading, isSuccess, isError, message } = useAppSelector(
    (state) => state.auth
  );
  const { stockData } = useAppSelector((state) => state.ticker);

  const { userID } = useParams<{ userID: string }>();
  const dispatch = useAppDispatch();

  interface User {
    _id: string;
    name: string;
    email: string;
    token: string;
  }

  useEffect(() => {
    dispatch(getTickers());
  }, [dispatch]);

  console.log(user);
  console.log(stockData);

  return (
    <div className="mt-10">
      <h1 className="text-left ml-12 text-2xl">
        {user && (user as User).name}'s Portfolio Holdings:
      </h1>
      <TickerPortfolio />
    </div>
  );
}
