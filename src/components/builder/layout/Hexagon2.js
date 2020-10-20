import React from "react";

import "./Hexagon.css";

const Hexagon = ({ name, style }) => {
  const bg = !style ? "bg-gray-700" : style;
  return (
    <div
      className={`w-9 h-9 sm:w-20 sm:h-22  hexagon flex items-center justify-center bg-black`}
    >
      <div
        className={`w-8 h-8 sm:w-20 sm:h-22  hexagon  flex items-center justify-center ${bg} } `}
      >
        <img
          className="w-5 h-5"
          src={`${
            process.env.REACT_APP_URL_IMG
          }/img/traits/${name.toLowerCase()}.svg`}
        />
      </div>
    </div>
  );
};

export default Hexagon;
