import React from "react";
import Background from "./components/Background";
import Foregorund from "./components/foregorund";

function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Foregorund />
    </div>
  );
}

export default App;
