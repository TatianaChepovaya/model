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

  chatInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
    this.scrollTop = 0;
  });
});


