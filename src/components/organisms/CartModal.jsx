import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalItem from "../molecules/ModalItem";

export default function CartModal(props) {
  const handleClose = () => props.setShow(false);
  return (
    <div>
      <Modal
        show={props.show}
        onHide={handleClose}
        animation={false}
        aria-labelledby="contained-modal-title-vcenter"
        className="modal-xl"
      >
        <Modal.Header closeButton>
          <Modal.Title>Meu Carrinho</Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
          <Container>
            <ModalItem />
            <ModalItem />
            <ModalItem />
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button
            variant="primary"
            className="btn btn-primary"
            onClick={handleClose}
          >
            Finalizar Compra
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
