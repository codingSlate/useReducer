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

  const [form, setForm] = useState({
    userName: 'any name',
    userAmount: 'any amount',
  });

  const nameChangeHandler = (e) => {
    setFormReducer({ type: 'NAME', value: e.target.value });
    setForm((prevState) => {
      return { ...prevState, userName: e.target.value };
    });
  };
  const amountChangeHandler = (e) => {
    setFormReducer({ type: 'AMOUNT', value: e.target.value });
    setForm((prevState) => {
      return { ...prevState, userAmount: e.target.value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
   setForm({userName:'', userAmount:''}) // reset form after submit
  };

  return (
    <>
      <h2>Form</h2>
      <form onSubmit={formSubmitHandler}>
        <input
          className="input"
          type="text"
          value={form.userName}
          onChange={nameChangeHandler}
        />
        <input
          className="input"
          type="text"
          value={form.userAmount}
          onChange={amountChangeHandler}
        />

        <input className="input" type="submit" />
      </form>
    </>
  );
}

export default Form;
