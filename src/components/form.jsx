import { useState } from "react";
import React from 'react';
import {
    StyledForm,
    StyledLabel,
    StyledInput,
    StyledButton,
  } from './styleform';
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
    <StyledForm onSubmit={handleSubmit} data-testid="form">
      <StyledLabel htmlFor="app-name">App name</StyledLabel>
      <StyledInput
        type="text"
        onChange={handleAppName}
        id="app-name"
        aria-label="app-name"
        aria-required="true"
        required
      ></StyledInput>
      <StyledLabel htmlFor="volume">Volume</StyledLabel>
      <StyledInput
        type="number"
        onChange={handleVolumeName}
        id="volume"
        aria-label="volume"
        aria-required="true"
        required
      ></StyledInput>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

export default Form;
