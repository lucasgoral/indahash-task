import Swiper from 'swiper';
import focusLock from 'dom-focus-lock'
const bodyScrollLock = require('body-scroll-lock');
class peopleSwiper {

    constructor() {
        this.peopleSlider = null;
        this.peopleList = null;
        this.swiper = null;

    }
    init() {
        this.peopleSlider = document.querySelector('[data-people-slider]');
        this.peopleList = document.querySelector('[data-people-list]');
        if (this.peopleSlider && this.peopleList) {
            this.initBindings();
            this.initSwiper();
        }
    }

    initBindings() {
        this.peopleSlider.querySelector('[data-close]').addEventListener('click', () => {
            this.closeModal();
        })
        this.peopleList.querySelectorAll('[data-person]').forEach((element, index) => {
            element.addEventListener('click', () => {
                this.openModal(index + 1);

            })
        });

    }

    openModal(slide) {
        this.peopleSlider.classList.add('open')
        this.peopleSlider.tabIndex = "0"
        this.swiper.slideTo(slide, 0);
        bodyScrollLock.disableBodyScroll(this.peopleSlider);
        focusLock.on(this.peopleSlider);
    }
    closeModal() {
        this.peopleSlider.classList.remove('open')
        this.peopleSlider.tabIndex = "-1"
        bodyScrollLock.enableBodyScroll(this.peopleSlider);
        focusLock.off(this.peopleSlider);
    }

    initSwiper() {
        this.swiper = new Swiper('.people-slider__container', {
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
            keyboard: {
                enabled: true,
                onlyInViewport: true,
              },
        })
    }

}

export default new peopleSwiper();