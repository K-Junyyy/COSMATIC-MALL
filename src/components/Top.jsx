import React from "react";
import { Header } from "semantic-ui-react";
import Image from "next/image";
import Logo from "@/images/cocoon.svg";
import Gnb from "./Gnb";

function Top() {
  return (
    <div className="pt-3">
      <div className="d-flex">
        <Image src={Logo} alt="logo" width="100px" height="100px"></Image>
        <Header className="mt-5" as="h1">
          Cosmatic Mall
        </Header>
      </div>
      <Gnb></Gnb>
    </div>
  );
}

export default Top;
