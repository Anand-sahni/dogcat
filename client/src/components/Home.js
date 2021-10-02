import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
        <h1 className="bigHeading">The Little Beings</h1>
        <h2 className="smallHeading">Welcomes you to the gallery of cutest dogs and cats</h2>
        <div className="button-container">
            <Link to="/dog" className="bttn bttn-roll"> <span data-title="🐶">Dog</span> </Link>
            <Link to="/cat" className="bttn bttn-roll"> <span data-title="🐱">Cat</span> </Link>
        </div>
    </div>
  );
};

export default Home;
