import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./HeaderSearchBar.module.css";

export default function HeaderSearchBar() {
  const [searchResults, setSearchResults] = React.useState([]);
  const [typingTimeOut, setTypingTimeOut] = React.useState(null);
  const URLConnection = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  //const [searchBar, setSearchBar] = React.useState("");

  // fetch()

  const handleInputChange = (e) => {
    if (typingTimeOut) {
      clearTimeout(typingTimeOut);
    }

    const timeout = setTimeout(() => {
      fetch(`${URLConnection}/products/searchbar/find?tags=${e}&limit=3&skip=0`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setSearchResults(data));
    }, 1000);
    setTypingTimeOut(timeout);
  };

  const checkEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${e.target.value}`);
    }
  };

  return (
    <form className={`${styles.searchbar} w-100 me-3`} role="search">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar..."
        aria-label="Search"
        onKeyDown={(e) => checkEnter(e)}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
      />
      <ul className={styles.lista}>
        {searchResults.map((product) => (
          <li key={product._id}>
            <Link to={`/product/${product._id}`}>
              {product.category} {product.name}
              {" - "}
              {product.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Link>
          </li>
        ))}
      </ul>
    </form>
  );
}
