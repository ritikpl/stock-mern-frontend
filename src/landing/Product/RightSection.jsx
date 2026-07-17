const RightSection = ({
  imageURL,
  productName,
  productDescription,
}) => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        <div className="col-lg-6">
          <h2>{productName}</h2>

          <p className="text-muted mt-3">
            {productDescription}
          </p>

          <a
            href="#"
            style={{ textDecoration: "none" }}
          >
            Learn More →
          </a>
        </div>

        <div className="col-lg-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>

      </div>
    </div>
  );
};

export default RightSection;