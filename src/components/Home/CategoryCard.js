import React from "react";
import '../css/CategoryCard.css'
import img2 from '../../images/img-2.png'
import img3 from '../../images/img-3.png'
import img4 from '../../images/img-4.png'
import img5 from '../../images/img-5.png'
import img6 from '../../images/img-6.png'
import img7 from '../../images/img-2.png'
import img8 from '../../images/img-8.png'
import img9 from '../../images/img-9.png'

const categoryImages = {
  'Category 1': img2,
  'Category 2': img3,
  'Category 3': img4,
  'Category 4': img5,
  'Category 5': img6,
  'Category 6': img7,
  'Category 7': img8,
  'Category 8': img9,
  // Add more categories here
};

const CategoryCard = ({ name }) => {
  const imageUrl = categoryImages[name];

  return (
    <div className="category-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default CategoryCard;