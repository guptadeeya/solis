import React from "react";
import '../css/CategoryCard.css'
import img2 from '../../images/img-2.png'
import img3 from '../../images/img-3.png'
import img4 from '../../images/img-4.png'
import img5 from '../../images/img-5.png'

const categoryImages = {
  'सोलिस 10000': img2,
  'सोलिस 3000': img3,
  'कच्ची बिनौला खल': img4,
  'सरसों खल': img5,
  // Add more categories here
};

const CategoryCard = ({ name }) => {
  const imageUrl = categoryImages[name];

  return (
    <div className="category-card">
      <img src={imageUrl} alt={name} />
      <div className="category-name">{name}</div>
    </div>
  );
};

export default CategoryCard;