import React from "react";

const Pricing = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-4">
          <h2 className="mb-4">Unbeatable pricing</h2>

          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            See pricing →
          </a>
        </div>

        <div className="col-lg-2"></div>

        <div className="col-lg-6">
          <div className="row text-center">

            <div className="col border p-4">
              <h2>₹0</h2>
              <p className="text-muted">
                Free equity delivery <br />
                and direct mutual funds
              </p>
            </div>

            <div className="col border p-4">
              <h2>₹20</h2>
              <p className="text-muted">
                Intraday and <br />
                F&O trades
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;