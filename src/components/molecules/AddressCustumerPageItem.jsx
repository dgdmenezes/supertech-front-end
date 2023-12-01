import React from "react";
import Loading from "../atoms/Loading";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import ModalAddressDelete from "../molecules/ModalAddressDelete";

export default function AddressCustumerPageItem(props) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [address, setAddress] = React.useState("");
  const [open, setOpen] = React.useState(false);

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
        <div>
          <UpdateIcon alt="atualizar endereço" />
        </div>
        <div>
          <DeleteIcon onClick={() => setOpen(true)} />
        </div>
        <ModalAddressDelete
          open={open}
          setOpen={setOpen}
          address={props.address}
          nameAddress={address.nameAddress}
        />
      </div>
    </div>
  );
}
