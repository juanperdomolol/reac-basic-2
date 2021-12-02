import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory.js";
import { GifGrid } from "./components/GifGrid.js";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);
  //   const handleAdd = () => {
  //     setCategories([...categories,'ñero'])
  //   };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map((category) => 
           <GifGrid key={category} category={category}/>
        )}
      </ol>
    </>
  );
};
export default GifExpertApp;
