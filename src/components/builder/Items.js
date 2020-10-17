import React from "react";
import items from "../../data/items.json";

import Item from "./Item";

const Items = () => {
  return (
    <div
      className="
        flex max-w-2xl flex-wrap "
    >
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Items;
