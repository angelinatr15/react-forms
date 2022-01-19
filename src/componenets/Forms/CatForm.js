import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useRef } from "react";

const CatForm = (props) => {
  const nameRef = useRef();
  const colorRef = useRef();
  const breedRef = useRef();
  const hobbyRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    props.setCat({
      name: nameRef.current.value,
      color: colorRef.current.value,
      breed: breedRef.current.value,
      hobby: hobbyRef.current.value,
    });
  }

  return (
    <div className="h-48 bg-red-400">
      <form onSubmit={handleSubmit}>
        <input className="mt-20 ml-20" ref={nameRef} placeholder="name" />
        <input className="mt-20 ml-20" ref={colorRef} placeholder="color" />
        <input className="mt-20 ml-20" ref={breedRef} placeholder="breed" />
        <input className="mt-20 ml-20" ref={hobbyRef} placeholder="hobby" />
        <button className="ml-10 border-4 border-gray-800 px-2">Enter</button>
      </form>
    </div>
  );
};

export default CatForm;
