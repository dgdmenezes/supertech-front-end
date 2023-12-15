import React from "react";
import Loading from "../atoms/Loading";

export default function PaymentPageItem(props) {
  const [productData, setProductData] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  const URLConnection = process.env.REACT_APP_API_URL;

  React.useEffect(() => {
    fetch(`${URLConnection}/products/${props.item.productID}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        setIsLoading(false);
      });
  }, [URLConnection, props.item]);

  const total = props.item.productQt * props.item.productPrice;

  return isLoading ? (
    <Loading />
  ) : (
    <div className="row modalItem">
      <hr />
      <div className="modalItemImagem col-3">
        <img
          className="modalImagem"
          src={productData.image}
          alt="Um monitor com exibindo um gráfico e fundo em vermelho. Tem a base prateada"
        />
      </div>
      <div className="modalItemDescricao col-5">
        <h6>
          {props.item.productCategory} {props.item.productName}
        </h6>
      </div>
      <div className="modalItemQuantidade col-2">
        <h5>Quantidade: {props.item.productQt} </h5>
      </div>
      <div className="modalItemPreco col-2">
        <div className="col">
          <div className="row">
            <h5>
              {props.item.productPrice.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </h5>
          </div>
          <div className="row">
            <h5>
              Total:{" "}
              {total.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
