import Axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";

function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const checkLogin = () => {
    Axios.get("/api/isLogin").then((res) => {
      console.log(res);
      if (res.status === 200 && res.data.name) {
        // 로그인 상태
        setIsLogin(true);
      } else {
        // 비로그인 상태
        router.push("/login");
      }
    });
  };

  const logout = () => {
    Axios.get("/api/logout").then((res) => {
      if (res.status === 200) {
        router.push("/");
      }
    });
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return <>admin{isLogin && <Button onClick={logout}>Logout</Button>}</>;
}

export default Admin;
