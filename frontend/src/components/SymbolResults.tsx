import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";

interface SymbolItem {
  currency: string;
  exchangeShortName: string;
  name: string;
  stockExchange: string;
  symbol: string;
}

function SymbolResults() {
  const { symbol, isLoading, isSuccess, isError, message } = useAppSelector(
    (state) => state.stock
  );

  const closeWindow = () => {
    console.log("window closed");
  };

  console.log(symbol);

  if (symbol && symbol.length < 1) {
    return (
      <div id="tickerResults">
        <div onClick={closeWindow} className="close-ticker-results">
          x
        </div>
        <p>Please enter valid company name</p>
      </div>
    );
  }

  return (
    <>
      {symbol && (
        <div id="tickerResults">
          {symbol && (
            <div onClick={closeWindow} className="close-ticker-results">
              x
            </div>
          )}
          {symbol &&
            symbol.map((x: SymbolItem) => (
              <div className="ticker-search-results">
                {x.symbol} {x.name} {x.exchangeShortName}
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default SymbolResults;
