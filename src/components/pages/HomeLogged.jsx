import React from "react";
import DefaultLogged from "../templates/DefaultLogged";
import Carousel from "../molecules/Carousel";
import CardGroup from "../organisms/CardGroup";

export default function HomeLogged() {
  const URL = "http://localhost:3001/products/index/index?skip=0&limit=12";
  return (
    <DefaultLogged>
      <Carousel />
      <CardGroup URL={URL} />
    </DefaultLogged>
  );
}
