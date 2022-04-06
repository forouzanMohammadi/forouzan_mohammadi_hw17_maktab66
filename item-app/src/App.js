import AllItems from "./components/AllItems";
import SelectedItems from "./components/SelectedItems";
import React from "react";
import Context from "./components/UseContext";

function App() {
  return (
    <Context>
      <div className="container">
        <div className="allItems">
          <AllItems />
        </div>

        <div className="listContainer">
          <SelectedItems />
        </div>
      </div>
    </Context>
  );
}

export default App;