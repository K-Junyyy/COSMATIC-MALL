import Axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { Form, Button } from "semantic-ui-react";

function Login() {
  const router = useRouter();
  const login = () => {
    Axios.post("/api/login").then((res) => {
      if (res.status === 200) {
        // 로그인 성공
        router.push("/admin");
      }
    });
  };
  return (
    <div style={{ padding: "100px 0px", textAlign: "center" }}>
      <Form>
        <Form.Field inline>
          <input placeholder="ID" />
        </Form.Field>
        <Form.Field inline>
          <input type="password" placeholder="password" />
        </Form.Field>
        <Button color="blue" onClick={login}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
