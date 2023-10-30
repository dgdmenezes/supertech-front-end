import React from "react";

import HeaderGroup from "../organisms/HeaderGroup";
import Footer from "../organisms/Footer";
import WhatsAppFloater from "../molecules/WhatsAppFloater";

export default function Default(props) {
  return (
    <div class="container shadow">
      <div class="row">
        <HeaderGroup />
        {props.children}
        <Footer />
      </div>
      <WhatsAppFloater />
    </div>
  );
}
