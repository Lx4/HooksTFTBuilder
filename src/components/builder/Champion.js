import React from "react";

const Champion = ({ championId }) => {
  return (
    <div
      className="h-8 w-8 object-cover border rounded border-green-500 overflow-hidden"
      draggable={true}
      onDragStart={(e) => {
        e.dataTransfer.setData("champId", championId);
        e.dataTransfer.setData("source", "championsPicker");
      }}
    >
      <img src={`/img/champions/${championId}.png`} alt={`${championId}`} />
    </div>
  );
};

export default Champion;
