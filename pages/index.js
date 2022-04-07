import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Divider, Header, Loader } from "semantic-ui-react";

import Axios from "axios";

import ItemList from "@/components/ItemList";

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const getData = () => {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>HOME | cocoon</title>
        <meta name="description" content="cosmatric mall" />
      </Head>
      {isLoading && (
        <div style={{ padding: "300px 0px" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}

      {!isLoading && (
        <>
          {/* 베스트 상품 */}
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider></Divider>
          <ItemList list={list.slice(0, 9)}></ItemList>
          {/* 신상품 */}
          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider></Divider>
          <ItemList list={list.slice(9)}></ItemList>
        </>
      )}
    </div>
  );
}
