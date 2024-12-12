document.addEventListener('DOMContentLoaded', () => {
  var slider = tns({
    container: '.tiny-slider',
      items: 1,
      gutter: 0,
      mouseDrag: true,
      controls: true,
      nav: false,
      autoHeight: true,
      autoplay: false,
      controlsContainer: '.tns-controls', 
      autoplayButtonOutput: false,
      autoplayTimeout: 3000,
      speed: 500,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
          gutter: 24,
        },
        1440: {
          items: 4,
        },
      },
  });
});

// tiny-slider-main
document.addEventListener('DOMContentLoaded', () => {
  var slider = tns({
    container: '.tiny-slider-main',
    items: 1,
    gutter: 0,
    mouseDrag: true,
    controls: true,
    nav: false,
    autoHeight: true,
    autoplay: false,
    controlsContainer: '.tns-controls', 
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    speed: 500,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 2,
        gutter: 24,
      },
      1440: {
        items: 2,        
        gutter: 24,      
      },
    },
  });
});
