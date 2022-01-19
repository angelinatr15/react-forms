import React, { useState } from "react";
import CatForm from "./CatForm";

const ShowInfo = () => {
  const [cat, setCat] = useState(); //{} 'jiggy'

  //try a dog here

  //because we are using info.name, info.color, we need the info state to be an object.
  return (
    <div>
      <div className="bg-gray-500 h-48 mt-2 overflow-hidden">
        {cat ? (
          <div className="bg-teal-600 m-10">
            <span className="ml-20">name: {cat.name}</span>
            <span className="ml-20">color: {cat.color}</span>
            <span className="ml-20">breed: {cat.breed}</span>
            <span className="ml-20">hobby: {cat.hobby}</span>
          </div>
        ) : (
          ""
        )}

        {/*see dog here */}
      </div>
      {/* send the function to set the information. */}
      <CatForm setCat={setCat} />

      {/* dog form here */}
    </div>
  );
};

export default ShowInfo;
