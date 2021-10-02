import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import dog1 from "../images/dogs/dog1.jpg"
import dog2 from "../images/dogs/dog2.jpg"
import dog3 from "../images/dogs/dog3.jpg"
import dog4 from "../images/dogs/dog4.jpg"
import dog5 from "../images/dogs/dog5.jpg"
import dog6 from "../images/dogs/dog6.jpg"

export const Dog = () => {
  return (

    <div className="bigcontainer">
    <div className="innerContainer3"><Link to="/fileupload"><i className="fas fa-cloud-upload-alt"></i></Link></div>
      <div className="grid-item">
      <a data-fancybox="gallery" href={dog1}><img src={dog1} alt="" /></a>
      </div>
      <div className="grid-item">
        <a data-fancybox="gallery" href={dog2}><img src={dog2} alt="" /></a>
      </div>
      <div className="grid-item">
        <a data-fancybox="gallery" href={dog3}><img src={dog3} alt="" /></a>
      </div>
      <div className="grid-item">
        <a data-fancybox="gallery" href={dog4}><img src={dog4} alt="" /></a>
      </div>
      <div className="grid-item">
        <a data-fancybox="gallery" href={dog5}><img src={dog5} alt="" /></a>
      </div>
      <div className="grid-item">
        <a data-fancybox="gallery" href={dog6}><img src={dog6} alt="" /></a>
      </div>
      
	  </div>
    
      


  );
};

export default Dog;
