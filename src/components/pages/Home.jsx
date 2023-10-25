import React from "react";
import Header from "../molecules/Header";
import NavBar from "../molecules/NavBar";
import Carousel from "../molecules/Carousel";
import CardGroup from "../organisms/CardGroup";
import Footer from "../organisms/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <NavBar />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <CardGroup />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
