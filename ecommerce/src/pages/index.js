import React from "react";
import { Footer, Banner, Product } from "@/components";
import { client } from "../../lib/client";

const Home = ({ bannerData, allProducts }) => {

  return (
    <>
      {/* Banner here */}
      <Banner bannerData={bannerData} />

      {/*Product List  */}
      <div className='products-heading'>
          <h2>
            Today's Best Deals
          </h2>
          <p>
            Fashion is instant language
          </p>
      </div>
      <div className='products-container'>
        {
          allProducts && allProducts.map(product => (
            <Product key={product._id} product={product} />    
          ))
        }
      </div>
      
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const bannerQuery = '*[_type == "banner"]';
  const productQuery = '*[_type == "product"]';
  
  const bannerData = await client.fetch(bannerQuery);
  const allProducts = await client.fetch(productQuery);
  
  return {
    props: {
      bannerData,
      allProducts,
    },
  };
}
