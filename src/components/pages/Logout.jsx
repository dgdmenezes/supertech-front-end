import React from "react";
import { useNavigate } from "react-router-dom";
import Default from "../templates/Default";

import Loading from "../atoms/Loading";
import { removeToken } from "../../helpers/Auth";

export default function Logout() {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      removeToken();
      navigate("/");
    }, 1500);
  }, [navigate]);

  return (
    <Default>
      <Loading message="Desconectando..." />
    </Default>
  );
}
