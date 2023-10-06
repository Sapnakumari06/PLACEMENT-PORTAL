import { Link } from "react-router-dom";
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './cabin.css';
import "../../components/cards/CardGroup.jsx"
import CardGroup from "../../components/cards/CardGroup.jsx";
import images from "../../images/Placement2023_.png"
export default function Cabin() {
  return(
    <>
    <img className="placement-img" src={images} alt="" />
    </>
  );
}

