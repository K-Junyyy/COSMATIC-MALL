import { useState, useEffect } from "react";
import Head from "next/head";
import { Divider, Header, Loader } from "semantic-ui-react";

import Axios from "axios";

import ItemList from "@/components/ItemList";

export default function Home({ list }) {
  // const [list, setList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // const getData = () => {
  //   Axios.get(API_URL).then((res) => {
  //     console.log(res.data);
  //     setList(res.data);
  //     setIsLoading(false);
  //   });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  // console.log(list);

  return (
    <div>
      <Head>
        <title>HOME | cocoon</title>
        <meta name="description" content="cosmatric mall" />
      </Head>

      {/* {isLoading && (
        <div style={{ padding: "300px 0px" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}

      {!isLoading && ( */}
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
      {/* )} */}
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
