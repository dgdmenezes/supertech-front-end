import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderSearchBar.module.css";

export default function HeaderSearchBar() {
  const [query, setQuery] = React.useState();
  const [searchResults, setSearchResults] = React.useState([]);
  const [typingTimeOut, setTypingTimeOut] = React.useState(null);
  const [searchBar, setSearchBar] = React.useState("");

  // fetch()

  const handleInputChange = (e) => {
    setQuery(e);

    if (typingTimeOut) {
      clearTimeout(typingTimeOut);
    }

    const timeout = setTimeout(() => {
      fetch(
        `http://localhost:3001/products/searchbar/find?tags=${query}&limit=3`
      )
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

  return (
    <form className={`${styles.searchbar} w-100 me-3`} role="search">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar..."
        aria-label="Search"
        value={query}
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
