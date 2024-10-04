import { useContext } from "react";

import Rectangle from "../../assets/img/Rectangle.jpg";
import Context from "../../components/context/context";
import useAnimationOnScroll from "../../hooks/useAnimationOnScroll";
import "./frame2.css";
export default function Frame2() {
  const animItemsRef = useAnimationOnScroll();
  const { sectionRefs } = useContext(Context);
  return (
    <section
      className="frame2 frame _anim-items"
      ref={(el) => {
        sectionRefs.current = el;
        animItemsRef.current[0] = el;
      }}
    >
      <div className="frame2__twinkling twinkling" />
      <div className="frame2__box-content frame2__container">
        <div className=" frame2__content-box">
          <div className="frame2__content-box-title">Qualification</div>
          <div className="frame2__content-box-subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim
            aliquam aperiam necessitatibus rerum sit! Vero qui excepturi
            recusandae, perferendis unde nam sint modi eligendi et nisi odit
            nobis nostrum! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sint enim aliquam aperiam necessitatibus rerum sit! Vero qui
            excepturi recusandae, perferendis unde nam sint modi eligendi et
            nisi odit nobis nostrum!
          </div>
        </div>
        <div className="frame2__img-box">
          <img src={Rectangle} alt="rectangle" className="frame2__img" />
        </div>
      </div>
    </section>
  );
}
