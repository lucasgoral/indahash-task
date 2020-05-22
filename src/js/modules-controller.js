 import peopleSwiper from './modules/people-swiper';
 class modulesController{

  init() {
    console.log('Modules controller inited')

peopleSwiper.init();
  }
}

export default new modulesController();