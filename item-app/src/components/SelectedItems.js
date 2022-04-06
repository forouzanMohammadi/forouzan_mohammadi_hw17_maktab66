import React, { useContext } from "react";
import ListItems from "./ListItems";
import { UseContext } from "./UseContext";

function SelectedItems() {
  const { Checked } = useContext(UseContext);

  return (
    <>
      <h1>Seleted Items</h1>
      {Checked.map(item => <ListItems val={item.title} index={item.id} />)}
    </>
  );
}

export default SelectedItems;
