import React, { useEffect, useState } from "react";
import Sectors from "../components/Home/Sectors";
import TopNews from "../components/Home/TopNews";
import Indicies from "../components/Index Returns/Indicies";
import dayjs from "dayjs";
import Spinner from "../components/Spinner";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const date = dayjs().format("MMMM D, YYYY h:m:ss a");

  if (loading) return <Spinner />;

  return (
    <>
      <h1 className="text-left pl-4 mb-2 text-2xl">Today in the Markets</h1>
      <p className="text-left pl-4 m-0 italic">As of {date}</p>
      <div className="grid grid-cols-[repeat(2,1fr)] gap-10 p-4">
        <Indicies />
        <Sectors />
        <TopNews />
      </div>
    </>
  );
}
