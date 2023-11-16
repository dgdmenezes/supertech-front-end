import React from "react";
import { Link } from "react-router-dom";
import GoogleTPLogo from "../../images/Google__G__Logo.svg";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function LoginModal(props) {
  const handleClose = () => props.setShow(false);
  return (
    <div>
      <Modal
        show={props.show}
        onHide={handleClose}
        animation={false}
        aria-labelledby="contained-modal-title-vcenter"
        className="modal-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="grid-example">
          <Container>
            <div className="row login-div">
              <div className="col">
                <div className=" login-form-div" role="document">
                  <div className="rounded-4 shadow">
                    <div className="p-5 pb-4 border-bottom-0">
                      <h1 className="fw-bold mb-0 fs-2">Fazer login</h1>
                    </div>

                    <div className="p-5 pt-0">
                      <form className="">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control rounded-3 "
                            id="floatingInput"
                            placeholder="Ex.: email@mail.com"
                          />
                          <label htmlFor="floatingInput">
                            Digite seu email
                          </label>
                        </div>
                        <div className="form-floating mb-1">
                          <input
                            type="password"
                            className="form-control rounded-3"
                            id="floatingPassword"
                            placeholder="Digite sua senha"
                          />
                          <label htmlFor="floatingPassword">
                            Digite a sua senha
                          </label>
                        </div>
                        <div className="texto-link-div mb-2">
                          <Link to="" className="texto-link">
                            Esqueceu a sua senha?
                          </Link>
                        </div>
                        <button
                          className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                          type="submit"
                        >
                          Continuar
                        </button>

                        <hr className="my-4" />
                        <h2 className="fs-5 fw-bold mb-3">ou entrar com...</h2>
                        <button
                          className="w-100 py-2 mb-2 btn rounded-3 btn-google"
                          type="submit"
                        >
                          <img src={GoogleTPLogo} alt="" />
                          Login com Google
                        </button>
                        <Link to="/register" className="texto-link">
                          Não tem uma conta?Cadastre-se
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
