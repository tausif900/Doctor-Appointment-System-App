import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <main>
      {/*Carousel*/}
      <div
        id="myCarousel"
        className="carousel slide mb-6"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img src="/Images/doctor1.jpg" className="d-block w-100" style={{ height: "500px", objectFit: "cover" }} />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Example headline</h1>
                <p className="opacity-75">
                  Some representative placeholder content for the first slide.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary">Sign up today</a>
                </p>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img src="/Images/doctor2.jpg" className="d-block w-100" style={{ height: "500px", objectFit: "cover" }} />
            <div className="container">
              <div className="carousel-caption">
                <h1>Another headline</h1>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary">Learn more</a>
                </p>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <svg className="bd-placeholder-img" width="100%" height="100%">
              <rect width="100%" height="100%" fill="gray"></rect>
            </svg>

            <div className="container">
              <div className="carousel-caption text-end">
                <h1>One more headline</h1>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary">Browse gallery</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* 🔥 Marketing Section */}
      <div className="container marketing">
        <div className="row">
          <div className="col-lg-4 text-center">
            <svg className="rounded-circle" width="140" height="140">
              <rect width="100%" height="100%" fill="gray"></rect>
            </svg>
            <h2>Heading</h2>
            <p>Some representative placeholder content.</p>
            <p>
              <a className="btn btn-secondary">View details</a>
            </p>
          </div>

          <div className="col-lg-4 text-center">
            <svg className="rounded-circle" width="140" height="140">
              <rect width="100%" height="100%" fill="gray"></rect>
            </svg>
            <h2>Heading</h2>
            <p>Another bit of placeholder content.</p>
            <p>
              <a className="btn btn-secondary">View details</a>
            </p>
          </div>

          <div className="col-lg-4 text-center">
            <svg className="rounded-circle" width="140" height="140">
              <rect width="100%" height="100%" fill="gray"></rect>
            </svg>
            <h2>Heading</h2>
            <p>Third column content.</p>
            <p>
              <a className="btn btn-secondary">View details</a>
            </p>
          </div>
        </div>

        <hr />

        {/* Featurette 1 */}
        <div className="row featurette">
          <div className="col-md-7">
            <h2>
              First featurette heading{" "}
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Some great placeholder content for the first featurette.
            </p>
          </div>

          <div className="col-md-5">
            <svg width="500" height="500">
              <rect width="100%" height="100%" fill="gray"></rect>
            </svg>
          </div>
        </div>

        <hr />

        {/* Featurette 2 */}
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2>
              Oh yeah, it’s that good{" "}
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p className="lead">Another featurette with placeholder content.</p>
          </div>

          <div className="col-md-5 order-md-1">
            <svg width="500" height="500">
              <rect width="100%" height="100%" fill="gray"></rect>
            </svg>
          </div>
        </div>

        <hr />

        {/* Featurette 3 */}
        <div className="row featurette">
          <div className="col-md-7">
            <h2>
              And lastly <span className="text-muted">Checkmate.</span>
            </h2>
            <p className="lead">Final placeholder content section.</p>
          </div>

          <div className="col-md-5">
            <svg width="500" height="500">
              <rect width="100%" height="100%" fill="gray"></rect>
            </svg>
          </div>
        </div>

        <hr />
      </div>
    </main>
  );
};

export default Home;
