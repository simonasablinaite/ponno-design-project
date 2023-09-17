
const burgerMenuDOM = document.querySelector('.burger-menu');
const linksDOM = document.getElementById('links');



export function burgerMenuFunction() {
   burgerMenuDOM.addEventListener('click', () => {
      {
         if (linksDOM.style.display === 'block') {
            linksDOM.style.display = "none";
         } else {
            linksDOM.style.display = 'block'
         }
      }

   })
}


