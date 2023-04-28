import React from "react";
import { MdDeleteForever } from "react-icons/md";

function TickerCard({ ticker }: any) {
  console.log(ticker);

  const handleSubmit = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Delete");
  };
  return (
    <div className="flex flex-row items-center m-12 py-6 justify-around shadow-md rounded-md bg-slate-50">
      <img src={ticker.image} alt="company logo" className="h-12"></img>
      <div className="">{ticker.symbol}</div>
      <div className="w-52">{ticker.companyName}</div>
      <button onClick={handleSubmit}>
        <MdDeleteForever size={20} />
      </button>
    </div>
  );
}

export default TickerCard;
