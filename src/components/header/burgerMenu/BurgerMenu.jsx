import { useContext } from "react";

import Context from "../../context/context";
import "./burgerMenu.css";

export default function BurgerMenu() {
  const { menuActive, setMenuActive, setBodyLoc } = useContext(Context);

  function toggleBurgerActive() {
    if (menuActive) {
      setMenuActive(false);
      setBodyLoc(false);
    } else {
      setMenuActive(true);
      setBodyLoc(true);
    }
  }

  return (
    <div
      className={menuActive ? "header__menu-icon _active" : "header__menu-icon"}
      onClick={toggleBurgerActive}
    >
      <span></span>
    </div>
  );
}
