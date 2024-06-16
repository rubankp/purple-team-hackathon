import React, { useState } from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { DataProvider } from "./context/dataContext";
import Summary from "./components/Summary";

function App() {
  return (
    <DataProvider>
      <div style={{
        display: "flex"
      }}>
        <Start />
        <div 
          style={{ flexGrow : 1, maxWidth : "50%", maxHeight : "100vh", overflowY : "auto"}}
          className="bg-dark text-white"
        >
          <Quiz />
          <Result />
          <Summary />
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
