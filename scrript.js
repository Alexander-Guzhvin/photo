let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null){
  let delay = 500;//задержка
  let body=document.querySelector("body");
  let menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", (e) => {
          iconMenu.classList.toggle("_active");
          menuBody.classList.toggle("_active");
  });
};
function menu_close(){
  let iconMenu = document.querySelector(".icon-menu");
  let menuBody = document.querySelector(".menu__body");
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
}


const swiper = new Swiper('.mySwiper-reviews', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



const swiper2 = new Swiper('.mySwiper-our-clients', {
  centeredSlides: true,
  slidesPerView:1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {// настройки для разных разрешений
    768: {
      slidesPerView:6,
    }
}
});








let thumbnails = document.getElementsByClassName("thumbnail");
let overlay = document.getElementById("overlay");
let overlayClose = document.getElementById("overlay-close");
let overlayImage = document.getElementById("overlay-image");

for (let i = 0; i < thumbnails.length; i++) { 
//    console.log(thumbnails[i].src)
  thumbnails[i].addEventListener("click", openOverlay)
};


overlayClose.addEventListener("click", closeOverlay);

overlay.addEventListener("keydown", overlay);
overlayClose.addEventListener("click", closeOverlay);

function closeOverlay(event) {
  if (event.keyCode !== 27) {
    return;
  }
    overlay.classList.toggle("open");
  }


function closeOverlay(event){
  overlay.classList.toggle("open")
}

function openOverlay(event){
  overlay.classList.toggle("open");
  overlayImage.src = event.target.src;
}