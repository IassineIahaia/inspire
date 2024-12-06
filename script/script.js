document.addEventListener('DOMContentLoaded', () => {
  var slider = tns({
    container: '.my-slider',
      items: 1,
      gutter: 30,
      mouseDrag: true,
      controls: true,
      nav: false,
      autoHeight: true,
      autoplay: true,
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
      },
  });
});
