$(document).ready(function () {
  //Owl
  $('.hero-slider').owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      }
    }
  })


  $('.mid-slider').owlCarousel({
    loop: true,
    margin: 0,
    items: 2,
    dots: false,

    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      }
    }
  })

  $(document).ready(function () {
    $(".owl-carousel").owlCarousel();
  });


  $('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
  
  //mobile services
  $('.mob_slide').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
	pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 996,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  
  //mobile services
  $('.mob_Partner').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: false,
	pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 5
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 5
      }
    }]
  });



  $(document).ready(function () {
    $('.testimonial-slider').slick({
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 600,
      draggable: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  });


  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
	autoplay: false,
	arrows: false,
	navigation: false,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Animation on scroll
   */


});


AOS.init();
