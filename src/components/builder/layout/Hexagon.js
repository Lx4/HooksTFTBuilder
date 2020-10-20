// DEPRECATED FOR NOW (20/10/2020) : using svg to create hexagons
import React from "react";

const Hexagon = ({ name }) => {
  return (
    <svg width="30" height="30">
      <defs>
        <pattern
          id={`pattern-${name.toLowerCase()}`}
          height="100%"
          width="100%"
          patternContentUnits="objectBoundingBox"
        >
          <image
            height="1"
            width="1"
            preserveAspectRatio="none"
            href={`${
              process.env.REACT_APP_URL_IMG
            }/img/traits/${name.toLowerCase()}.png`}
            transform="scale(1)"
          />
        </pattern>
      </defs>

      <polygon
        // style="stroke: #999DA3;"

        style={{ stroke: "black", strokeWidth: "3px" }}
        fill={`url(#pattern-${name.toLowerCase()})`}
        points="50 0, 95 25, 95 75, 50 100, 5 75, 5 25"
        transform="scale(0.3)"
      />
    </svg>
  );
};

export default Hexagon;
