import React from "react";
import "../css/Shop.css";
import Navbar from '../../containers/Navbar';
import Header from '../../containers/Header';
import Details from '../../containers/Details';
import Category from "./Category";

function Shop() {
  const categories = [
    {
      title: "Category 1",
      subcategories: ["Subcategory 1", "Subcategory 2", "Subcategory 3"],
    },
    {
      title: "Category 2",
      subcategories: ["Subcategory 1", "Subcategory 2"],
    },
    // Add more categories here
  ];

  return (
    <div className="Shop">
      <Navbar />
      <Header />
      <Details />
      <h1>Category Page</h1>
      <div className="category-list">
        {categories.map((category, index) => (
          <Category key={index} title={category.title} subcategories={category.subcategories} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
