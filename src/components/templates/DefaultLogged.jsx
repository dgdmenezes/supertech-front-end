import React from "react";

import HeaderGroupLogged from "../organisms/HeaderGroupLogged";
import Footer from "../organisms/Footer";
import WhatsAppFloater from "../molecules/WhatsAppFloater";

export default function Default(props) {
  return (
    <div className="container shadow">
      <div className="row bg-light">
        <HeaderGroupLogged />
        {props.children}
        <Footer />
      </div>
      <WhatsAppFloater />
    </div>
  );
}
