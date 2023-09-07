import { useEffect } from 'react';

const ArrowLinks = () => {
   useEffect(() => {
      const arrowLinks = document.querySelectorAll('.arrow[data-goto]');

      if (arrowLinks.length > 0) {
         arrowLinks.forEach(arrowLink => {
            arrowLink.addEventListener('click', onArrowClick);

            return () => {
               arrowLink.removeEventListener('click', onArrowClick);
            };
         });
      }

      function onArrowClick(e) {
         const arrowLink = e.target;
         if (arrowLink.dataset.goto && document.querySelector(arrowLink.dataset.goto)) {
            const gotoBlock = document.querySelector(arrowLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
               top: gotoBlockValue,
               behavior: 'smooth',
            });
         }
      }
   }, []);

   return null; // React компонент повинен повертати щось, але для цього прикладу ми не потребуємо жодного відображення.
};

export default ArrowLinks;