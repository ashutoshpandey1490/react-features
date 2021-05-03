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

function clock() {
  const helloElement = (
    <div>
      <h1>Hello {formatName(user)} </h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(
    helloElement,
    document.getElementById('root')
  );
}

setInterval(clock, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
