import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useAppDispatch } from "../app/hooks";
import { deleteTicker, reset } from "../features/ticker/tickerSlice";
import { useNavigate } from "react-router-dom";

interface TickerCardProps {
  ticker: any;
  onDeleteTicker: (tickerId: string) => void;
}

function TickerCard({ ticker, onDeleteTicker }: TickerCardProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(deleteTicker(ticker._id));
    onDeleteTicker(ticker._id);
  };

  const handleClick = () => {
    console.log("clicked");
    navigate(`/stock/${ticker.symbol}`);
  };

  return (
    <div className="flex flex-row items-center">
      <div
        onClick={handleClick}
        className="flex flex-row items-center my-8 ml-8 py-6 justify-around shadow-md rounded-md bg-slate-50 w-10/12 hover:scale-105"
      >
        <img src={ticker.image} alt="company logo" className="h-12"></img>
        <div className="">{ticker.symbol}</div>
        <div className="w-52">{ticker.companyName}</div>
      </div>
      <div className="bg-slate-50 shadow-md rounded-md hover:scale-105">
        <button onClick={handleSubmit} className="">
          <MdDeleteForever size={20} className="m-9" />
        </button>
      </div>
    </div>
  );
}

export default TickerCard;
