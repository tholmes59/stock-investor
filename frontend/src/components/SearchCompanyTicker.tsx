import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { getStockSymbol } from "../features/stock/stockSlice";

interface SearchCompanyTickerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function SearchCompanyTicker({
  open,
  setOpen,
}: SearchCompanyTickerProps) {
  const [companyName, setCompanyName] = useState("");

  const dispatch = useAppDispatch();

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(companyName);
    dispatch(getStockSymbol(companyName));
    setCompanyName("");
    setOpen(true);
  };

  return (
    <form onSubmit={onSubmit} className="flex">
      <input
        type="text"
        name="companyName"
        id="companyName"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        placeholder="Search Company Name..."
        className="text-lg border border-grey-500 p-2 w-64 rounded"
      />
      <button
        value="Search Company Name"
        type="submit"
        className="flex justify-center items-center p-2 text-white text-lg border border-grey-500 border-l-0 w-16 cursor-pointer bg-[#007f5f] hover:bg-[#f77f00] rounded"
      >
        <FaSearch />
      </button>
    </form>
  );
}
