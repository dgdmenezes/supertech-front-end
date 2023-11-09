import React from "react";
import Default from "../templates/Default";
import CardGroup from "../organisms/CardGroup";
import { useParams } from "react-router-dom";
import CardPagination from "../molecules/CardPagination";

export default function CategoryPage() {
  const [skip /*setSkip*/] = React.useState(0);
  const { categoryName } = useParams();
  const cardLimitShow = 12;
  const URL = `http://localhost:3001/products/find/find?category=${categoryName}&skip=${skip}&limit=${cardLimitShow}`;
  const URLCount = `http://localhost:3001/products/find/count?category=${categoryName}`;

  return (
    <Default>
      <CardGroup URL={URL} />
      <CardPagination URLCount={URLCount} cardLimitShow={cardLimitShow} />
    </Default>
  );
}
