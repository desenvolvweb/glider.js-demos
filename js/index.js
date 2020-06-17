// Simple carousel
// =============================================================================

const $simpleCarousel = document.querySelector(".js-carousel--simple");

new Glider($simpleCarousel, {
  slidesToShow: 2,
  slidesToScroll: 2,
  draggable: true,
  dots: ".js-carousel--simple-dots",
  arrows: {
    prev: ".js-carousel--simple-prev",
    next: ".js-carousel--simple-next",
  },
  // scrollLock: true,
  // scrollLockDelay: 100,
  // rewind: true,
});

// Responsive carousel
// =============================================================================

const $responsiveCarousel = document.querySelector(".js-carousel--responsive");

new Glider($responsiveCarousel, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  duration: 0.25,
  dots: ".js-carousel--responsive-dots",
  arrows: {
    prev: ".js-carousel--responsive-prev",
    next: ".js-carousel--responsive-next",
  },
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
});

// Thumbs carousel
// =============================================================================

const $thumbsCarousel = document.querySelector(".js-carousel--thumbs");
const $thumbs = document.querySelectorAll("[data-carousel-index]");
const thumbsGlider = new Glider($thumbsCarousel, {
  slidesToShow: 1,
  slidesToScroll: 1,
});

$thumbs.forEach($t => {
  $t.addEventListener("click", e => {
    const index = e.target.getAttribute("data-carousel-index");

    thumbsGlider.scrollItem(index, true);
  });
});
