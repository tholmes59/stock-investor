import React from "react";
import Sp500 from "./Indicies/Sp500";
import Ftse from "./Indicies/Ftse";
import Nikk from "./Indicies/Nikk";

const Indicies = () => {
  return (
    <div className="flex flex-row flex-wrap gap-2.5 content-start">
      <Sp500 />
      <Ftse />
      <Nikk />
    </div>
  );
};

export default Indicies;
