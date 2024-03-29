import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import { reset } from "../features/stock/stockSlice";

interface SymbolItem {
  currency: string;
  exchangeShortName: string;
  name: string;
  stockExchange: string;
  symbol: string;
}

interface SearchCompanyTickerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function SymbolResults({ open, setOpen }: SearchCompanyTickerProps) {
  const { symbol, isLoading, isSuccess, isError, message } = useAppSelector(
    (state) => state.stock
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const closeWindow = () => {
    console.log("window closed");
    setOpen(false);
  };

  console.log(symbol);

  const searchSymbol = (ticker: string) => {
    console.log(ticker);
    navigate(`/stock/${ticker}`);
    setOpen(false);
    dispatch(reset());
  };

  if (symbol && symbol.length < 1) {
    return (
      <div className="absolute w-80 bg-white border-2 border-gray-400 z-10 text-sm">
        <div
          onClick={closeWindow}
          className="flex flex-row-reverse pr-2 hover:cursor-pointer"
        >
          x
        </div>
        <p>Please enter valid company name</p>
      </div>
    );
  }

  return (
    <>
      {symbol && (
        <div className="absolute w-80 bg-white border-2 border-gray-400 z-10 text-sm">
          {symbol && (
            <div
              onClick={closeWindow}
              className="flex flex-row-reverse pr-2 hover:cursor-pointer"
            >
              x
            </div>
          )}
          {symbol &&
            symbol.map((x: SymbolItem) => (
              <div
                className="p-2 hover:bg-gray-500 cursor-pointer"
                onClick={() => searchSymbol(x.symbol)}
              >
                {x.symbol} {x.name} {x.exchangeShortName}
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default SymbolResults;
