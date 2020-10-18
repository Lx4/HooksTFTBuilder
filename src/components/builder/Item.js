import React from "react";
import { useDrag } from "react-dnd";
import { getIdFormated } from "../../helpers/items";

const Item = ({ item }) => {
  const id = getIdFormated(item.id);

  // DRAG
  // eslint-disable-next-line
  const [{ isDragging }, drag] = useDrag({
    item: { type: "item", item, origin: "items" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="h-8 w-8 sm:h-16 sm:w-16 sm:mr-1 sm:mb-1 object-cover rounded overflow-hidden"
    >
      <img
        src={`${process.env.REACT_APP_URL_IMG}/img/items/${id}.png`}
        alt={`${item.name}`}
      />
    </div>
  );
};

export default Item;
