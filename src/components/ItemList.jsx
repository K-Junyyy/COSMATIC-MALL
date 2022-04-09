import React from "react";
import { Grid } from "semantic-ui-react";
import Link from "next/link";
import Image from "next/image";

function ItemList({ list }) {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.id}>
              <Link href="/detail/[id]" as={`/detail/${item.id}`} passHref>
                <a>
                  <div className="item-list">
                    <div className="img">
                      <Image
                        src={item.image_link}
                        alt={item.name}
                        width="200px"
                        height="200px"
                        objectFit="contain"
                      ></Image>
                    </div>
                    <strong className="title">{item.name}</strong>
                    <span className="info">
                      {item.category} {item.product_type}
                    </span>
                    <strong className="price">${item.price}</strong>
                  </div>
                </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default ItemList;
