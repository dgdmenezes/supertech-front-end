import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styles from "./CardPagination.module.css";

export default function CardPagination(props) {
  const [page, setPage] = React.useState(0);
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
    props.setSkip(page);
    props.setLimit(page + cardLimitShow);
  }, [URLcount, cardLimitShow, page, props.setSkip, props.setLimit]);

  return (
    <div className={styles.outerPagination}>
      <Stack spacing={2} alignItems="center">
        <Pagination
          count={count}
          defaultPage={1}
          boundaryCount={2}
          siblingCount={0}
          color="primary"
          onChange={handleChange}
          className={styles.pagination}
        />
      </Stack>
    </div>
  );
}
