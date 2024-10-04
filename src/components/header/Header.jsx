import { useContext } from "react";

import Context from "../context/context";

import BurgerMenu from "./burgerMenu";
import HeaderLink from "./headerLink";
import "./header.css";

export default function Header() {
  const { menuActive } = useContext(Context);
  return (
    <header className="header">
      <div className="header__container">
        <nav className={menuActive ? "header__nav _active" : "header__nav"}>
          <ul className="header__items">
            <HeaderLink text={"Start"} />
            <HeaderLink text={"Space"} />
            <HeaderLink text={" Planets"} />
            <HeaderLink text={"Us"} />
            <HeaderLink text={"Missions"} />
          </ul>
        </nav>
        <BurgerMenu />
      </div>
    </header>
  );
}
