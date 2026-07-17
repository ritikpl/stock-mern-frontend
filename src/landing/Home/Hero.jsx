const Hero = () => {
  return (
    <div className="container hero py-5">
      <div className="row text-center">

        <img
          src="/Media/Image/homeHero.png"
          alt="Hero"
          className="img-fluid mx-auto d-block mb-5"
        />

        <h1 className="mt-3">Invest in everything</h1>

        <p className="text-muted mt-3">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more.
        </p>

        <div className="mt-4">
          <button
            className="btn btn-primary btn-lg px-5 "
            style={{ minWidth: "220px" }}
          >
            Signup Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;