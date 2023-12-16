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
  const [updateCart, setUpdateCart] = React.useState();
  const {
    cart,
    setCartTotalItens,
    cartTotalPrice /*, cartTotalPrice, setCartTotalPrice */,
  } = React.useContext(GlobalContex);

  React.useEffect(() => {
    console.log(updateCart);
  }, [updateCart]);

  const incrementCartItem = (id) => {
    const found = cart.find((item) => item.productID === id);
    let quantidade = found.productQt;
    quantidade += 1;
    found.productQt = quantidade;
    setUpdateCart(cart); //força a atualização do estado
  };

  const decrementCartItem = (id) => {
    const found = cart.find((item) => item.productID === id);
    let quantidade = found.productQt;
    quantidade -= 1;
    if (quantidade === 0) {
      const index = cart.findIndex((element) => element === found);
      cart.splice(index, 1);
    } else {
      found.productQt = quantidade;
    }

    setUpdateCart(cart);
  };

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
            {cart.map((item) => {
              let modalKey = `${item._id}modal`; //isso é para não repetir o mesmo numero de id dos cards com o modal e garantir o uniqueID
              return (
                <ModalItem
                  item={item}
                  key={modalKey}
                  decrementCartItem={decrementCartItem}
                  incrementCartItem={incrementCartItem}
                />
              );
            })}
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
