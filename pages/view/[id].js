import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Axios from "axios";

import Item from "@/components/Item";

function Post() {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState({});

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  const getData = () => {
    Axios.get(API_URL).then((res) => {
      setItem(res.data);
    });
  };
  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);
  return <Item item={item}></Item>;
}

export default Post;
