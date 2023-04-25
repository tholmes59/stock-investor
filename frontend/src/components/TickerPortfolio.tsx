import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { getTickers } from "../features/ticker/tickerSlice";
import TickerCard from "./TickerCard";

function TickerPortfolio() {
  const { stockData, isLoading, isSuccess, isError, message } = useAppSelector(
    (state) => state.ticker
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTickers());
  }, [dispatch]);

  console.log(stockData);
  return (
    <div>
      {stockData?.map((ticker) => (
        <TickerCard ticker={ticker} />
      ))}
    </div>
  );
}

export default TickerPortfolio;
