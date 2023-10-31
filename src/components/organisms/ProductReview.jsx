import React from "react";
import ProductReviewItem from "../molecules/ProductReviewItem";

export default function ProductReview() {
  return (
    <div>
      <h2>Avaliações dos usuários</h2>
      <h5>2 clientes avaliaram esse produto:</h5>
      <ProductReviewItem />
      <ProductReviewItem />
    </div>
  );
}
