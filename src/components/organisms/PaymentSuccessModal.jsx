import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Stack from "@mui/material/Stack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  justifyContent: "center",
  p: 4,
  display: "flex",
  flexDirection: "column",
};

export default function PaymentSuccessModal() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Typography id="modal-modal-title" variant="h4" component="h1">
              Pagamento Efetudo com sucesso!
            </Typography>
          </Box>
          <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap">
            <Box>
              <Button onClick={handleClose} variant="outlined" color="success">
                Fechar{" "}
              </Button>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
