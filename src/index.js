import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Vendor from './components/vendor';
// import Auth from './auth';
// import { Route, BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <App />
      {/* <Route exact path="/" components={Auth} /> */}
      {/* <Route exact path="/vendor" components={App} /> */}
      {/* <Vendor /> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


