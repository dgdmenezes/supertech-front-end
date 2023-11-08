import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./CardPagination.module.css";

export default function CardPagination(props) {
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(1);
  const URLcount = props.URLCount;
  const handleChange = (event, value) => {
    setPage(value);

    fetch(URLcount)
      .then((res) => res.json())
      .then((data) => {
        console.log("cards", data[0].counter);
        console.log("Resto", data[0].counter % 12);

        if (data[0].counter > 12) {
          let restCounter = data[0].counter % 12;
          setCount(restCounter);
        } else {
          setCount(1);
        }
        console.log(count);
      });
  };
  return (
    <div id="pagination">
      <h1>{page}</h1>
      <Stack spacing={2}>
        <Pagination
          count={100}
          defaultPage={page}
          boundaryCount={2}
          siblingCount={0}
          color="primary"
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
}
<button
  class="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-text MuiPaginationItem-circular MuiPaginationItem-textPrimary Mui-selected MuiPaginationItem-page css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root"
  tabindex="0"
  type="button"
  aria-label="page 5"
  aria-current="true"
>
  5<span class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span>
</button>;
