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
  const openCardMasterButtons = document.querySelectorAll('.modal-master-card');
  const modalWindow = document.querySelector('.modal');
  const modalContent = document.querySelectorAll('.content');

  function hideContent () {
    modalContent.forEach(content => {
      content.classList.remove('visible');
    })
  }
  function chooseContent (contentClassName) {
    const neededConentet = document.querySelector(`.${contentClassName}`);
    neededConentet.classList.add('visible');
  }

  if (openModalButtons && modalWindow && openFilterButtons) {
    openModalButtons.forEach(openModalButton => {
      openModalButton.addEventListener('click', function() {
        hideContent();
        modalWindow.classList.add('visible');
        chooseContent('modal-info__content');
      })
    })

    openFilterButtons.forEach(openFilterButton => {
      openFilterButton.addEventListener('click', function() {
        hideContent();
        modalWindow.classList.add('visible');
        chooseContent('filter__content');
      })
    })

    openCardMasterButtons.forEach(openCardMasterButton => {
        openCardMasterButton.addEventListener('click', function() {
        hideContent();
        modalWindow.classList.add('visible');
        chooseContent('card-master__content');
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

  


});


