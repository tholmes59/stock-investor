import React, { useState, useEffect } from "react";
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
import { createTicker, reset } from "../features/ticker/tickerSlice";
import { toast, ToastContent } from "react-toastify";
import { FaSave } from "react-icons/fa";

export default function StockDisplay() {
  const [isSaved, setIsSaved] = useState(false);

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

  // Match the display symbol with users saved symbols to determine which button to display
  const { stockData } = useAppSelector((state) => state.ticker);

  let savedSymbols: string[] = [];

  stockData?.forEach((x) => {
    savedSymbols.push(x.symbol);
  });

  let currentSymbol: any = stock?.map((x: StockItem) => x.symbol).toString();

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
  }, [stockData, isError, message, stockTicker]);

  interface StockItem {
    image: string;
    companyName: string;
    symbol: string;
  }

  const onSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    dispatch(reset);
    setIsSaved(true);
  };

  interface Name {
    companyName?: string;
  }

  if (isLoading) return <Spinner />;

  if (stock && stock.length < 1) return <h1>Please enter valid ticker</h1>;

  return (
    <div>
      {isSaved || savedSymbols.includes(currentSymbol) ? null : (
        <div className="flex flex-row w-full px-4">
          <button
            onClick={onSaveClick}
            className="flex flex-row items-center rounded-md p-2 bg-slate-200 shadow-slate-200"
          >
            <FaSave className="mr-2" />
            Save
          </button>
        </div>
      )}

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
