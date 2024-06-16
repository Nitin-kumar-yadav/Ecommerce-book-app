import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style/main.scss";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './app/store';

// https://ecommerce-book-backend-api.onrender.com
export const mainUrl = 'https://ecommerce-book-backend-api.onrender.com';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store} >
      <ToastContainer />
      <App />
    </Provider>
  </BrowserRouter>
);
