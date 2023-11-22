import React from "react";
import { CircularProgress } from "@mui/material";

export default function Loading(props) {
  return (
    <div>
      <CircularProgress />
      {props.message && <h3>{props.message}</h3>}
    </div>
  );
}
