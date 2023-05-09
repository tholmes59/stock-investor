import React, { useState, useEffect } from "react";

function Nasdaq() {
  const [nasdaq, setNasdaq] = useState<any>();

  useEffect(() => {
    const loadNasdaq = async () => {
      const nasdaq = await fetch(
        `https://financialmodelingprep.com/api/v3/profile/QQQ?apikey=${process.env.REACT_APP_FMP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => data);
      console.log(nasdaq);
      setNasdaq(nasdaq);
    };
    loadNasdaq();
  }, []);

  let price =
    nasdaq &&
    nasdaq
      .map((x: any) => x.price)
      .shift()
      .toFixed(2) * 1;
  let priceChange =
    nasdaq &&
    nasdaq
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
        <div className="font-bold">NASDAQ</div>
        <div>
          {nasdaq &&
            nasdaq
              .map((x: any) => x.price)
              .shift()
              .toFixed(2)}
        </div>
        <div className="flex justify-center">
          <div className="pr-1.5" style={pricePercentageFontColor}>
            {priceChange}
          </div>
          <div style={pricePercentageFontColor}>{percentChange}</div>
        </div>
      </div>
    </>
  );
}

export default Nasdaq;
