import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { getTickers, deleteTicker } from "../features/ticker/tickerSlice";
import Spinner from "./Spinner";
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

  const handleDeleteTicker = (tickerId: string) => {
    dispatch(deleteTicker(tickerId)).then(() => {
      dispatch(getTickers());
    });
  };

  if (isLoading) return <Spinner />;

  return (
    <div>
      {stockData?.map((ticker) => (
        <TickerCard ticker={ticker} onDeleteTicker={handleDeleteTicker} />
      ))}
    </div>
  );
}

export default TickerPortfolio;
