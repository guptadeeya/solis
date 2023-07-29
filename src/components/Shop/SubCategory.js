import React from "react";
import { List, ListItem, ListItemText, Divider } from "@mui/material";

const SubCategory = ({ subcategories }) => {
  return (
    <List component="nav" aria-label="subcategories">
      {subcategories.map((subcat, index) => (
        <React.Fragment key={index}>
          <ListItem button>
            <ListItemText primary={subcat} />
          </ListItem>
          {index < subcategories.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default SubCategory;

