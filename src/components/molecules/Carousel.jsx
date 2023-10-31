import React from "react";
import CarouselImageA from "../../images/carrosselA.webp";
import CarouselImageB from "../../images/carrosselB.webp";
import CarouselImageC from "../../images/carrosselC.webp";

export default function Carousel() {
  return (
    <div className="container ">
      <div className="col">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item">
              <img src={CarouselImageA} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={CarouselImageB} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item active">
              <img src={CarouselImageC} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
