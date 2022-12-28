import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



import { Provider } from 'react-redux';
//react library for redux

import { createStore,compose,applyMiddleware } from 'redux';
// import { persistStore } from 'redux-persist';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import reducers from "./reducers";

const store=createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
 <Provider store={store}>
    <App />
  </Provider>
);


