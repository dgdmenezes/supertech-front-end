import React from "react";
import Default from "../templates/Default";
import CardGroup from "../organisms/CardGroup";
import { useParams } from "react-router-dom";
import CardPagination from "../molecules/CardPagination";

export default function CategoryPage() {
  const cardLimitShow = 12;
  const URLConnection = process.env.REACT_APP_API_URL;
  const [skip, setSkip] = React.useState(0);
  const [limit, setLimit] = React.useState(cardLimitShow);
  const { categoryName } = useParams();

  const URL = `${URLConnection}/products/find/find?category=${categoryName}&skip=${skip}&limit=${limit}`;
  const URLCount = `${URLConnection}/products/find/count?category=${categoryName}`;
  console.log("URL que retorna produtos", URL);
  console.log("URL que retorna contagem", URLCount);

  //http://localhost:3001/products/find/find?category=Monitor&limit=4&skip=0
  //http://localhost:3001/products/find/count?category=notebooK
  return (
    <Default>
      <CardGroup URL={URL} />
      <CardPagination
        URLCount={URLCount}
        cardLimitShow={cardLimitShow}
        skip={skip}
        setSkip={setSkip}
        limit={limit}
        setLimit={setLimit}
      />
    </Default>
  );
}
