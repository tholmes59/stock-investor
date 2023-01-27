import React from "react";
import { useState, useEffect } from "react";

export default function Quote() {
  const [quote, setQuote] = useState({ content: "", author: "" });
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadQuote = async () => {
      const quote = await fetch(`https://api.quotable.io/random`)
        .then((res) => res.json())
        .then((data) => data);
      setQuote(quote);
    };
    loadQuote();
  }, []);

  const changeQuote = () => {
    const loadQuote = async () => {
      const quote = await fetch(`https://api.quotable.io/random`)
        .then((res) => res.json())
        .then((data) => data);
      setQuote(quote);
    };
    loadQuote();
  };

  // if(loading){
  //     return <Spinner/>
  // }

  return (
    <div
      className="flex flex-col items-center justify-center bg-[#f0eff4] p-4 shadow-md italic hover:cursor-pointer"
      onClick={changeQuote}
    >
      <div>"{quote.content}"</div>
      <div>- {quote.author}</div>
    </div>
  );
}
