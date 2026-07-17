const CreateTicket = () => {
  return (
    <div className="container py-5">

      <h2 className="mb-5">
        To create a ticket, select a relevant topic
      </h2>

      <div className="row">

        {/* Column 1 */}
        <div className="col-lg-4 mb-5">
          <h4>➕ Account Opening</h4>

          <a href="#" className="d-block text-decoration-none mt-3">
            Online Account Opening
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            Offline Account Opening
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            Company / Partnership Account
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            NRI Account Opening
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            Charges at Zerodha
          </a>
        </div>

        {/* Column 2 */}
        <div className="col-lg-4 mb-5">
          <h4>👤 Your Zerodha Account</h4>

          <a href="#" className="d-block text-decoration-none mt-3">
            Login Credentials
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            Account Modification
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            DP ID & Bank Details
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            Your Profile
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            Transfer of Shares
          </a>
        </div>

        {/* Column 3 */}
        <div className="col-lg-4 mb-5">
          <h4>📈 Trading & Markets</h4>

          <a href="#" className="d-block text-decoration-none mt-3">
            Margin & Leverage
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            Kite Web & Mobile
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            Trading FAQs
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            Corporate Actions
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            Kite API
          </a>
        </div>

        {/* Column 4 */}
        <div className="col-lg-4 mb-5">
          <h4>💰 Funds</h4>

          <a href="#" className="d-block text-decoration-none mt-3">
            Add Funds
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            Withdraw Funds
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            eMandates
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            Add Bank Account
          </a>
        </div>

        {/* Column 5 */}
        <div className="col-lg-4 mb-5">
          <h4>📊 Console</h4>

          <a href="#" className="d-block text-decoration-none mt-3">
            Reports
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            Ledger
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            Portfolio
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            IPO
          </a>
        </div>

        {/* Column 6 */}
        <div className="col-lg-4 mb-5">
          <h4>🪙 Coin</h4>

          <a href="#" className="d-block text-decoration-none mt-3">
            Understanding Mutual Funds
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            About Coin
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            Buying & Selling
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            SIP
          </a>

          <a href="#" className="d-block text-decoration-none mt-2">
            Coin App
          </a>
        </div>

      </div>

    </div>
  );
};

export default CreateTicket;