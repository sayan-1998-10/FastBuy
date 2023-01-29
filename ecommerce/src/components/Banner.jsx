import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import { urlFor } from "lib/client";
import Link from "next/link";

const Banner = ({ bannerData }) => {
  const banner =
    bannerData &&
    bannerData.map((item) => {
      return (
        <CarouselItem key={item._id}>
          <Link href={`/product/${item.product}`}>
            <div className="banner-container">
              <div className="small-text">{item.smallText}</div>
              <h3>{item.largeText1}</h3>
              <h4>{item.midText}</h4>

              <img
                className="banner-image"
                src={item.image && urlFor(item.image)}
                alt="iphone"
              />
            </div>
          </Link>
        </CarouselItem>
      );
    });

  return (
    <>
      <div>
        <Carousel>{banner}</Carousel>
      </div>
    </>
  );
};

export default Banner;
