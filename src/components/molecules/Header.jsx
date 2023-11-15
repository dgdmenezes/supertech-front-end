/* eslint jsx-a11y/anchor-is-valid:0 */
//import { Link } from "react-router-dom";
import HeaderLogo from "../atoms/HeaderLogo";
import HeaderSearchBar from "../atoms/HeaderSearchBar";
import HeaderDropDownIconLogin from "../atoms/HeaderDropDownIconLogin";
import HeaderCartIcon from "../atoms/HeaderCartIcon";

import React from "react";

export default function Header() {
  return (
    <div className="row">
      <div className="col-8 offset-2 col-sm-8 offset-sm-2 col-md-3 offset-md-0 col-xl-2 offset-xl-0 col-xxl-2 offset-xxl-0 d-flex d-flex align-items-start">
        <HeaderLogo />
      </div>
      <div className="d-flex col-6 offset-1 col-xs-6 col-sm-7 offset-sm-1  col-md-7 offset-md-0 col-xl-8 offset-xl-0 col-xxl-7 offset-xxl-0 d-flex align-items-center">
        <HeaderSearchBar />
      </div>
      <div className="col-1 col-sm-1 col-md-1 col-xl-1 offset-xl-0 col-xxl-1 offset-xxl-0 d-flex align-items-end">
        <HeaderDropDownIconLogin />
      </div>

      <div className="col-1 col-sm-1 col-md-1 col-xl-1 col-xl-1 offset-xl-0 offset-xxl-0 d-flex align-items-end">
        <HeaderCartIcon />
      </div>
    </div>
  );
}
