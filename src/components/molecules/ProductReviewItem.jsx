import React from "react";
import Rating from "@mui/material/Rating";

export default function ProductReviewItem() {
  return (
    <div>
      {" "}
      <hr />
      <p>
        Usuário: <span>Dante</span>
      </p>
      <p>
        (20/10/2023) -
        <Rating
          name="half-rating-read"
          defaultValue={5}
          precision={1}
          readOnly
        />
      </p>
      <p>
        Esse monitor é incrível, a fidelidade de suas cores me fez ser mais
        acertivo no meu trabalho. Excelente produto, recomendo.{" "}
      </p>
    </div>
  );
}
