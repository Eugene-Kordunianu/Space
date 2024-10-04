import classNames from "classnames";
import React, { useContext } from "react";

import Frame1 from "../../frame/frame1";
import Frame2 from "../../frame/frame2";
import useScrollLogic from "../../hooks/useScrollLogic";
import Context from "../context/context";

export default function Main() {
  const { initialAnimationComplete, bodyLoc } = useContext(Context);
  useScrollLogic();
  return (
    <div
      className={classNames("wrapper", {
        _lock: bodyLoc || !initialAnimationComplete,
      })}
    >
      <main>
        <Frame1 />
        <Frame2 />
      </main>
    </div>
  );
}
