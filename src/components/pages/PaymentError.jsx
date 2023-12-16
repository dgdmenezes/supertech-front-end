import React from "react";
import Default from "../templates/Default";
import Carousel from "../molecules/Carousel";
import CardGroup from "../organisms/CardGroup";

import PaymentErrorModal from "../organisms/PaymentErrorModal";

export default function PaymentSuccess() {
  const URLConnection = process.env.REACT_APP_API_URL;
  const URL = `${URLConnection}/products/index/index?skip=0&limit=12`;

  return (
    <Default>
      <PaymentErrorModal />
      <Carousel />
      <CardGroup URL={URL} />
    </Default>
  );
}
