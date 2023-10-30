import React from "react";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

export default function BreadCrumbsI() {
  const handleClick = () => console.log("oi");

  return (
    <div className="bg-light" role="presentation" onClick={handleClick}>
      <Breadcrumbs
        separator={<SquareRoundedIcon fontSize="" />}
        aria-label="breadcrumb"
      >
        <Link to="/" underline="hover" color="inherit">
          Início
        </Link>
        <Link underline="hover" color="inherit" href="">
          Hardware
        </Link>
        <Link underline="hover" color="inherit" href="">
          Monitores
        </Link>
        <Link underline="hover" color="inherit" href="">
          Full HD
        </Link>
      </Breadcrumbs>
    </div>
  );
}
