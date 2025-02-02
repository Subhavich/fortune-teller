import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ score }) => {
  const fullStars = Math.floor(score); // Count of full stars
  const hasHalfStar = score % 1 >= 0.5; // Check if there's a half star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="pb-1 flex items-center space-x-1">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-${index}`} className="text-pink-500" />
      ))}

      {/* Half Star (if applicable) */}
      {hasHalfStar && <FaStarHalfAlt className="text-pink-500" />}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={`empty-${index}`} className="text-gray-500 " />
      ))}
    </div>
  );
};

export default StarRating;
