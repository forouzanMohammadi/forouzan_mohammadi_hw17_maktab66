import React from "react";
import PropTypes from "prop-types";

function ListItem({ val, index }) {
  return (
    
      
      <ul>
        <li key={index}> {val} </li>
      </ul>
    
  );
}

ListItem.propTypes = {
  index: PropTypes.number,
  val: PropTypes.string.isRequired,
};

export default ListItem;
