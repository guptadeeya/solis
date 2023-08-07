import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../css/ShopCategory.css"; // Import the CSS file for custom styling
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const Category = ({ title, subcategories, imageSrc }) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const toggleExpand = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  // Function to handle the click event on a subcategory
  const handleSubcategoryClick = (subcategoryName) => {
    // Use the navigate function to programmatically navigate to the product page
    navigate(`/products/${subcategoryName}`);
  };

  return (
    <Accordion expanded={expanded} onChange={toggleExpand} className="category">
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <div className="category-header">
          <div className="category-image-container">
            <img alt={title} src={imageSrc} className="category-image" />
          </div>
          <Typography variant="h5" className="category-title">
            {title}
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="subcategory-list">
          {subcategories.map((subcategory, index) => (
            <div key={index} className="subcategory-item">
              {/* Handle click event on subcategory name */}
              <Typography variant="h6" onClick={() => handleSubcategoryClick(subcategory.name)}>
                {subcategory.name}
              </Typography>
            </div>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Category;

