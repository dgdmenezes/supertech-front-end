import React from "react";
import Default from "../templates/Default";
import Carousel from "../molecules/Carousel";
import CardGroup from "../organisms/CardGroup";
import VerifyValidToken from "../atoms/VerifyValidToken";

export default function Home() {
  const URLConnection = process.env.REACT_APP_API_URL;
  const URL = `${URLConnection}/products/index/index?skip=0&limit=12`;

  return (
    <Default>
      <VerifyValidToken />
      <Carousel />
      <CardGroup URL={URL} />
    </Default>
  );
}
