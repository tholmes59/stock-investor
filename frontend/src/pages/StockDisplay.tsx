import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import CompanyMetrics from "../components/CompanyMetrics";
import CompanyProfile from "../components/CompanyProfile";
import News from "../components/News";
import Spinner from "../components/Spinner";
import StockChart from "../components/StockChart";
import {
  getStock,
  getStockMetrics,
  getStockNews,
  getStockPrice,
} from "../features/stock/stockSlice";
import { createTicker } from "../features/ticker/tickerSlice";
import { toast, ToastContent } from "react-toastify";

export default function StockDisplay() {
  const {
    stock,
    price,
    news,
    metrics,
    isLoading,
    isSuccess,
    isError,
    message,
  } = useAppSelector((state) => state.stock);

  const { stockTicker } = useParams<{ stockTicker: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getStock(stockTicker!));
    dispatch(getStockPrice(stockTicker!));
    dispatch(getStockMetrics(stockTicker!));
    dispatch(getStockNews(stockTicker!));

    // eslint-disable-next-line
  }, [isError, message, stockTicker]);

  console.log(news);
  console.log(price);

  interface StockItem {
    image: string;
    companyName: string;
    symbol: string;
  }

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let savedStock =
      stock &&
      stock
        .filter(
          (item: StockItem) => item.image && item.companyName && item.symbol
        )
        .map((item: NonNullable<StockItem>) => {
          return {
            image: item.image,
            companyName: item.companyName,
            symbol: item.symbol,
          };
        });

    dispatch(createTicker(savedStock));
    toast.success("saved to database!");
    console.log("saved to database!");
  };

  interface Name {
    companyName?: string;
  }

  if (isLoading) return <Spinner />;

  return (
    <div>
      <button onClick={onButtonClick}>Save</button>
      <div className="grid grid-cols-[repeat(2,1fr)] gap-10 p-4">
        {/* <div>{stock && stock.map((x: Name) => x.companyName)}</div> */}
        <CompanyProfile stock={stock} />
        <StockChart price={price} />
        <CompanyMetrics metrics={metrics} />
        <News news={news} stock={stock} />
      </div>
    </div>
  );
}
