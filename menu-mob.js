function toggleTabContent () {
  if ($(window).width() < 1023) {
    $(".objective__tab-content-part:first").show();
    $(".objective__tab-content-part:not(:first)").hide();
    $(".tab__button:first").addClass("active");
    $(".tab__button:not(:first)").removeClass("active");
    $(".tab__button").click(function() {
      $(".tab__button").removeClass("active");
      const tabId = $(this).data("tab");
      $(".objective__tab-content-part").hide();
      $("#" + tabId).show();
      $(this).addClass("active");
    });
  } else {
    $(".objective__tab-content-part").show();
    $(".tab__button").click(function() {
      $(".objective__tab-content-part").show();
      $(".tab__button").removeClass("active");
    });
  }
}

$(window).on('load', function() {
  const contentHeight = $('body').height();
  const windowHeight = $(window).height();
  const footer = $('footer');

  if (contentHeight < windowHeight) {
    footer.css({
      'position': 'fixed',
      'bottom': '0',
      'left': '0',
      'right': '0',
    });
  } else {
    footer.css('position', 'static');
  }
});



$(document).ready(function () {
  toggleTabContent();

  $(".menu__mobile-icon").on("click", function () {
    $(".header__menu-mobile-container").toggleClass("active");
  });

  $(window).on('resize', function() {
    toggleTabContent();
  });

  const chatInput = document.querySelector('.chat-input');

  if (chatInput) {
    chatInput.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
      this.scrollTop = 0;
    });
  }

  const openModalButtons = document.querySelectorAll('.open-modal');
  const closeModalButtons = document.querySelectorAll('.close-modal');
  const openFilterButtons = document.querySelectorAll('.open-filter');
  const openDeleteConfirmationButtons = document.querySelectorAll('.open-delete-confirmation');
  const openCardMasterButtons = document.querySelectorAll('.modal-master-card');
  const modalWindow = document.querySelector('.modal');
  const modalContent = document.querySelectorAll('.content');

  function chooseContent (contentClassName) {
    modalContent.forEach(content => {
      content.classList.remove('visible');
    })
    modalWindow.classList.add('visible');

    const neededConentet = document.querySelector(`.${contentClassName}`);

    neededConentet.classList.add('visible');
  }

  if (openModalButtons && modalWindow && openFilterButtons) {
    openModalButtons.forEach(openModalButton => {
      openModalButton.addEventListener('click', function() {
        chooseContent('modal-info__content');
      })
    })

    openFilterButtons.forEach(openFilterButton => {
      openFilterButton.addEventListener('click', function() {
        chooseContent('filter__content');
      })
    })

    openCardMasterButtons.forEach(openCardMasterButton => {
        openCardMasterButton.addEventListener('click', function() {
        chooseContent('card-master__content');
      })
    })

    openDeleteConfirmationButtons.forEach(openDeleteConfirmationButton => {
      openDeleteConfirmationButton.addEventListener('click', function(event) {
        event.preventDefault()
        chooseContent('delete-confirmation__content');
      })
    })
  
    modalWindow.addEventListener('click', function(event) {
      const isClickInsideModal = Array.from(modalContent).some(content => content.contains(event.target));
    
      if (!isClickInsideModal) {
        modalWindow.classList.remove('visible');
      }
    });

    closeModalButtons.forEach(closeModalButton => {
      closeModalButton.addEventListener('click', function() {
        modalWindow.classList.remove('visible');
      })
    })
  }

  const accordionButtons = document.querySelectorAll('.services__item-button');

  if (accordionButtons) {
    accordionButtons.forEach(accordionButton => {
      accordionButton.addEventListener('click', function() {
        const accordionContent = accordionButton.nextElementSibling;
  
        accordionButton.classList.toggle('visible');
        accordionContent.classList.toggle('visible');
  
        if (accordionContent.classList.contains('visible')) {
          accordionContent.style.height = `${ accordionContent.scrollHeight}px`;
        } else {
          accordionContent.style.height = '0';
        }
      });
    });
  }

  const personalAccountCertificatePhotos = document.querySelectorAll('.account__edit-row-item-photos');

  if (personalAccountCertificatePhotos) {
    personalAccountCertificatePhotos.forEach(personalAccountCertificatePhoto => {
      const numberOfChildren = personalAccountCertificatePhoto.children.length;

      if (numberOfChildren === 0) {
        personalAccountCertificatePhoto.style.marginRight = 0;
      } else {
        personalAccountCertificatePhoto.style.marginRight = `${20}px`;
      }
    })
  }

  const moreNewsButton = document.querySelector('.more__news');
  const newsContent = document.querySelector('.news__container');
  const newsContentHeight = window.innerWidth <= 500
    ? '1345px'
    : '1560px';

  if (moreNewsButton && newsContent) {
    moreNewsButton.addEventListener('click', () => {
      newsContent.classList.toggle('visible');

      const isHidden = newsContent.classList.contains('visible');

      if (!isHidden) {
        moreNewsButton.textContent = 'Більше новин';
        newsContent.style.maxHeight = newsContentHeight;
      } else {
        moreNewsButton.textContent = 'Менше новин';
        newsContent.style.maxHeight = `${newsContent.scrollHeight}px`;
      }
    })
  }

  if (window.innerWidth < 768) {
    $('.another__news-content-wrapper').slick({
      infinite: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  }
});


