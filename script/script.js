document.addEventListener('DOMContentLoaded', () => {
  var slider = tns({
    container: '.tiny-slider',
      items: 1,
      gutter: 24,
      mouseDrag: true,
      controls: true,
      nav: false,
      autoHeight: true,
      autoplay: true,
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
        },
        1440: {
          items: 4,
        },
      },
  });
});
