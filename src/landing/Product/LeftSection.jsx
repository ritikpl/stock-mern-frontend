const LeftSection = ({
  imageURL,
  productName,
  productDescription,
}) => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        <div className="col-lg-6">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>

        <div className="col-lg-6">
          <h2>{productName}</h2>

          <p className="text-muted mt-3">
            {productDescription}
          </p>

          <div className="mt-4">
            <a
              href="#"
              style={{ textDecoration: "none", marginRight: "30px" }}
            >
              Try Demo →
            </a>

            <a
              href="#"
              style={{ textDecoration: "none" }}
            >
              Learn More →
            </a>
          </div>

          <div className="mt-4">
            <img
              src="/Media/Image/googlePlayBadge.svg"
              alt="Google Play"
              style={{ width: "140px", marginRight: "20px" }}
            />

            <img
              src="/Media/Image/appstoreBadge.svg"
              alt="App Store"
              style={{ width: "140px" }}
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default LeftSection;