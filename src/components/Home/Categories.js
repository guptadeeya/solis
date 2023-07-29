import React from 'react';
import CategoryCard from './CategoryCard';
import '../css/Categories.css'

const Categories = () => {
    const categories = ['Solis 10000', 'Solis 3000', 'कच्ची बिनौला खल', 'सरसों खल'];

    return (
      <div className="Categories-container">
      <div className="Categories-heading-row">
      <div className="Category-heading">हमारी शीर्ष श्रेणियाँ</div>
      <div className="view_all">सभी देखें</div>
      </div>
        <div className="category-container">
          {categories.map((category, index) => (
            <CategoryCard key={index} name={category} />
          ))}
        </div>
        <div className="space"></div>
      </div>
    );
};

export default Categories;
