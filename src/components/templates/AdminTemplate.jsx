import React from "react";
import AdminHeader from "../organisms/AdminHeader";

export default function AdminTemplate(props) {
  return (
    <div>
      <AdminHeader />
      <div>{props.children}</div>
    </div>
  );
}
