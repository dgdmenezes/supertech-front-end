import React from "react";
import { GlobalContex } from "../../contexts/GlobalContext";
import { getToken, removeToken } from "../../helpers/Auth";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

export default function VerifyIsAdmin() {
  const { currentUser, setCurrentUser } = React.useContext(GlobalContex);
  const [isLoading, setIsLoading] = React.useState(true);

  const navigate = useNavigate();

  const token = getToken();

  console.log("is Admin fora");

  React.useEffect(() => {
    const fetchOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    console.log("is Admin dentro");

    fetch("http://localhost:3001/users/token", fetchOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCurrentUser(data);
        console.log("is Admin", currentUser);
        setIsLoading(false);
        if (currentUser.role === "admin") {
          isLoading(false);
        } else {
          removeToken();
          navigate("/");
        }
      })
      .catch(() => {
        removeToken();
        navigate("/");
      });
  }, [currentUser, navigate, isLoading, setCurrentUser, token]);
  return isLoading ? <Loading message={"Verificando usuário"} /> : <div></div>;
}
