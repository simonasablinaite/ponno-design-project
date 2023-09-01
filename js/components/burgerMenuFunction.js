
const burgerMenuDOM = document.querySelector('.burger-menu');
const linksDOM = document.getElementById('links');

burgerMenuDOM.addEventListener('click', () => {

   console.log('veikia');
   function burgerMenuFunction() {
      if (linksDOM.style.display === 'block') {
         linksDOM.style.display = "none";
      } else {
         linksDOM.style.display = 'block'
      }
   }

   burgerMenuFunction();
})


