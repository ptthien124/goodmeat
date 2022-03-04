import React, { useCallback, useEffect, useState } from "react";
import "../styles/Background.css";

function Background({ frontImage, behindImage, isTop, top }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e) => {
    const x = (window.innerWidth - e.pageX * 1) / 100;
    setMouseX(x);

    const y = (window.innerHeight - e.pageY * 1) / 100;
    setMouseY(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const frontImgStyles = {
    // transform: `translateY(${(scrollPosition - top) * 0.25}px)`,
    top: `${(scrollPosition - top) * 0.1}px`,
    height: `${isTop ? "1050px" : ""}`,
    transform: `translate(${
      scrollPosition >= top - 300 && scrollPosition < top + 670 && !isTop
        ? -mouseX
        : 0
    }px, ${
      scrollPosition >= top - 300 && scrollPosition < top + 670 && !isTop
        ? -mouseY
        : 0
    }px)`,
  };

  const behindImgStyles = {
    // transform: `translateY(${(scrollPosition - top) * 0.25}px)`,
    top: `${(scrollPosition - top) * 0.1}px`,
    height: `${isTop ? "1050px" : ""}`,
    transform: `translate(${
      scrollPosition >= top - 300 && scrollPosition < top + 670 ? mouseX : 0
    }px, ${
      scrollPosition >= top - 300 && scrollPosition < top + 670 ? mouseY : 0
    }px)`,
  };

  return (
    <div className="background">
      {isTop ? (
        <div></div>
      ) : (
        <img
          className="background__behindImage"
          style={behindImgStyles}
          src={behindImage}
          alt="behind background image"
        />
      )}
      <img
        className="background__frontImage"
        style={frontImgStyles}
        src={frontImage}
        alt="front background image"
      />
    </div>
  );
}

export default Background;
