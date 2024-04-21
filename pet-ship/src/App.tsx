import React from "react";
import { Routing } from "./routing";
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
      styles={css`
    /* Apply global styles */
      body {
        margin: 0;
        padding: 0;
        background-color: #ffffff;
        font-family: "Gill Sans", sans-serif;
        color: #333;
        font-size: 14px
      }
  `}
  />
);

function App() {
  const appElements = document.getElementsByClassName("demo-app");
  console.dir(appElements);

  return (
    <div className="App demo-app" style={{margin: '20px'}}>
      <GlobalStyles />
      <Routing />
    </div>
  );
}

export default App;
