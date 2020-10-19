import React from "react";
import { getIdFormated } from "../../helpers/items";

const ItemsList = ({ items }) => {
  return (
    <div className="flex w-11 justify-around  absolute bottom-0 z-50">
      {items.map((item) => (
        <img
          className="w-4 h-4 rounded-full border"
          key={item.id}
          src={`${process.env.REACT_APP_URL_IMG}/img/items/${getIdFormated(
            item.id
          )}.png`}
          alt={`${item.name}`}
        />
      ))}
    </div>
  );
};

export default ItemsList;
