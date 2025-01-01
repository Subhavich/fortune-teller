import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ score }) => {
  // Calculate the number of full, half, and empty stars
  const fullStars = Math.floor(score); // Whole number part
  const hasHalfStar = score % 1 >= 0.5; // Check for a half star

  return (
    <div className="pb-1 flex items-center space-x-1">
      {/* Render full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-${index}`} className=" text-fuchsia-500" />
      ))}

      {/* Render half star */}
      {hasHalfStar && <FaStarHalfAlt className=" text-fuchsia-500" />}
    </div>
  );
};

export default StarRating;
