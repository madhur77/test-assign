import { useState } from "react";
import React from 'react';

const Form = () => {
  const [formstate, setFormState] = useState({ app_name: "", volume: "" });

  const handleAppName = (e) => {
    setFormState({ ...formstate, app_name: e.target.value });
  };
  const handleVolumeName = (e) => {
    setFormState({ ...formstate, volume: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //alert("check console logs")
    console.log(formstate);
  };

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <label>App name</label>
      <input
        type="text"
        onChange={handleAppName}
        id="app-name"
        aria-label="app-name"
        required
      ></input>
      <label>Volume</label>
      <input
        type="number"
        onChange={handleVolumeName}
        id="volume"
        aria-label="volume"
        required
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
