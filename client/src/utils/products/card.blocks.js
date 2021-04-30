import React from "react";
import Card from "./card";

const CardBlock = ({ items, title, shop, grid }) => {
  const renderCards = () =>
    items
      ? items.map((item) => <Card item={item} key={item._id} grid={grid} />)
      : null;

  return (
    <div className={shop ? "card_block_shop" : "card_block"}>
      <div className={shop ? "" : "container"}>
        {title ? <div className="title">{title}</div> : null}
        <div style={{ display: "flex", flexWrap: "wrap" }}>{renderCards()}</div>
      </div>
    </div>
  );
};

export default CardBlock;
