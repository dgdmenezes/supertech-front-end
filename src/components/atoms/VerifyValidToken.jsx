import React from "react";
import { getToken, removeToken } from "../../helpers/Auth";

export default function VerifyValidToken() {
  const token = getToken();

  const fetchOptions = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  fetch("http://localhost:3001/users/token", fetchOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch(() => {
      removeToken();
    });

  return <div></div>;
}
