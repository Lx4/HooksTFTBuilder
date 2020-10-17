import React from "react";

const Item = ({ item }) => {
  const id = getIdFormated(item.id);

  return (
    <div className="h-8 w-8 sm:h-16 sm:w-16 sm:mr-1 sm:mb-1 object-cover rounded overflow-hidden">
      <img
        src={`${process.env.REACT_APP_URL_IMG}/img/items/${id}.png`}
        alt={`${item.name}`}
      />
    </div>
  );
};

const getIdFormated = (id) => {
  return id.toString().padStart(2, "0");
};

export default Item;
