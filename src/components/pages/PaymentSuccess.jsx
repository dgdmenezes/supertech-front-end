import React from "react";
import Default from "../templates/Default";
import Carousel from "../molecules/Carousel";
import CardGroup from "../organisms/CardGroup";

import PaymentSuccessModal from "../organisms/PaymentSuccessModal";

export default function PaymentSuccess() {
  const URLConnection = process.env.REACT_APP_API_URL;
  const URL = `${URLConnection}/products/index/index?skip=0&limit=12`;

  return (
    <Default>
      <PaymentSuccessModal />
      <Carousel />
      <CardGroup URL={URL} />
    </Default>
  );
}
