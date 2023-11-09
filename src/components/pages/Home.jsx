import React from "react";
import Default from "../templates/Default";
import Carousel from "../molecules/Carousel";
import CardGroup from "../organisms/CardGroup";

export default function Home() {
  const URL = "http://localhost:3001/products/index/index?skip=0&limit=12";
  return (
    <Default>
      <Carousel />
      <CardGroup URL={URL} />
    </Default>
  );
}
