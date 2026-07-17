import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row mt-5 p-5">
        <h1 className="fs-3 mb-5 text-center">
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h1>

        <div
          className="row border-top pt-5 text-muted"
          style={{ lineHeight: "1.8" }}
        >
          <div className="col-lg-6 mb-4">
            <p>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology.
            </p>

            <p>
              Today, our disruptive pricing models and in-house technology have
              made us one of the biggest stock brokers in India.
            </p>

            <p>
              Millions of clients place orders every day through our investment
              platforms, contributing significantly to Indian retail trading
              volumes.
            </p>
          </div>

          <div className="col-lg-6 mb-4">
            <p>
              We also run educational and community initiatives to empower
              traders and investors across India.
            </p>

            <p>
              Rainmatter, our fintech fund and incubator, has invested in
              several startups with the goal of growing the Indian capital
              markets.
            </p>

            <p>
              Every day we continue building better products and technologies
              for investors and traders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;