// Mobile menu - opening/closing from Menu button
const jsBtn = document.querySelector('.jsBtn');
jsBtn.addEventListener('click', toggleMenu);

const jsHide = document.querySelector('.jsHide');

function toggleMenu() {
    console.log('aloha');
    jsHide.classList.toggle('jsHide')
}

// Mobile menu - closing from green layer
const jsList = document.querySelector('.jsList');
jsList.addEventListener('click', hideMenu);

const closeMenu = document.querySelector('.jsList');

function hideMenu() {
    closeMenu.classList.toggle('jsHide')
}



// Information accordion at the product page
let unfold = document.getElementsByClassName("jsSpecsAccordion");
let i;


for (i = 0; i < unfold.length; i++) {
    unfold[i].addEventListener("click", function() {
      this.classList.toggle("active-accordion");
      let jsSpecsInfo = this.nextElementSibling;
      if (jsSpecsInfo.style.display === "block") {
          jsSpecsInfo.style.display = "none";
      } else {
          jsSpecsInfo.style.display = "block";
      }
    });
  }




// Carousel in home and product page for newsletter
function carouselNewsletter(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  
  parentSelector.insertAdjacentHTML('beforeend', clone);
  parentSelector.insertAdjacentHTML('beforeend', clone);
  
  setInterval(function () {
    firstElement.style.marginLeft = `-${i}px`;
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  }, 0);
}
 
window.addEventListener('load', carouselNewsletter('.jsCarouselNewsletter', .2))
  
