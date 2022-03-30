import React from "react";
import { Button, Header, Divider } from "semantic-ui-react";

function Item({ item }) {
  const {
    name,
    image_link,
    price,
    description,
    updated_at,
    category,
    product_type,
    product_link,
  } = item;
  return (
    <div className="item">
      <div className="container">
        <img src={image_link} alt={name} />
        <div className="info">
          <strong className="name">{name}</strong>
          <strong className="price">${price}</strong>
          <span className="type">
            {category ? `${category}/` : ""} {product_type}
          </span>
          <Button color="orange">구매하기</Button>
        </div>
      </div>
      <Divider></Divider>
      <div className="description">
        <Header as="h3">Description</Header>
        <p>{description}</p>
      </div>
      <Divider></Divider>
    </div>
  );
}

export default Item;
