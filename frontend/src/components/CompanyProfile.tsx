import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import Spinner from "./Spinner";
import { getStock } from "../features/stock/stockSlice";

const CompanyProfile = ({ stock }: any) => {
  let marketCap;
  if ((stock && stock.map((x: any) => x.mktCap)) < 1000000000) {
    marketCap =
      (stock && stock?.map((x: any) => x.mktCap) / 1000000).toFixed(2) + "M";
  }
  if ((stock && stock.map((x: any) => x.mktCap)) < 1000000000000) {
    marketCap =
      (stock && stock?.map((x: any) => x.mktCap) / 1000000000).toFixed(2) + "B";
  } else {
    marketCap =
      (stock && stock?.map((x: any) => x.mktCap) / 1000000000000).toFixed(3) +
      "T";
  }

  let price = stock && stock.map((x: any) => x.price).shift();
  // .toFixed(2) * 1;

  let priceChange = stock && stock?.map((x: any) => x.changes).shift();
  // .toFixed(2) * 1;
  let percentChange =
    (((price + priceChange) / price - 1) * 100).toFixed(2) + "%";
  // let percentChange = (((price + priceChange) / price) - 1)

  let pricePercentageFontColor = {};
  if (priceChange > 0) {
    pricePercentageFontColor = { color: "green" };
  }
  if (priceChange < 0) {
    pricePercentageFontColor = { color: "red" };
  }

  const fiftyTwoWeek = (val: any) => {
    let temp = val[0].split("-");
    let low = Number(temp[0]).toFixed(2);
    let high = Number(temp[1]).toFixed(2);
    return `${low} - ${high}`;
  };

  return (
    <div>
      <div className="flex items-center mx-0 my-2.5 text-left">
        {stock && (
          <a
            href={stock.map((x: any) => x.website)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="CompanyLogo" src={stock.map((x: any) => x.image)}></img>
          </a>
        )}
        <div className="flex flex-col leading-[150%] p-2.5">
          {stock &&
            stock.map((x: any) => (
              <div>
                {x.companyName} ({x.symbol})
              </div>
            ))}
          {stock &&
            stock.map((x: any) => (
              <div>
                {x.exchangeShortName} - {x.exchange} Currency in {x.currency}
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col justify-start text-left">
        {stock && (
          <div>
            <span className="font-bold text-4xl">{price.toFixed(2)}</span>{" "}
            {
              <span style={pricePercentageFontColor}>
                {priceChange.toFixed(2)}
              </span>
            }{" "}
            {<span style={pricePercentageFontColor}>({percentChange})</span>}
          </div>
        )}
        <div className="x-0 my-2.5 text-sm">
          {stock && stock.map((x: any) => <div>{x.address}</div>)}
          {stock &&
            stock.map((x: any) => (
              <div>
                {x.city}, {x.state} {x.zip}
              </div>
            ))}
          {stock && stock.map((x: any) => <div>{x.ceo}</div>)}
        </div>
        {stock && <div className="text-sm">Market Cap: {marketCap}</div>}
        {stock && (
          <div className="text-sm">
            52 Week Range:{" "}
            {/* {fiftyTwoWeek(stock && stock.map((x: any) => x.range))} */}
            {stock && stock.map((x: any) => x.range)}
          </div>
        )}
        <div className="italic mx-0 my-2.5 text-sm text-left">
          {stock && stock.map((x: any) => <div>{x.description}</div>)}
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
