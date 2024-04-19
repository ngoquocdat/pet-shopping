import React from "react";
import { Routing } from "./routing";

function App() {
  const appElements = document.getElementsByClassName("demo-app");
  console.dir(appElements);

  return (
    <div className="App demo-app">
      <Routing />
    </div>
  );
}

export default App;
