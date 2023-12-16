import React from "react";
import Loading from "../atoms/Loading";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

export default function AddressCustumerPageItem(props) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [address, setAddress] = React.useState("");
  const URLConnection = process.env.REACT_APP_API_URL;

  React.useEffect(() => {
    fetch(`${URLConnection}/address/${props.address}`)
      .then((res) => res.json())
      .then((data) => {
        setAddress(data);
        setIsLoading(false);
      });
  }, [props.address, URLConnection]);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="bg-light d-flex flex-row justify-content-between">
      <div>
        <p>
          <h6>{address.nameAddress}</h6>
          {address.address} {address.number} <br />
          {address.referencePoint} - {address.complement} <br />
          {address.cep} - {address.city} - {address.state}
        </p>
      </div>
      <div className="d-flex align-items-center">
        <FormControlLabel
          value={address._id}
          control={<Radio />}
          label={address.nameAddress}
          onClick={() => {
            props.setShippingAddress({ address });
            props.setShowPaymentMehod(true);
          }}
        />
      </div>
    </div>
  );
}
