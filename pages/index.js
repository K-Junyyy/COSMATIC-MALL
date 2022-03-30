import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Divider, Header } from "semantic-ui-react";
import styles from "../styles/Home.module.css";

import Axios from "axios";

import ItemList from "@/components/ItemList";

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const getData = () => {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>HOME | cocoon</title>
      </Head>
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
    </div>
  );
}
