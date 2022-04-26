import React from "react";
import { client } from "../lib/client";

import { HeroBanner, Product, FooterBanner } from "../components/";

const Home = ({ productData, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {productData?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const productData = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { productData, bannerData },
  };
};

export default Home;
