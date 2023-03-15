import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import CompanyProfile from "../components/CompanyProfile";
import Spinner from "../components/Spinner";
import StockChart from "../components/StockChart";
import { getStock, getStockPrice } from "../features/stock/stockSlice";

export default function StockDisplay() {
  const { stock, price, isLoading, isSuccess, isError, message } =
    useAppSelector((state) => state.stock);

  const { stockTicker } = useParams<{ stockTicker: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getStock(stockTicker!));
    dispatch(getStockPrice(stockTicker!));

    // eslint-disable-next-line
  }, [isError, message, stockTicker]);

  interface Name {
    companyName?: string;
  }

  if (isLoading) return <Spinner />;

  return (
    <div className="grid grid-cols-[repeat(2,1fr)] gap-10 p-4">
      {/* <div>{stock && stock.map((x: Name) => x.companyName)}</div> */}
      <CompanyProfile stock={stock} />
      <StockChart price={price} />
    </div>
  );
}
