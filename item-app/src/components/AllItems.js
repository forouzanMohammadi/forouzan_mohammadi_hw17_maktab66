import React, { useContext } from "react";

import { UseContext } from "./UseContext";

function ALLItems() {
  const { getData , toggleCheck } = useContext(UseContext);
  
 
  const handleCheck = (event) => {
   
    toggleCheck(event.target)
  };

  return (
    <>
      
      <h1>ALL Items</h1>
        <ul>
          {getData.map((item) => (

            <li  key={item.id} >
              <input type="checkbox" value={item.title} onChange={handleCheck}  />
              {item.title}
            </li>
          ))}
        </ul>
    </>
      
    
  );
}


export default ALLItems;

