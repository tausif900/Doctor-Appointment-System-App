import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <main className={styles.container}>
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
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="3"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="4"
            ></button>
          </div>

          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className={styles.corouselSlides}>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url('/Images/doctor1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(8px)",
                    zIndex: 1,
                  }}
                ></div>
                <img
                  src="/Images/doctor1.jpg"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "400px",
                    objectFit: "contain",
                    zIndex: 2,
                  }}
                />
                <div
                  className="carousel-caption"
                  style={{
                    zIndex: 3,
                    background: "rgba(0,0,0,0.5)",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <h1>Book Appointments Easily</h1>
                  <p>Find the best doctors near you</p>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item active">
              <div style={{ position: "relative", height: "500px" }}>
                {/* Blurred Background */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url('/Images/doctor2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(8px)",
                    zIndex: 1,
                  }}
                ></div>

                {/* Center Image */}
                <img
                  src="/Images/doctor2.jpg"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "400px",
                    objectFit: "contain",
                    zIndex: 2,
                  }}
                />

                {/* Text */}
                <div
                  className="carousel-caption"
                  style={{
                    zIndex: 3,
                    background: "rgba(0,0,0,0.5)",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <h1>Advanced Medical Infrastructure</h1>
                  <p>
                    Our partnered hospitals provide state-of-the-art facilities
                    for better treatment.
                  </p>
                </div>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="carousel-item active">
              <div style={{ position: "relative", height: "500px" }}>
                {/* Blurred Background */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url('/Images/doctor3.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(8px)",
                    zIndex: 1,
                  }}
                ></div>

                {/* Center Image */}
                <img
                  src="/Images/doctor3.jpg"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "400px",
                    objectFit: "contain",
                    zIndex: 2,
                  }}
                />

                {/* Text */}
                <div
                  className="carousel-caption"
                  style={{
                    zIndex: 3,
                    background: "rgba(0,0,0,0.5)",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <h1>Consult Experts Doctors</h1>
                  <p>
                    Connect with experienced and trusted doctors for the best
                    medical advice.
                  </p>
                </div>
              </div>
            </div>
            {/* Slide 4 */}
            <div className="carousel-item active">
              <div style={{ position: "relative", height: "500px" }}>
                {/* Blurred Background */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url('/Images/doctor4.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(8px)",
                    zIndex: 1,
                  }}
                ></div>

                {/* Center Image */}
                <img
                  src="/Images/doctor4.jpg"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "400px",
                    objectFit: "contain",
                    zIndex: 2,
                  }}
                />

                {/* Text */}
                <div
                  className="carousel-caption"
                  style={{
                    zIndex: 3,
                    background: "rgba(0,0,0,0.5)",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <h1>Meet Our Specialists</h1>
                  <p>Highly qualified doctors ready to assist you anytime.</p>
                </div>
              </div>
            </div>

            {/* Slide 5 */}
            <div className="carousel-item active">
              <div style={{ position: "relative", height: "500px" }}>
                {/* Blurred Background */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url('/Images/doctor5.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(8px)",
                    zIndex: 1,
                  }}
                ></div>

                {/* Center Image */}
                <img
                  src="/Images/doctor5.jpg"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "400px",
                    objectFit: "contain",
                    zIndex: 2,
                  }}
                />

                {/* Text */}
                <div
                  className="carousel-caption"
                  style={{
                    zIndex: 3,
                    background: "rgba(0,0,0,0.5)",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <h1>Hassle-Free Consultation</h1>
                  <p>Get expert guidance from trusted doctors anytime.</p>
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
        <br />
        <div div className="container marketing">
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
              <p className="lead">
                Another featurette with placeholder content.
              </p>
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
    </>
  );
};

export default Home;
