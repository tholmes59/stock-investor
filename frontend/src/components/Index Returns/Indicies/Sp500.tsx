import React, { useState, useEffect } from "react";

function Sp500() {
  const [sp500, setSp500] = useState<any>();

  useEffect(() => {
    const loadSp500 = async () => {
      const sp500 = await fetch(
        `https://financialmodelingprep.com/api/v3/profile/SPY?apikey=${process.env.REACT_APP_FMP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => data);
      console.log(sp500);
      setSp500(sp500);
    };
    loadSp500();
  }, []);

  let price =
    sp500 &&
    sp500
      .map((x: any) => x.price)
      .shift()
      .toFixed(2) * 1;
  let priceChange =
    sp500 &&
    sp500
      .map((x: any) => x.changes)
      .shift()
      .toFixed(2) * 1;
  let percentChange =
    (((price + priceChange) / price - 1) * 100).toFixed(2) + "%";

  let pricePercentageFontColor = {};
  if (priceChange >= 0) {
    pricePercentageFontColor = { color: "green" };
  }
  if (((price + priceChange) / price - 1) * 100 < 0) {
    pricePercentageFontColor = { color: "red" };
  }

  return (
    <>
      <div className="flex flex-col border border-gray-300 rounded-lg whitespace-nowrap justify-center text-lg">
        <div className="font-bold">S&P 500</div>
        <div className="index-price">
          {sp500 &&
            sp500
              .map((x: any) => x.price)
              .shift()
              .toFixed(2)}
        </div>
        <div className="flex justify-center">
          <div className="pr-1.5" style={pricePercentageFontColor}>
            {priceChange}
          </div>
          <div
            className="index-percent-change"
            style={pricePercentageFontColor}
          >
            {percentChange}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sp500;
