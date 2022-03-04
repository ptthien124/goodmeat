import { useEffect, useState } from "react";
import "./App.css";
import Parallax from "./components/Parallax";
import SmoothScroll from "./components/SmoothScroll";

function App() {

  return (
    <SmoothScroll>
      <Parallax></Parallax>
    </SmoothScroll>
  );
}

export default App;
