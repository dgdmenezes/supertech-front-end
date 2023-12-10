import React from "react";
import Default from "../templates/Default";
import CardGroup from "../organisms/CardGroup";
import { useParams } from "react-router-dom";
import CardPagination from "../molecules/CardPagination";
import VerifyValidToken from "../atoms/VerifyValidToken";

export default function SearchPage() {
  const cardLimitShow = 12;

  const [skip, setSkip] = React.useState(0);
  const [limit, setLimit] = React.useState(cardLimitShow);
  const { searchTag } = useParams();

  const URLConnection = process.env.REACT_APP_API_URL;

  const URL = `${URLConnection}/products/searchbar/find?tags=${searchTag}&skip=${skip}&limit=${limit}`;
  const URLCount = `${URLConnection}/products/find/count?tags=${searchTag}`;

  return (
    <Default>
      <VerifyValidToken />
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
