import React from "react";

const Team = () => {
  return (
    <div className="container">
      <div className="row p-5 border-top">
        <h2 className="text-center mb-5">People</h2>

        <div className="col-lg-6 text-center">
          <img
            src="/Media/Image/nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{
              width: "250px",
              borderRadius: "50%",
            }}
          />

          <h4 className="mt-4">Nithin Kamath</h4>
          <p className="text-muted">Founder & CEO</p>
        </div>

        <div className="col-lg-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader.
          </p>

          <p>
            Today Zerodha has changed the landscape of the Indian broking
            industry.
          </p>

          <p>Playing basketball is his zen.</p>
        </div>
      </div>
    </div>
  );
};

export default Team;