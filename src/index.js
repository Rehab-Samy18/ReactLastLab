import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import AppRouter from './AppRouter';
// import Login from './Components/LoginForm';
// import AppHooks from './AppRouter';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
const RootElement = ReactDOM.createRoot(document.querySelector("#root"));
//RootElement.render(App);  //As Variable
RootElement.render(<AppRouter/>);//As function