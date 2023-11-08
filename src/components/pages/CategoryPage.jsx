import React from "react";
import Default from "../templates/Default";
import CardGroup from "../organisms/CardGroup";
import { useParams } from "react-router-dom";
import CardPagination from "../molecules/CardPagination";

export default function CategoryPage() {
  //const [category, setCategory] = React.useState([]);
  const { categoryName } = useParams();
  const URL = `http://localhost:3001/products/find/find?category=${categoryName}&skip=0&limit=12`;
  const URLCount = `http://localhost:3001/products/find/count?category=${categoryName}`;

  return (
    <Default>
      <CardGroup URL={URL} />
      <CardPagination URLCount={URLCount} />
    </Default>
  );
}
