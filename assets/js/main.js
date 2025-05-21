$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  nav: true,
  autoplay: true,
  smartSpeed: 1000,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});


