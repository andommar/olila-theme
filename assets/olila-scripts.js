console.log('Hello loaded olila')

let myCustomSlider = document.querySelectorAll('.swiper');

for( i=0; i< myCustomSlider.length; i++ ) {
  
  myCustomSlider[i].classList.add('swiper-' + i);

  var slider = new Swiper('.swiper-' + i, {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination-'+i,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: 'swiper-button-next-'+i,
          prevEl: 'swiper-button-prev-'+i,
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });
};