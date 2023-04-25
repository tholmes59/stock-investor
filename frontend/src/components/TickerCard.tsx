import React from "react";

function TickerCard({ ticker }: any) {
  console.log(ticker);
  return <div>{ticker.companyName}</div>;
}

export default TickerCard;
