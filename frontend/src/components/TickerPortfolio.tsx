import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { getTickers, deleteTicker } from "../features/ticker/tickerSlice";
import TickerCard from "./TickerCard";

function TickerPortfolio() {
  const { stockData, isLoading, isSuccess, isError, message } = useAppSelector(
    (state) => state.ticker
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTickers());
  }, [dispatch]);

  const handleDeleteTicker = (tickerId: string) => {
    dispatch(deleteTicker(tickerId)).then(() => {
      dispatch(getTickers());
    });
  };

  return (
    <div>
      {stockData?.map((ticker) => (
        <TickerCard ticker={ticker} onDeleteTicker={handleDeleteTicker} />
      ))}
    </div>
  );
}

export default TickerPortfolio;
