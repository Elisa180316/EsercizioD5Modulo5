import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import commentsFromBookReducer from "..//src/states/commentState";
import booksReducer from "..//src/states/booksState";



const reducer = combineReducers({
  commentsSlice: commentsFromBookReducer,
  bookSlice: booksReducer,
}); //Conterrà tutti gli stati//
const store = configureStore({
  reducer,
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
   
      <App />
    
    
 

    </Provider>
  </React.StrictMode>
);
