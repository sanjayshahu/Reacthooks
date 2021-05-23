import React, { useEffect, useState } from "react";
const Individual = ({ method }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(method());
    console.log("called in ");
  }, [method]);

  return (
    <>
      {items.map((item) => (
        <div>{item}</div>
      ))}
    </>
  );
};
export default Individual;
