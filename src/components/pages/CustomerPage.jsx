import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Loading from "../atoms/Loading";
import AddressCustumerPageItem from "../molecules/AddressCustumerPageItem";
import PurchaseCustomerPageItem from "../molecules/PurchaseCustomerPageItem";

import { GlobalContex } from "../../contexts/GlobalContext";

import Default from "../templates/Default";
//import AppLoading from "../organisms/AppLoading";
import { getToken, removeToken } from "../../helpers/Auth";

export default function CustomerPage() {
  const { currentUser, setCurrentUser } = React.useContext(GlobalContex);
  const [showAddress, setShowAddress] = React.useState(false);
  const [showPurchases, setShowPurchases] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();

  const token = getToken();

  const URLConnection = process.env.REACT_APP_API_URL;

  React.useEffect(() => {
    const fetchOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`${URLConnection}/users/token`, fetchOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCurrentUser(data);
        setShowAddress(true);
        setShowPurchases(true);
        setIsLoading(false);
      })
      .catch(() => {
        removeToken();
        navigate("/");
      });
  }, [navigate, setCurrentUser, token, URLConnection]);

  return isLoading ? (
    <Loading />
  ) : (
    <Default>
      <div className="col-xs-12 col-sm-12  col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-10 offset-xl-1">
        <div
          className="back-outside shadow col-xl-8 offset-xl-2"
          role="document"
        >
          <div className="shadow back-outside ">
            <div className="d-flex flex-column justify-content-around ">
              <h6 className="mb-0 fs-2 px-4">Página do Cliente</h6>
              <br />
              <h5 className="mb-0  px-4">Olá, {currentUser.name}</h5>

              <form>
                <div className="form-div shadow rounded-4">
                  <fieldset>
                    <legend className="">Meus Endereços</legend>
                    {!!showAddress &&
                      currentUser.addresses.map((address) => {
                        return (
                          <AddressCustumerPageItem
                            address={address}
                            key={address._id}
                          />
                        );
                      })}
                    {!showAddress && (
                      <h6>Você ainda não cadastrou nenhum endereço</h6>
                    )}

                    <h6>
                      <Link to="/register/address">
                        Adicionar novo endereço?
                      </Link>
                    </h6>
                  </fieldset>
                </div>
              </form>

              <form>
                <div className="form-div shadow rounded-4">
                  <fieldset>
                    <legend>Meus Pedidos</legend>
                    {!!showPurchases && (
                      <table>
                        <tr>
                          <th>Núm</th>
                          <th>Status</th>
                          <th>Data</th>
                          <th>Pagamento</th>
                          <th>Rastrear</th>
                          <th>Detalhar</th>
                        </tr>
                        {currentUser.purchases.map((purchase, index) => {
                          return (
                            <PurchaseCustomerPageItem
                              purchase={purchase}
                              index={index}
                              key={purchase._id}
                            />
                          );
                        })}
                      </table>
                    )}
                    {!showPurchases && (
                      <h6>Você ainda não tem nenhum pedido</h6>
                    )}
                  </fieldset>
                </div>
              </form>

              <form>
                <div className="form-div shadow rounded-4">
                  <fieldset>
                    <legend>Meus Cadastro</legend>
                    <h6>
                      <Link>
                        Clique aqui para alterar os dados do seu cadastro
                      </Link>
                    </h6>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Default>
  );
}

/*
<div className="col-xs-12 col-sm-12  col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-10 offset-xl-1">
        <div>
          <h4>Página do Cliente</h4>
          <h6>Olá, {currentUser.name}</h6>
          <div>
            <div>
              <h5>Meus endereços</h5>
              <h6>Você tem {currentUser.addresses} endereços cadastrados</h6>
            </div>
            <div>
              <h5>Meus Dados</h5>
              <h6>Clique aqui para atualizar seus dados</h6>
            </div>

            <div>
              <h5>Meus Pedidos</h5>
              <h6>Você já fez {currentUser.purchases} pedidos</h6>
            </div>
          </div>
        </div>
        Alterar Cadastro, Meus Endereços, Acompanhar pedidos
      </div>
      */
