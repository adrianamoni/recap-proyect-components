import React from "react";
import "./App.css";
import CounterClass from "./components/CounterClass";
import CounterFunc from "./components/CounterFunc";
import LastLevelComp from "./components/LastLevelComp";
import LastLevelClass from "./components/LastLevelClass";

function App() {
  return (
    <div className="App">
      <div>
        <CounterClass />
        <CounterFunc />
        <LastLevelComp data={"patata"} verdura={"zanahoria"} />
        <LastLevelClass data={"PAPA"} verdura={"lechuga"} />
      </div>
    </div>
  );
}

export default App;
