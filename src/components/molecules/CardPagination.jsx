import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./CardPagination.module.css";

export default function CardPagination(props) {
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(1);
  const URLcount = props.URLCount;
  const cardLimitShow = props.cardLimitShow;

  const handleChange = (event, value) => {
    setPage((value - 1) * cardLimitShow);
  };

  React.useEffect(() => {
    fetch(URLcount)
      .then((res) => res.json())
      .then((data) => {
        if (data[0].counter > cardLimitShow)
          setCount(parseInt(data[0].counter / cardLimitShow) + 1);
      });
  }, [URLcount, cardLimitShow]);

  return (
    <div id="pagination">
      <h1>{page}</h1>
      <Stack spacing={2}>
        <Pagination
          count={count}
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
/* fetch(URLcount)
      .then((res) => res.json())
      .then((data) => {
        console.log("cards", data[0].counter);
        if (data[0].counter > 12) {
          let restCounter = data[0].counter / 12;
          parseInt(restCounter);
          setCount(restCounter);
        } else {
          setCount(1);
        }
        console.log(count);
      });*/
