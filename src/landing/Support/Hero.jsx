const Hero = () => {
  return (
    <section className="container-fluid bg-primary text-white py-5">

      <div className="container">

        <div className="d-flex justify-content-between align-items-center mb-5">
          <h3>Support Portal</h3>

          <a
            href="#"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            Track Tickets
          </a>
        </div>

        <div className="row">

          <div className="col-lg-6">

            <h2 className="mb-4">
              Search for an answer or browse help topics to create a ticket
            </h2>

            <input
              type="text"
              className="form-control p-3"
              placeholder="Eg. How do I activate F&O?"
            />

            <div className="mt-4">

              <a
                href="#"
                className="text-white me-3"
                style={{ textDecoration: "none" }}
              >
                Track account opening
              </a>

              <a
                href="#"
                className="text-white me-3"
                style={{ textDecoration: "none" }}
              >
                Track segment activation
              </a>

              <a
                href="#"
                className="text-white me-3"
                style={{ textDecoration: "none" }}
              >
                Intraday margins
              </a>

              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Kite user manual
              </a>

            </div>

          </div>

          <div className="col-lg-6 mt-5 mt-lg-0">

            <h3>Featured</h3>

            <ol className="mt-4">

              <li className="mb-3">
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Current Takeovers and Delisting
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Latest Intraday Leverages
                </a>
              </li>

            </ol>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;