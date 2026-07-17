const Statics = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        <div className="col-lg-6">
          <h2 className="mb-4">Trust with confidence</h2>

          <h4>No spam or gimmicks</h4>
          <p className="text-muted">
            No gimmicks, spam, or annoying notifications. High-quality apps
            designed to help you invest with confidence.
          </p>

          <h4>The Zerodha universe</h4>
          <p className="text-muted">
            A complete ecosystem of investment products and fintech services to
            help you grow your wealth.
          </p>

          <h4>Do better with money</h4>
          <p className="text-muted">
            Learn, invest, and manage your portfolio using modern tools built
            for every investor.
          </p>
        </div>

        <div className="col-lg-6 text-center">
          <img
            src="/Media/Image/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid"
          />

          <div className="mt-4">
            <a
              href="#"
              className="text-decoration-none me-4"
            >
              Explore Products <i className="fa-solid fa-arrow-right"></i>
            </a>

            <a
              href="#"
              className="text-decoration-none"
            >
              Try Kite Demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Statics;