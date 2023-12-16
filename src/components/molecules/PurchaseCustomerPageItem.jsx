import React from "react";
import Loading from "../atoms/Loading";
import { Link } from "react-router-dom";

export default function PurchaseCustomerPageItem(props) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [purchase, setPurchase] = React.useState("");
  const URLConnection = process.env.REACT_APP_API_URL;

  React.useEffect(() => {
    fetch(`${URLConnection}/purchase/${props.purchase}`)
      .then((res) => res.json())
      .then((data) => {
        setPurchase(data);
        setIsLoading(false);
      });
  }, [props.purchase, URLConnection]);

  const formatarData = (data) => {
    const dataObj = new Date(data);
    const dia = String(dataObj.getDate()).padStart(2, "0");
    const mes = String(dataObj.getMonth() + 1).padStart(2, "0");
    const ano = dataObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  const dataFormatada = formatarData(purchase.created_at);

  return isLoading ? (
    <Loading />
  ) : (
    <tr>
      <td>#{props.index + 1}</td>
      <td>{purchase.paymentStatus}</td>
      <td>{dataFormatada}</td>
      <td>{purchase.paymentMethod}</td>
      <td>aguardando</td>
      <td>
        <Link to={`/purchases/${purchase._id}`}>detalhar</Link>
      </td>
    </tr>
  );
}
