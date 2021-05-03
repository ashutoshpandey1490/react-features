import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function formatName(user) {
  return user.firstName + ' ' +  user.lastName;
}

const user = {
  firstName: "Ash",
  lastName: "Pandey"
};

const helloElement = <h1>Hello {formatName(user)} </h1>

ReactDOM.render(
  helloElement,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
