import React, { createContext, useRef, useState } from "react";

const Context = createContext(); // Створення кнтексту

export const ContextProvider = ({ children }) => {
  const arrowRefs = useRef(null); // Відстежуємо стрілку
  const sectionRefs = useRef(null); // Після натиску  на стрілку прокручуємо до цієї секції
  const planetRef = useRef(null); //Відстеження планети
  const animItemsRef = useRef([]); // Анімовані Елементи масив

  const [isPlanetDown, setIsPlanetDown] = useState(false); // Керування анімацією планети bulian значенням
  const [initialAnimationComplete, setInitialAnimationComplete] =
    useState(false); // керування першою анімацією
  const [bodyLoc, setBodyLoc] = useState(false); //Керування прокручування сторінки
  const [menuActive, setMenuActive] = useState(false); // Керування BurgerMenu

  //Передаємо контекст
  const contextItems = {
    initialAnimationComplete,
    setInitialAnimationComplete,
    isPlanetDown,
    setIsPlanetDown,
    animItemsRef,
    planetRef,
    sectionRefs,
    arrowRefs,
    bodyLoc,
    setBodyLoc,
    menuActive,
    setMenuActive,
  };
  return (
    <Context.Provider value={contextItems}>
      {children}
      {/* Вказуємо обовязково щоб контет відображався в середені */}
    </Context.Provider>
  );
};

export default Context;
