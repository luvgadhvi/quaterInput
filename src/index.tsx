import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

function main(): void {
  const root = document.getElementById("root");
  if (root) {
    ReactDOM.render(<App />, root);
  }
}

main();
