import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Avatar } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SubCategory from "./SubCategory";

const Category = ({ title, subcategories }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const categoryImage = `/images/category-${title.toLowerCase().replace(/\s+/g, '-')}.jpg`;

  return (
    <Accordion expanded={expanded} onChange={toggleExpand} className="category">
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Avatar alt={title} src={categoryImage} sx={{ width: 60, height: 60 }} />
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <SubCategory subcategories={subcategories} />
      </AccordionDetails>
    </Accordion>
  );
};

export default Category;
