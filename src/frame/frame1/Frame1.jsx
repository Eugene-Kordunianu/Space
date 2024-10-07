import Arrow from "../../components/arrow";
import PlanetImage from "../../components/planetImage";
import "./frame1.css";
export default function Frame1() {
  return (
    <>
      <section className="frame1 frame">
        <div className="frame1__twinkling twinkling" />
        <div className="frame1__box box-frame1 frame1__container">
          <div className="frame1__content">A trip to space</div>
          <PlanetImage />
          <Arrow />
        </div>
      </section>
    </>
  );
}
