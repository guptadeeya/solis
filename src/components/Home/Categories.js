import React from 'react';
import CategoryCard from './CategoryCard';
import '../css/Categories.css'

const Categories = () => {
    const categories = ['Category 1', 'Category 2', 'Category 3','Category 4','Category 5','Category 6','Category 7','Category 8'];

    return (
      <div className="Categories-container">
      <div className="Category-heading">हमारी शीर्ष श्रेणियाँ</div>
      <div className="view-all">
        <button className='btn-view'>सभी देखें</button>
      </div>
        <div className="category-container">
          {categories.map((category, index) => (
            <CategoryCard key={index} name={category} />
          ))}
        </div>
      </div>
    );
};

export default Categories;
