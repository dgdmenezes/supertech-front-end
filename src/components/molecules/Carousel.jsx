import React from "react";
import CarouselImageA from "../../images/carrosselA.webp";
import CarouselImageB from "../../images/carrosselB.webp";
import CarouselImageC from "../../images/carrosselC.webp";

export default function Carousel() {
  return (
    <div>
      <div class="col px-1">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item">
              <img src={CarouselImageA} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={CarouselImageB} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item active">
              <img src={CarouselImageC} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
