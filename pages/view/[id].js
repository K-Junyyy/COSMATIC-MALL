import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Axios from "axios";
import { Loader } from "semantic-ui-react";

import Item from "@/components/Item";

function Post({ item }) {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description} />
          </Head>
          <Item item={item}></Item>
        </>
      )}
    </>
  );
}

export default Post;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(API_URL);
  const data = res.data;
  return {
    props: {
      item: data,
    },
  };
}
