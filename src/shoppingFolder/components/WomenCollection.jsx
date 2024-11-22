import React from "react";

const WomenCollection = (props) => {
  const { title, image1, image2, image3, image4, image5, image6 } =
    props.womenFashion;
  return (
    <div className="collectionSection">
      <h2>{title}</h2>

      <div className="bannerbox">
        <img src="assets/LadiesBanner.gif" alt="women banner" />
      </div>
      <div className="womenCollection">
        <img src={image1} alt="women image" />
        <img src={image2} alt="women image" />
        <img src={image3} alt="women image" />
        <img src={image4} alt="women image" />
        <img src={image5} alt="women image" />
        <img src={image6} alt="women image" />
      </div>
    </div>
  );
};

export default WomenCollection;
