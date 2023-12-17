import React from "react";
import NavBarDropDownMenuItem from "./NavBarDropDownMenuItem";
import { Link } from "react-router-dom";
import AppLoading from "../organisms/AppLoading";
export default function NavBarDropDownMenu() {
  const [catListItem, setCatListItem] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  const URLConnection = process.env.REACT_APP_API_URL;

  React.useEffect(() => {
    fetch(`${URLConnection}/products/listautocategory`)
      .then((res) => res.json())
      .then((data) => {
        setCatListItem(data);
        setIsLoading(false);
      });
  }, [URLConnection]);

  return isLoading ? (
    <AppLoading />
  ) : (
    <div className="dropdown">
      <Link
        to="#"
        className="d-flex align-items-center py-2 px-2 dropdown-toggle link-nav-menu"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        CATEGORIAS
      </Link>
      <ul className="dropdown-menu text-small shadow">
        {catListItem.map((item) => {
          return <NavBarDropDownMenuItem item={item} key={item._id} />;
        })}
      </ul>
    </div>
  );
}
