const Universe = () => {
  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h2>The Zerodha Universe</h2>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>
      </div>

      <div className="row text-center">

        <div className="col-md-4 mb-5">
          <img
            src="/Media/Image/smallcaseLogo.png"
            alt="smallcase"
            className="img-fluid mb-3"
            style={{ width: "150px" }}
          />
          <p className="text-muted">Thematic investment platform</p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="/Media/Image/streakLogo.png"
            alt="streak"
            className="img-fluid mb-3"
            style={{ width: "150px" }}
          />
          <p className="text-muted">Algo & strategy platform</p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="/Media/Image/sensibullLogo.svg"
            alt="sensibull"
            className="img-fluid mb-3"
            style={{ width: "150px" }}
          />
          <p className="text-muted">Options trading platform</p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="/Media/Image/zerodhaFundhouse.png"
            alt="Fund House"
            className="img-fluid mb-3"
            style={{ width: "150px" }}
          />
          <p className="text-muted">Asset Management</p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="/Media/Image/goldenpiLogo.png"
            alt="GoldenPi"
            className="img-fluid mb-3"
            style={{ width: "150px" }}
          />
          <p className="text-muted">Bond platform</p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="/Media/Image/dittoLogo.png"
            alt="Ditto"
            className="img-fluid mb-3"
            style={{ width: "120px" }}
          />
          <p className="text-muted">Insurance platform</p>
        </div>

      </div>

      <div className="text-center">
        <button className="btn btn-primary px-5 py-2">
          Signup Now
        </button>
      </div>

    </div>
  );
};

export default Universe;