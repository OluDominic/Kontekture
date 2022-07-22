import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
//import App from './App';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from "react-scroll-to-top";
import FormContext from './context/formContext'

const App = lazy(() => import('./App'));

ReactDOM.render(
  <FormContext>
    <React.StrictMode>
      <BrowserRouter>
        <ScrollToTop smooth />
        <Suspense fallback={<div><h2>Loading...</h2></div>}>
            <App />
            </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  </FormContext>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();