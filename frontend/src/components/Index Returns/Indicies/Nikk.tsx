import React, { useState, useEffect } from "react";

function Nikkei() {
  const [nikk, setNikk] = useState<any>();

  useEffect(() => {
    const loadNikk = async () => {
      const nikk = await fetch(
        `https://financialmodelingprep.com/api/v3/profile/JPXN?apikey=${process.env.REACT_APP_FMP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => data);
      console.log(nikk);
      setNikk(nikk);
    };
    loadNikk();
  }, []);

  let price =
    nikk &&
    nikk
      .map((x: any) => x.price)
      .shift()
      .toFixed(2) * 1;
  let priceChange =
    nikk &&
    nikk
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
      <div className="flex flex-col basis-8 p-2 border border-gray-300 rounded-lg whitespace-nowrap w-full text-sm">
        <div className="font-bold">Nikkei</div>
        <div className="index-price">
          {nikk &&
            nikk
              .map((x: any) => x.price)
              .shift()
              .toFixed(2)}
        </div>
        <div className="flex">
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

export default Nikkei;
