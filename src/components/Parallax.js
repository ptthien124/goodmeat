import React, { useEffect, useState } from "react";
import {
  IMAGE1,
  IMAGE2,
  IMAGE3,
  IMAGE4,
  IMAGE5,
  IMAGE6,
  IMAGE7,
  IMAGE8,
  IMAGE9,
  IMAGE10,
} from "../assets/image.js";
import "../styles/Parallax.css";
import Background from "./Background";

function Parallax() {
  const [elements, setElements] = useState([]);
  useEffect(() => {
    const list = document.querySelectorAll(".background");
    list.forEach((item) => {
      setElements((prev) => [...prev, item.getBoundingClientRect().top]);
    });
  }, []);

  return (
    <div className="parallax">
      <Background frontImage={IMAGE1} top={elements[0]} isTop></Background>
      <Background
        frontImage={IMAGE3}
        behindImage={IMAGE2}
        top={elements[1]}
      ></Background>
      <Background
        frontImage={IMAGE5}
        behindImage={IMAGE4}
        s
        top={elements[2]}
      ></Background>
      <Background
        frontImage={IMAGE7}
        behindImage={IMAGE6}
        top={elements[3]}
      ></Background>
      <Background
        frontImage={IMAGE9}
        behindImage={IMAGE8}
        top={elements[4]}
      ></Background>
      <Background frontImage={IMAGE10} top={elements[5]}></Background>
    </div>
  );
}

export default Parallax;
