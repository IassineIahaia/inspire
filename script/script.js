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
          gutter: 0,
        },
        1440: {
          items: 4,
        },
      },
  });

 
});

 // activity-slider
document.addEventListener('DOMContentLoaded', () => {
 var slider = tns({
  container: '.activity-slider',
  items: 1,
  gutter: 24,
  mouseDrag: true,
  controls: true,
  nav: false,
  controlsContainer: '.tns-controls-main', 
  autoHeight: true,
  autoplay: false,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  speed: 500,
  responsive: {
    0: {
      items: 1,
    },
    1024: {
      items: 2,
      gutter: 0,
    },
  },
  onInit: addCustomPagination
});
function addCustomPagination(info) {
  const paginationContainer = document.querySelector('.pagination');
  paginationContainer.innerHTML = ''; 
  const slidesCount = info.slideCount;
  for (let i = 0; i < slidesCount; i++) {
    const button = document.createElement('button');
    button.classList.add('pagination-button');
    button.dataset.index = i;
    button.textContent = i + 1;

    button.addEventListener('click', () => {
      slider.goTo(i);
    });

    paginationContainer.appendChild(button);
  }

  updatePaginationActive();

  slider.events.on('indexChanged', updatePaginationActive);
}
function updatePaginationActive() {
  const activeIndex = slider.getInfo().displayIndex - 1; 0
  const buttons = document.querySelectorAll('.pagination-button');

  buttons.forEach((btn, index) => {
    if (index === activeIndex) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

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
    controlsContainer: '.tns-controls-main', 
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
        items: 2,
        gutter: 0,
      },
      1440: {
        items: 2,
        gutter: 0,
      },
    },
    onInit: addCustomPagination
  });

  function addCustomPagination(info) {
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = ''; 
    const slidesCount = info.slideCount;
    for (let i = 0; i < slidesCount; i++) {
      const button = document.createElement('button');
      button.classList.add('pagination-button');
      button.dataset.index = i;
      button.textContent = i + 1;

      button.addEventListener('click', () => {
        slider.goTo(i);
      });

      paginationContainer.appendChild(button);
    }

    updatePaginationActive();

    slider.events.on('indexChanged', updatePaginationActive);
  }
  function updatePaginationActive() {
    const activeIndex = slider.getInfo().displayIndex - 1; 0
    const buttons = document.querySelectorAll('.pagination-button');

    buttons.forEach((btn, index) => {
      if (index === activeIndex) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
});

// accordion

const accordionItems = document.querySelectorAll(".accordion-item");
accordionItems.forEach(accordionItem => {
  accordionItem.addEventListener("click", () => {
    accordionItem.classList.toggle("accordion-active")
  });
});
