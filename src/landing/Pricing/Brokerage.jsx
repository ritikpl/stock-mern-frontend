const Brokerage = () => {
  return (
    <div className="container py-5">

      <div className="row border-top pt-5">

        <div className="col-lg-8">

          <a href="#" style={{ textDecoration: "none" }}>
            <h4>Brokerage Calculator</h4>
          </a>

          <ul
            className="text-muted mt-4"
            style={{ lineHeight: "2" }}
          >
            <li>
              Call & Trade and RMS auto square-off charges: ₹50 + GST per order.
            </li>

            <li>
              Digital contract notes are sent via email.
            </li>

            <li>
              Physical contract notes are charged ₹20 per note.
            </li>

            <li>
              For NRI (Non-PIS), brokerage is 0.5% or ₹100 per order,
              whichever is lower.
            </li>

            <li>
              For NRI (PIS), brokerage is 0.5% or ₹200 per order,
              whichever is lower.
            </li>

            <li>
              Debit balance accounts may be charged ₹40 instead of ₹20.
            </li>
          </ul>

        </div>

        <div className="col-lg-4 text-center">

          <a href="#" style={{ textDecoration: "none" }}>
            <h4>List of Charges</h4>
          </a>

        </div>

      </div>

    </div>
  );
};

export default Brokerage;