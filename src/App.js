import React from "react";
import Routes from "./routes";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter> 
    <div>
      <Routes/>
    </div>
    </BrowserRouter>

    </>
  );
}
export default App;
