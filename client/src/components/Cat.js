import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import cat1 from "../images/cats/cat1.jpg"
import cat2 from "../images/cats/cat2.jpg"
import cat3 from "../images/cats/cat3.jpg"
import cat4 from "../images/cats/cat4.jpg"
import cat5 from "../images/cats/cat5.jpg"
import cat6 from "../images/cats/cat6.jpg"

export const Cat = () => {
  return (


    <div className="bigcontainer">
    <div className="innerContainer3"><Link to="/fileupload"><i className="fas fa-cloud-upload-alt"></i></Link></div>
      <div className="grid-item">
      <a data-fancybox="gallery" href={cat1}><img src={cat1} alt="" /></a>
      </div>
      <div className="grid-item">
        <a data-fancybox="gallery" href={cat2}><img src={cat2} alt="" /></a>
      </div>
      <div className="grid-item">
        <a data-fancybox="gallery" href={cat3}><img src={cat3} alt="" /></a>
      </div>
      <div className="grid-item">
        <a data-fancybox="gallery" href={cat4}><img src={cat4} alt="" /></a>
      </div>
      <div className="grid-item">
        <a data-fancybox="gallery" href={cat5}><img src={cat5} alt="" /></a>
      </div>
      <div className="grid-item">
        <a data-fancybox="gallery" href={cat6}><img src={cat6} alt="" /></a>
      </div>
      
	  </div>
  );
};

export default Cat;
