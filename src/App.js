import { useEffect, useState } from "react";
import "./App.css";
import Parallax from "./components/Parallax";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  const [isTrue, setIsTrue] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsTrue(true), 1);
  }, []);

  return (
    <SmoothScroll>{isTrue ? <Parallax></Parallax> : <div></div>}</SmoothScroll>
  );
}

export default App;
