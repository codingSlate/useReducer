import React from 'react';
import './Form.css';
import { useState, useEffect, useReducer } from 'react';

// -------------------------------------------- reducer function that is called when action trigger
const formReducerFn = (latestState, action) => {
  console.log('from formReducerfn', latestState, action);

  if (action.type === 'NAME') {
    console.log('from fn username ', latestState, action);
    return { ...latestState, userName: action.value };
  }
  if (action.type === 'AMOUNT') {
    return { ...latestState, userAmount: action.value };
  }

  //   // default value
  return { userName: 'Name', userAmount: 'Amount' };
};
// --------------------------------------------
function Form() {
  // -------------------------------------------- useReducer
  const [formReducer, setFormReducer] = useReducer(formReducerFn, {
    userName: 'Enter Name',
    userAmount: 'Enter Amount',
  });

  // -------------------------------------------- useState
  const [form, setForm] = useState({
    userName: 'any name',
    userAmount: 'any amount',
  });

  // count character
  const [countChar, setCountChar] = useState('');

  // const [isValid, setIsValid] = useState(false);
  // -------------------------------------------- useEffect
  useEffect(() => {
    let millisec = 500;
    console.log('once');

    const clearTimerID = setTimeout(() => {
      if (form.userName.length > 0) {
        console.log(`I am with cleanup 😃 ${millisec} milisecond`);
        setCountChar((c) => (c = form.userName.length));
      } else {
        console.log(`should not be empty`);
      }
    }, millisec);

    return () => {
      clearTimeout(clearTimerID);
    };
    // }, [form.userName, form.userAmount]);
  }, [form.userName, form.userAmount]);

  // -------------------------------------------------------nameChangeHandler
  const nameChangeHandler = (e) => {
    setFormReducer({ type: 'NAME', value: e.target.value });
    setForm((prevState) => {
      return { ...prevState, userName: e.target.value };
    });
    console.log('from useState', form); // checking useState
  };

  // -------------------------------------------------------amountChangeHandler
  const amountChangeHandler = (e) => {
    setFormReducer({ type: 'AMOUNT', value: e.target.value });
    setForm((prevState) => {
      return { ...prevState, userAmount: e.target.value };
    });
  };

  // -------------------------------------------------------formSubmitHandler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setForm({ userName: '', userAmount: '' }); // reset form after submit
  };
  // --------------------------------------------

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
        {/* {!isValid && (
          <span className="input-error">Name should not be empty</span>
        )} */}
        <input
          className="input"
          type="text"
          value={form.userAmount}
          onChange={amountChangeHandler}
        />
        {/* {!isValid && (
          <span className="input-error">Amount should not be empty</span>
        )} */}
        <input className="input" type="submit" />
      </form>
      <p>Total characters: {countChar}</p>
    </>
  );
}

export default Form;
