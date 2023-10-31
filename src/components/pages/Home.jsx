import React from "react";
import Default from "../templates/Default";
import Carousel from "../molecules/Carousel";
import CardGroup from "../organisms/CardGroup";

export default function Home() {
  const endpoint = "products";
  return (
    <Default>
      <Carousel />
      <CardGroup endpoint={endpoint} />
    </Default>
  );
}
