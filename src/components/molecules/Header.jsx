/* eslint jsx-a11y/anchor-is-valid:0 */
//import { Link } from "react-router-dom";
import HeaderLogo from "../atoms/HeaderLogo";
import HeaderSearchBar from "../atoms/HeaderSearchBar";
import HeaderDropDownIconLogin from "../atoms/HeaderDropDownIconLogin";
import HeaderCartIcon from "../atoms/HeaderCartIcon";

import React from "react";

export default function Header() {
  return (
    <div className="row ">
      <div className="col-xs-12 col-sm-12 col-md-3 col-xl-2 fora-logo">
        <HeaderLogo />
      </div>
      <div className="d-flex col-xs-6 col-sm-12 col-md-5 col-xl-8 align-items-center ">
        <HeaderSearchBar />
      </div>
      <div className="col-xs-1 col-sm-1 col-md-1 col-xl-1 header-icon-button ">
        <HeaderDropDownIconLogin />
      </div>

      <div className="col-xs-1 col-sm-1 col-md-1 col-xl-1 header-icon-button ">
        <HeaderCartIcon />
      </div>
    </div>
  );
}
