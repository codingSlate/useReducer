import React from 'react';
import './Form.css';
import { useState, useEffect, useReducer } from 'react';

const formReducerFn = (latestState, action) => {
  if (action.type === 'NAME') {
    return { ...latestState, userName: action.value };
  }
  if (action.type === 'AMOUNT') {
    return { ...latestState, userAmount: action.value };
  }

  // default value
  return { userName: 'Name', userAmount: 'Amount' };
};
function Form() {
  const [formReducer, setFormReducer] = useReducer(formReducerFn, {
    userName: 'Enter Name',
    userAmount: 'Enter Amount',
  });

  const nameChangeHandler = (e) => {
    setFormReducer({ type: 'NAME', value: e.target.value });
  };
  const amountChangeHandler = (e) => {
    setFormReducer({ type: 'AMOUNT', value: e.target.value });
  };

  const formSubmitHandler = () => {
    e.preventDefault();
  };

  return (
    <>
      <h2>Form</h2>
      <form onSubmit={formSubmitHandler}>
        <input
          className="input"
          type="text"
          value={formReducer.userName}
          onChange={nameChangeHandler}
        />
        <input
          className="input"
          type="text"
          value={formReducer.userAmount}
          onChange={amountChangeHandler}
        />

        <input className="input" type="submit" />
      </form>
    </>
  );
}

export default Form;
