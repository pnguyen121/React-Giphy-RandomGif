import React from "react";
import { useState, useEffect  } from 'react'


export default function Form(props) {
  const [formInput, setFormInput] = useState("");

  function handleChange(e) {
    console.log(e.target.name);
    setFormInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.liftFormInput(formInput);
    setFormInput('')
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="formInput"
            placeholder="SearchGif"
            value={formInput}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}
