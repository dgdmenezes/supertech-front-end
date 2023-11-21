import React from "react";
import Loading from "../atoms/Loading";

export default function AddressCustumerPageItem(props) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [address, setAddress] = React.useState("");

  React.useEffect(() => {
    fetch(`http://localhost:3001/address/${props.address}`)
      .then((res) => res.json())
      .then((data) => {
        setAddress(data);
        setIsLoading(false);
      });
  }, [props.address]);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="bg-light">
      <p>
        <h6>{address.nameAddress}</h6>
        {address.address} {address.number} <br />
        {address.referencePoint} - {address.complement} <br />
        {address.cep} - {address.city} - {address.state}
      </p>
    </div>
  );
}
