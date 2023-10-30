import React from "react";
import Default from "../templates/Default";
import Carousel from "../molecules/Carousel";
import CardGroup from "../organisms/CardGroup";

export default function Home() {
  return (
    <Default>
      <Carousel />
      <CardGroup />
    </Default>
  );
}
