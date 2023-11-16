import React from "react";
import Footer from "../organisms/Footer";
import HeaderSimple from "../molecules/HeaderSimple";

export default function DefaultSimple(props) {
  return (
    <div className="">
      <div className="container shadow bg-light">
        <div className="row bg-light"></div>
        <HeaderSimple />
        {props.children}
        <Footer />
      </div>
    </div>
  );
}
