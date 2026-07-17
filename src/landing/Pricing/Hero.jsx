const Hero = () => {
  return (
    <div className="container">

      {/* Heading */}
      <div className="row text-center py-5 border-bottom">
        <h1>Pricing</h1>

        <h5 className="text-muted mt-3">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h5>
      </div>

      {/* Pricing Cards */}
      <div className="row text-center py-5">

        <div className="col-lg-4 mb-4">
          <img
            src="/Media/Image/pricing0.svg"
            alt="Free Equity"
            className="img-fluid mb-3"
            style={{ width: "120px" }}
          />

          <h3 className="fs-4">Free Equity Delivery</h3>

          <p className="text-muted">
            All equity delivery investments (NSE & BSE) are absolutely free —
            ₹0 brokerage.
          </p>
        </div>

        <div className="col-lg-4 mb-4">
          <img
            src="/Media/Image/intradayTrades.svg"
            alt="Intraday"
            className="img-fluid mb-3"
            style={{ width: "120px" }}
          />

          <h3 className="fs-4">Intraday & F&O</h3>

          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order.
          </p>
        </div>

        <div className="col-lg-4 mb-4">
          <img
            src="/Media/Image/pricing0.svg"
            alt="Mutual Funds"
            className="img-fluid mb-3"
            style={{ width: "120px" }}
          />

          <h3 className="fs-4">Free Direct Mutual Funds</h3>

          <p className="text-muted">
            Invest in direct mutual funds with zero commission and zero
            brokerage.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Hero;