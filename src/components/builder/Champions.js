import React from "react";
import champions from "../../data/champions";

import Champion from "./Champion";

const Champions = () => {
  return (
    <div className="flex max-w-2xl flex-wrap">
      {champions.map((champion) => (
        <Champion key={champion.championId} champion={champion}></Champion>
      ))}
    </div>
  );
};

export default Champions;
