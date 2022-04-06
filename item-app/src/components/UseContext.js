import React, { useState, createContext, useEffect } from "react";

export const UseContext = createContext({});

const Context = ({ children }) => {
  const [getData, setGetData] = useState([]);
  const [Checked, setChecked] = useState([]);

  useEffect(() => {
    fetch("https://624cb105d71863d7a80eb01f.mockapi.io/api/v1/items")
      .then((response) => response.json())
      .then((res) => {
        setGetData(res);
      });
  }, []);

  const toggleCheck = (targetVal) => {
    if (targetVal.checked) {
      let getVal = getData.find((item) => item.title === targetVal.value);
      setChecked([...Checked, getVal]);

    } else{
      let filterList=Checked.filter((item) => item.title !== targetVal.value);
      setChecked([ ...filterList]);
    }
  };

  return (
    <UseContext.Provider value={{ getData, toggleCheck, Checked }}>
      {children}
    </UseContext.Provider>
  );
};

export default Context;
