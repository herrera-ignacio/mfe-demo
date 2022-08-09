import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "counter/Counter";

import "./index.css";

const App = () => (
  <div className="container">
    <h1>Host App</h1>
    <Counter />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
