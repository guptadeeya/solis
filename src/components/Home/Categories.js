import React from 'react';
import CategoryCard from './CategoryCard';
import '../css/Categories.css'

const Categories = () => {
    const categories = ['Category 1', 'Category 2', 'Category 3'];

    return (
      <div className="Categories-container">
      <div className="Category-heading">Our Top Categories</div>
        <div className="category-container">
          {categories.map((category, index) => (
            <CategoryCard key={index} name={category} />
          ))}
        </div>
      </div>
    );
};

export default Categories;
