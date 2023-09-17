const accordionHeaderDOM = document.getElementsByClassName('accordion-header');

export function accordion() {
   for (let i = 0; i < accordionHeaderDOM.length; i++) {
      accordionHeaderDOM[i].addEventListener('click', () => {
         accordionHeaderDOM[i].classList.toggle('active');
      })
   }

}





