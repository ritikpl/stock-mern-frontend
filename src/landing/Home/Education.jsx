import React from "react";

const Education = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">

        <div className="col-lg-6">
          <img
            src="Media/Image/education.svg"
            alt="Education"
            className="img-fluid"
          />
        </div>

        <div className="col-lg-6">
          <h2 className="mb-4">Free and open market education</h2>

          <p className="text-muted">
            Varsity, the largest online stock market education book in the world,
            covering everything from the basics to advanced trading.
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            Varsity →
          </a>

          <p className="text-muted mt-5">
            TradingQ&A, the most active trading and investment community in India
            for all your market related queries.
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            TradingQ&A →
          </a>
        </div>

      </div>
    </div>
  );
};

export default Education;