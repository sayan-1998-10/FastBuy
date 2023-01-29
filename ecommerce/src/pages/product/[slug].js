import { Product } from "@/components";
import { client, urlFor } from "lib/client";
import { useState } from "react";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
  AiOutlineStar,
} from "react-icons/ai";
import { RiShoppingCart2Line } from "react-icons/ri";

const ProductDetail = ({ productDetails: details, allProducts: products }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = details.image && details.image.slice(0,7)

  const addToCart = () => {
    setQuantity((prevQ) => prevQ + 1);
  }

  const removeFromCart = () => {
    setQuantity((prevQ) => {
        return prevQ - 1 < 0 ? 0 : prevQ -1;
    });
  }

  return (
    <div>
      {!details && <h1>No Products Found</h1>}
      {details && (
        <div className="product-wrapper">
          <div className="product-detail-container">
            <div>
              <div className="product-detail-image">
                <img src={urlFor(details.image[selectedImage])} />
              </div>
              <div className="small-images-container">
                {images &&
                  images.map((image, index) => (
                    <div
                      onClick={() => setSelectedImage(index)}
                      key={index}
                      className={`small-image ${
                        index === selectedImage ? "selected-image" : ""
                      }`}
                    >
                      <img src={urlFor(image)} />
                    </div>
                  ))}
              </div>
            </div>

            <div className="product-details-desc">
              <h2>{details.name}</h2>
              <div className="rating">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>

              <h6>About This Item</h6>
              <p className="details">{details.details}</p>
              <h3 className="price">
                <sup>₹</sup>
                {details.price}
              </h3>
              <p>Inclusive of all taxes</p>

              <h6>Quantity</h6>
              <div className="quantity">
                <span className="minus" onClick={removeFromCart}>
                  <AiOutlineMinus />
                </span>
                <span className="num">{quantity}</span>
                <span className="plus" onClick={addToCart}> 
                  <AiOutlinePlus />
                </span>
              </div>

              <div className="cart-buttons">
                <div className="add-to-cart">
                  <span className="icon">
                    <AiOutlineShopping />
                  </span>
                  <span>ADD TO CART</span>
                </div>
                <div className="buy-now">
                  <span className="icon">
                    <RiShoppingCart2Line />
                  </span>
                  <span>BUY NOW</span>
                </div>
              </div>
            </div>
          </div>

          <h1 className="suggestions-title">You May Also Like</h1>
          <div className="products-container">
            {products &&
              products.map((item) => <Product key={item._id} product={item} />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

export async function getServerSideProps({ params }) {
  const slug = params.slug;
  const productDetailsQuery = `*[_type == 'product' && slug.current == '${slug}'][0]`;
  const allProductsQuery = `*[_type == 'product']`;

  const productDetails = await client.fetch(productDetailsQuery);
  const allProducts = await client.fetch(allProductsQuery);

  return {
    props: {
      productDetails,
      allProducts,
    },
  };
}
