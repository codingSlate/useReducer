import React from 'react';
import './Form.css';
import { useState, useEffect } from 'react';

function Form() {

const nameChangeHandler =(e)=>{
  
}
const amountChangeHandler =(e)=>{
  
}

const formSubmitHandler =()=>{
  e.preventDefault()
}

  return (
    <>
      <h2>Form</h2>
      <form onSubmit={formSubmitHandler}>
        <input className="input" type="text" 
        value={}
        onChange={nameChangeHandler}/>
        <input className="input" type="text" 
        value={}
        onChange={amountChangeHandler}/>

        <input className="input" type="submit" />
      </form>
    </>
  );
}

export default Form;
