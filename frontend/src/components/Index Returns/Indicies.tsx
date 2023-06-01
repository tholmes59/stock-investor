import React from "react";
import Sp500 from "./Indicies/Sp500";
import Ftse from "./Indicies/Ftse";
import Nikk from "./Indicies/Nikk";
import Nasdaq from "./Indicies/Nasdaq";

const Indicies = () => {
  return (
    // <div className="flex flex-row flex-wrap gap-2.5 content-start">
    <div className="grid grid-cols-2 gap-2.5 ">
      <Sp500 />
      <Nasdaq />
      <Ftse />
      <Nikk />
    </div>
  );
};

export default Indicies;
