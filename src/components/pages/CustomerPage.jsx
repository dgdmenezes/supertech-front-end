import React from "react";
import { useNavigate } from "react-router-dom";

import { GlobalContex } from "../../contexts/GlobalContext";

import Default from "../templates/Default";
//import AppLoading from "../organisms/AppLoading";
import { getToken, removeToken } from "../../helpers/Auth";

export default function CustomerPage() {
  const { currentUser, setCurrentUser } = React.useContext(GlobalContex);
  const navigate = useNavigate();

  const token = getToken();

  console.log(currentUser);

  React.useEffect(() => {
    const fetchOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch("http://localhost:3001/users/token", fetchOptions)
      .then((res) => res.json())
      .then((data) => setCurrentUser(data))
      .catch(() => {
        removeToken();
        navigate("/");
      });
  }, [navigate, token, setCurrentUser]);

  return (
    <Default>
      <div>
        <div>
          <h5>Página do Cliente</h5>
          <h6>Olá Cliente {currentUser.name}</h6>
          <h6>Email {currentUser.email}</h6>
          <h6>Você já fez {currentUser.purchases} pedidos</h6>
          <h6>Você tem {currentUser.addresses} endereços cadastrados</h6>
          <h6>Seu Genero é {currentUser.gender}</h6>
          <h6>Seu Telefone é {currentUser.phoneNumber}</h6>
        </div>
        Alterar Cadastro, Meus Endereços, Acompanhar pedidos
      </div>
    </Default>
  );
}
