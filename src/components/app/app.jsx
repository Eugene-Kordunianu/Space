import React, { useEffect, useState } from 'react';
import "./app.css";
import Planet from "../../img/gif/space-0.1s.gif";
import Rectangle from "../../img/Rectangle 1.jpg";
import ArrowLinks from "../arrow_links/ArrowLinks";

const App = () => {
   const [scroll, setScroll] = useState(true);
   const [isPlanetDown, setIsPlanetDown] = useState("img-space");
   let docum = document.documentElement;

   scroll ? docum.style.overflow = 'hidden' : docum.style.overflow = "auto";
   
   let scrollTimeOut = setTimeout(() => {
      setScroll(false);
      clearTimeout(scrollTimeOut)
   }, 6000)
   useEffect(() => {
      const animItems = document.querySelectorAll("._anim-items");
      const animOnScroll = () => {
         animItems.forEach((animItem) => {
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
               animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
               animItem.classList.add('_active');
               if (!scroll) {
                  setIsPlanetDown("img-space _planetDown")
               }
            } else {
               animItem.classList.remove('_active');
               if (!scroll) {
                  setIsPlanetDown("img-space _planetUp")
               }
            }
         });
      };
      const offset = (el) => {
         const rect = el.getBoundingClientRect();
         const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      };
      window.addEventListener("scroll", animOnScroll);
      // Очистка прослуховувача події після закінчення компонента
      return () => {
         window.removeEventListener("scroll", animOnScroll);
      };
   }, [isPlanetDown, scroll]); // Порожній масив залежностей вказує, що ефект буде виконуватись тільки один раз при монтажі компонента
   return (
      <>
         <header className="header">
            <nav className="header__nav">
               <ul className="header__items">
                  <li className="header__item">
                     <a className="header__link">
                        Start
                     </a>
                  </li>
                  <li className="header__item">
                     <a href="#" className="header__link">
                        Space
                     </a>
                  </li>
                  <li className="header__item">
                     <a href="#" className="header__link">
                        Planets
                     </a>
                  </li>
                  <li className="header__item">
                     <a href="#" className="header__link">
                        Us
                     </a>
                  </li>
                  <li className="header__item">
                     <a href="#" className="header__link">
                        Missions
                     </a>
                  </li>
               </ul>
            </nav>
         </header>
         <main>
            <section className="frame1 frame ">
               <div className="twinkling" />
               <div className="box-frame1">
                  <div className="frame1__contant ">A trip to space</div>
                  <img
                     className={isPlanetDown}
                     src={Planet}
                     alt="imge"
                  />
                  <div className="box-arrow 🔫">
                     <span data-goto=".box-frame2" className="arrow " />
                  </div>
               </div>
            </section>
            <section className="frame2 frame _anim-items">
               <div className="box-frame2">
                  <div className="twinkling" />
                  <div className="box__content">
                     <img
                        src={Rectangle}
                        alt="imge"
                        className="frame2-img"
                     />
                     <div className="frame2__contant">
                        <div className="f2__contant-title ">Qualification</div>
                        <div className="f2__contant-subtitle _anim-items">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                           viverra tempor, enim vulputate nunc interdum sit diam ultrices.
                           Sed erat volutpat curabitur ornare in facilisi ornare. Vitae
                           mollis sed feugiat ipsum condimentum eget magnis nulla at. Massa
                           semper massa quisque tincidunt cursus. Elementum aliquet sed
                           lectus facilisis massa in. Felis lectus egestas urna egestas arcu.
                           Quam quisque volutpat lacus, eget. Quis risus, rhoncus nisi a, sit
                           libero ut viverra. Magna quis hendrerit in cursus. Sed sed vitae
                           ullamcorper dignissim tristique. Imperdiet vulputate blandit eu
                           egestas massa a mauris libero. Mi turpis sagittis ac elit id
                           sollicitudin urna. Velit neque neque vitae ultrices sagittis
                           hendrerit in cursus. Sed egestas commodo mi sed. Aliquam at nunc,
                           vestibulum viverra ipsum. Libero scelerisque tortor pellentesque
                           ante ut sit nunc, vitae. ulla donec ultrices quis eu adipiscing
                           habitant.
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <footer />
         <ArrowLinks></ArrowLinks>
      </>
   )
}

export default App;