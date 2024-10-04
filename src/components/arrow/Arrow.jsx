import { useContext } from "react";

import Context from "../context/context";
import "./arrow.css";

export default function Arrow() {
  const { arrowRefs, sectionRefs } = useContext(Context);
  const handleArrowClick = () => {
    sectionRefs.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className=" frame1__arrow-box box-arrow">
      <span className="arrow" onClick={handleArrowClick} ref={arrowRefs} />
    </div>
  );
}
