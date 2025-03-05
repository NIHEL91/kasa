import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt, faStar as faRegStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Rating = ({ rating }) => {

const maxStars = 5;
const stars = []; // 1️⃣ Crée un tableau vide
for (let i = 0; i < maxStars; i++) {
  if (i < rating) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star filled" />);
  } else {
    stars.push(<FontAwesomeIcon key={i} icon={faRegStar} className="star empty" />);

}
}
console.log(stars);

  return (
    <div className="star-rating">
        {stars}
    </div>
  );
};
export default Rating;

