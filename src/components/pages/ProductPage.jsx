import React from "react";
import Default from "../templates/Default";
import CardGroup from "../organisms/CardGroup";

import BreadCrumbsI from "../organisms/BreadCrumbsI";
import ProductSpecs from "../organisms/ProductSpecs";
import ProductReview from "../organisms/ProductReview";
import ProductShow from "../organisms/ProductShow";

export default function ProductPage() {
  const endpoint = "products/index/0/4";
  return (
    <Default>
      <div className="bg-light">
        <div class="base-produto-div">
          <BreadCrumbsI />
          <ProductShow />
          <ProductSpecs />
        </div>
        <div class="px-5">
          <h4>Você também pode se interessar por:</h4>
          <CardGroup endpoint={endpoint} />
        </div>
        <ProductReview />
      </div>
    </Default>
  );
}
