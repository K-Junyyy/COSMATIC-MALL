import React from "react";
import { Grid } from "semantic-ui-react";
import Link from "next/link";

function ItemList({ list }) {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.id}>
              <Link href={`/view/${item.id}`}>
                <div className="item-list">
                  <img src={item.image_link} alt={item.name} />
                  <strong className="title">{item.name}</strong>
                  <span className="info">
                    {item.category} {item.product_type}
                  </span>
                  <strong className="price">${item.price}</strong>
                </div>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default ItemList;
