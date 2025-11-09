import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Card.css";

const Card = ({ title, link, img, category, level, star, color }) => {
    return (
        <div className="Card" data-category={category}  data-aos="fade-up" data-aos-duration="800">
            <img src={img} alt={title} />
            <div className="overly"></div>
            <span className="level" style={{  backgroundColor: color }}>{level}</span>
            <span className="star"><i className="ri-star-fill starIcon"></i> {star}</span>
            <span className="card-content">
                <h1>{title}</h1>
                <NavLink to={link} className="learnMore">Enroll Now</NavLink>
            </span>
        </div>
    );
};

export default Card;