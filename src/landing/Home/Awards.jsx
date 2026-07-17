const Awards = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src="/Media/Image/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
          />
        </div>

        <div className="col-lg-6">
          <h2 className="mb-4">Largest stock broker in India</h2>

          <p className="text-muted">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row mt-4">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          <img
            src="/Media/Image/pressLogos.png"
            alt="Press Logos"
            className="img-fluid mt-4"
          />
        </div>

      </div>
    </div>
  );
};

export default Awards;