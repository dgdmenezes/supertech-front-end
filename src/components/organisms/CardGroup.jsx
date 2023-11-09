import React from "react";
import AppLoading from "./AppLoading";
import Card from "../molecules/Card";

export default function CardGroup(props) {
  const URI = props.URL;
  const [products, setProducts] = React.useState([]);
  const [isLoading, SetIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`${URI}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        SetIsLoading(false);
        console.log("cardGroup Fetch", URI);
      });
  }, [URI]);

  return isLoading ? (
    <AppLoading />
  ) : (
    <div className="px-2 py-3">
      <div className="row g-3 container-card">
        {products.map((product) => (
          <Card product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}
