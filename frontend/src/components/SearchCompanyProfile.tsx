import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useAppDispatch } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import { reset } from "../features/stock/stockSlice";

export default function SearchCompanyProfile() {
  const [ticker, setTicker] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(ticker);

    navigate(`/stock/${ticker}`);
    dispatch(reset());
    setTicker("");
  };

  return (
    <form onSubmit={onSubmit} className="flex">
      <input
        type="text"
        name="ticker"
        id="ticker"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        placeholder="Enter Ticker..."
        className="text-lg border border-grey-500 p-2 w-64 rounded"
      />
      <button
        value="Search Company"
        type="submit"
        className="flex justify-center items-center p-2 text-white text-lg border border-grey-500 border-l-0 w-16 cursor-pointer bg-[#007f5f] hover:bg-[#f77f00] rounded"
      >
        <FaSearch className="text-lg" />
      </button>
    </form>
  );
}
