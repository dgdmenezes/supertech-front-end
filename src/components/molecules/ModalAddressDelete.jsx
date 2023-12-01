import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalAddressDelete(props) {
  const navigate = useNavigate();
  const handleClose = () => props.setOpen(false);

  const fetchOptions = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  console.log("Aqui" + props.nameAddress);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/address/delete/${props.address}`, fetchOptions)
      .then(() => {
        window.location.reload();
        navigate("/logged");
        console.log("ok");
      })
      .catch((e) => console.log("erro", e));
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirma a exlusão do endereço {props.nameAddress}?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" onClick={handleClose}>
                Não exluir
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={handleFormSubmit}
              >
                Excluir
              </Button>
            </Stack>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
