import classNames from "classnames";
import { useContext, useEffect } from "react";

import Planet from "../../assets/gif/spaceoptimize100.gif";
import Context from "../context/context";
import "./planetImage.css";
export default function PlanetImage() {
  // const planetRef = useRef(null);
  const {
    isPlanetDown,
    initialAnimationComplete,
    setInitialAnimationComplete,
    planetRef,
  } = useContext(Context);

  useEffect(() => {
    const planet = planetRef.current;

    const handleAnimationEnd = () => {
      setInitialAnimationComplete(true);
    };

    if (planet) {
      planet.addEventListener("animationend", handleAnimationEnd);
      return () => {
        planet.removeEventListener("animationend", handleAnimationEnd);
      };
    }
  }, [planetRef, setInitialAnimationComplete]);

  return (
    <img
      ref={planetRef}
      className={classNames("frame1__image", {
        [isPlanetDown]: initialAnimationComplete,
      })}
      src={Planet}
      alt="planet"
    />
  );
}
