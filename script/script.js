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

document.addEventListener('DOMContentLoaded', () => {
  // Inicializa o Tiny Slider
  var slider = tns({
    container: '.tiny-slider-main',
    items: 1,
    gutter: 0,
    mouseDrag: true,
    controls: true,
    nav: false,
    autoHeight: true,
    autoplay: false,
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
    onInit: addCustomPagination // Chama a função para criar paginação
  });

  function addCustomPagination(info) {
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = ''; // Limpa qualquer conteúdo existente

    const slidesCount = info.slideCount;
    for (let i = 0; i < slidesCount; i++) {
      const button = document.createElement('button');
      button.classList.add('pagination-button');
      button.dataset.index = i;
      button.textContent = i + 1;

      // Adiciona evento de clique para cada botão de paginação
      button.addEventListener('click', () => {
        slider.goTo(i);
      });

      paginationContainer.appendChild(button);
    }

    // Atualiza o botão ativo ao alterar o slide
    slider.events.on('indexChanged', () => {
      const activeIndex = slider.getInfo().index;
      document.querySelectorAll('.pagination-button').forEach((btn, index) => {
        if (index === activeIndex) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    });

    // Define o primeiro botão como ativo
    paginationContainer.firstChild.classList.add('active');
  }
});
