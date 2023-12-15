import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalItem from "../molecules/ModalItem";
import { GlobalContex } from "../../contexts/GlobalContext";
import { Link } from "react-router-dom";

export default function CartModal(props) {
  const handleClose = () => props.setShow(false);
  const [noShowCartItens, setNoShowCartItens] = React.useState(true);
  const [ShowPriceCart, setShowCartPrice] = React.useState(false);
  const {
    cart,
    setCartTotalItens,
    cartTotalPrice /*, cartTotalPrice, setCartTotalPrice */,
  } = React.useContext(GlobalContex);

  React.useEffect(() => {
    if (cart.length !== 0) {
      setNoShowCartItens(false);
      setShowCartPrice(true);
    }
  }, [cart]);

  const sumCartQtdItens = () => {
    let total = 0;
    cart.map((item) => {
      total += item.productQt;
      return setCartTotalItens(total);
    });
  };
  sumCartQtdItens();
  // console.log("modal", cart);
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
            {cart.map((item) => (
              <ModalItem item={item} key={item._id} />
            ))}
            {!!noShowCartItens && (
              <h3>
                Opa... você ainda não colocou nenhum item no seu carrinho :(
              </h3>
            )}
            {!!ShowPriceCart && (
              <div className="d-flex justify-content-end">
                {" "}
                <h3>
                  Total:{" "}
                  {cartTotalPrice.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h3>
              </div>
            )}
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Link variant="primary" className="btn btn-primary" to="/cart">
            Finalizar Compra
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
