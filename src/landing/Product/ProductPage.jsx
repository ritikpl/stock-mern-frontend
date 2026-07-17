import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

const ProductPage = () => {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL="/Media/Image/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, elegant UI and more."
      />

      <RightSection
        imageURL="/Media/Image/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account."
      />

      <LeftSection
        imageURL="/Media/Image/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online commission-free."
      />

      <RightSection
        imageURL="/Media/Image/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build trading platforms and experiences with our APIs."
      />

      <LeftSection
        imageURL="/Media/Image/varsity.png"
        productName="Varsity Mobile"
        productDescription="Stock market education app with easy lessons."
      />

      <Universe />
    </>
  );
};

export default ProductPage;