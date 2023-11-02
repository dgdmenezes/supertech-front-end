import React from "react";

import HeaderGroup from "../organisms/HeaderGroup";
import Footer from "../organisms/Footer";
import WhatsAppFloater from "../molecules/WhatsAppFloater";

export default function Default(props) {
  return (
    <div className="container shadow">
      <div className="row bg-light">
        <HeaderGroup />
        {props.children}
        <Footer />
      </div>
      <WhatsAppFloater />
    </div>
  );
}
