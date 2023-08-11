import React from "react";
import "../css/Shop.css";
// import Navbar from "../../containers/Navbar";
import Header from "../../containers/Header";
import Details from "../../containers/Details";
import Category from "./Category";
import img1 from '../../images/img-2.png'
import WhatsAppIcon from "../Home/WhatsappIcon"

function Shop() {
  const categories = [
    {
      title: "Category 1",
      subcategories: [
        { name: "Subcategory 1-1"},
        { name: "Subcategory 1-2"},
        // Add more subcategories for Category 1
      ],
      imageSrc: img1, // Provide the image source for Category 1
    },
    {
      title: "Category 2",
      subcategories: [
        { name: "Subcategory 2-1"},
        { name: "Subcategory 2-2"},
        // Add more subcategories for Category 2
      ],
      imageSrc: img1, // Provide the image source for Category 2
    },
    {
      title: "Category 3",
      subcategories: [
        { name: "Subcategory 2-1"},
        { name: "Subcategory 2-2"},
        // Add more subcategories for Category 2
      ],
      imageSrc: "/images/category-2.jpg", // Provide the image source for Category 2
    },
    {
      title: "Category 4",
      subcategories: [
        { name: "Subcategory 2-1"},
        { name: "Subcategory 2-2"},
        // Add more subcategories for Category 2
      ],
      imageSrc: img1, // Provide the image source for Category 2
    },
    {
      title: "Category 5",
      subcategories: [
        { name: "Subcategory 2-1"},
        { name: "Subcategory 2-2"},
        // Add more subcategories for Category 2
      ],
      imageSrc: "/images/category-2.jpg", // Provide the image source for Category 2
    },
    // Add more categories with their respective subcategories and image sources
  ];

  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <Details />
      <WhatsAppIcon/>
      <div className="Shop">
        <h1>हमारी श्रेणियाँ</h1>
        <div className="category-list">
          {categories.map((category, index) => (
            <Category
              key={index}
              title={category.title}
              subcategories={category.subcategories}
              imageSrc={category.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
