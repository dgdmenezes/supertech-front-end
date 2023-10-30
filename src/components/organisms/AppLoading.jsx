import React from "react";
import Loading from "../atoms/Loading";

export default function AppLoading() {
  return (
    <div className="bg-light">
      <h1> Carregando...</h1>
      <Loading />
    </div>
  );
}
