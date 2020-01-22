import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./Reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import Routes from "./routes";
const store = createStore(reducer, composeWithDevTools());

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
      ,
    </>
  );
};

export default App;
