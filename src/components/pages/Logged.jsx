import React from "react";
import AdminRegisterProduct from "./AdminRegisterProduct";
import CustomerPage from "./CustomerPage";
import { GlobalContex } from "../../contexts/GlobalContext";
import { getToken, removeToken } from "../../helpers/Auth";
import { useNavigate } from "react-router-dom";
import AppLoading from "../organisms/AppLoading";

export default function Logged() {
  const { currentUser, setCurrentUser } = React.useContext(GlobalContex);
  const [showAdmin, setShowAdmin] = React.useState(false);
  const [showUser, setShowUser] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const token = getToken();
  const navigate = useNavigate();
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
        setIsLoading(false);
        if (currentUser.role === "user") {
          setShowUser(true);
          setShowAdmin(false);
        } else if (currentUser.role === "admin") {
          setShowUser(false);
          setShowAdmin(true);
        }
      })
      .catch(() => {
        removeToken();
        navigate("/");
      });
  }, [URLConnection, currentUser.role, navigate, setCurrentUser, token]);
  return isLoading ? (
    <AppLoading />
  ) : (
    <div>
      {!!showUser && <CustomerPage />}
      {!!showAdmin && <AdminRegisterProduct />}
    </div>
  );
}
