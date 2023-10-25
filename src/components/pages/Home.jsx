import React from "react";
import HeaderGroup from "../organisms/HeaderGroup";
import Carousel from "../molecules/Carousel";
import CardGroup from "../organisms/CardGroup";
import WhatsAppFloater from "../molecules/WhatsAppFloater";
import Footer from "../organisms/Footer";

export default function Home() {
  return (
    <div class="container shadow">
      <header class="row">
        <HeaderGroup />
        <Carousel />
        <CardGroup />
        <Footer />
        <WhatsAppFloater />
      </header>
    </div>
  );
}
