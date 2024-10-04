import { useContext, useEffect } from "react";

import Context from "../components/context/context";

export default function useAnimationOnScroll() {
  const { animItemsRef } = useContext(Context); //Масив елементів

  useEffect(() => {
    const handleScroll = () => {
      animItemsRef.current.forEach((animItem) => {
        const animItemRect = animItem.getBoundingClientRect(); //повертає обєкт значень Х Y top... позицію відносно вікна браузера
        const animItemPoint = window.innerHeight / 4; // Визначаєм висоту вікна ділемо на 4 25%
        if (
          animItemRect.top < window.innerHeight - animItemPoint &&
          animItemRect.bottom > 0
        ) {
          animItem.classList.add("_active");
        } else {
          animItem.classList.remove("_active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animItemsRef]);

  return animItemsRef;
}
