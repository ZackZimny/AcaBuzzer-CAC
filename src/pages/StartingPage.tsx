import React, { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const StartingPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    let formObject = Object.fromEntries(formData.entries());
    const name = formObject.name.toString();
    console.log(formObject.name.toString());
    const state = {state: {name: name}};
    navigate('/participant', state);
  };

  return (
  <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input name="name" />
      <input type="submit"/>
    </label>
  </form>
  );
}