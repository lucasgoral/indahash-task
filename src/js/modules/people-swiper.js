import Swiper from 'swiper';
class peopleSwiper{

constructor() {
  this.peopleSlider = null;

}
init() {
this.peopleSlider = document.querySelector('[data-people-slider]');
if(this.peopleSlider) {
  this.initBindings();
  this.initSwiper();
}
}

initBindings() {
  this.peopleSlider.querySelector('[data-close]').addEventListener('click', ()=>{
    alert('clicked')
  })
}

initSwiper() {
  const mySwiper = new Swiper ('.people-slider__container', {
    // Optional parameters
  
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar

  })
}

}

export default new peopleSwiper();