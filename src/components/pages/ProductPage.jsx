import React from "react";
import Default from "../templates/Default";
import Card from "../molecules/Card";
import image from "../../images/prodimages/product123.jpg";
import BreadCrumbsI from "../organisms/BreadCrumbsI";
import ProductSpecs from "../organisms/ProductSpecs";
import ProductReview from "../organisms/ProductReview";
import ProductShow from "../organisms/ProductShow";

export default function ProductPage() {
  return (
    <Default>
      <div className="bg-light">
        <div class="base-produto-div">
          <BreadCrumbsI />
          <ProductShow />
          <ProductSpecs />
        </div>
        <div class="px-5">
          <div class="row g-3 container-card">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <ProductReview />
      </div>
    </Default>
  );
}
