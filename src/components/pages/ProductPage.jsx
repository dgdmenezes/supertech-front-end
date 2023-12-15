import React from "react";
import Default from "../templates/Default";
import CardGroup from "../organisms/CardGroup";

import BreadCrumbsI from "../organisms/BreadCrumbsI";
import ProductSpecs from "../organisms/ProductSpecs";
import ProductReview from "../organisms/ProductReview";
import ProductShow from "../organisms/ProductShow";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const URL = "http://localhost:3001/products/index/index?skip=0&limit=4";
  const { productId } = useParams();
  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:3001/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [productId]);

  return (
    <Default>
      <div className="bg-light">
        <div className="base-produto-div">
          <BreadCrumbsI />
          <ProductShow product={product} setProduct={setProduct} />
          <ProductSpecs />
        </div>
        <div className="px-5">
          <h4>Você também pode se interessar por:</h4>
          <CardGroup URL={URL} />
        </div>
        <ProductReview />
      </div>
    </Default>
  );
}
