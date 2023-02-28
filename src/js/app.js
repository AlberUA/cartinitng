document.addEventListener("DOMContentLoaded", function () {
  var eventCalllback = function (e) {
    var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "+1 (___) ___-____",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");

    if (clearVal !== "false" && e.type === "blur") {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = "";
        return;
      }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });
  };

  var phone_inputs = document.querySelectorAll("[data-phone-pattern]");
  for (let elem of phone_inputs) {
    for (let ev of ["input", "blur", "focus"]) {
      elem.addEventListener(ev, eventCalllback);
    }
  }
});

const swiperTop = new Swiper(".top__slider", {
  slidesPerView: 1,
  effect: "fade",
  autoplay: {
    delay: 7000,
  },
  loop: true,
  fadeEffect: {
    crossFade: false,
  },
  pagination: {
    el: ".top__pagination",
    type: "bullets",
    clickable: true,
  },
  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  // },
});
const swiperTint = new Swiper(".tint__slider", {
  slidesPerView: 1,
  effect: "fade",
  fadeEffect: {
    crossFade: false,
  },
  autoplay: {
    delay: 7000,
  },
  pagination: {
    el: ".tint__pagination",
    type: "bullets",
    clickable: true,
  },
  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  // },
});
const swiperGallery = new Swiper(".gallery__slider", {
  slidesPerView: 5.8,
  centeredSlides: true,
  initialSlide: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: ".gallery__bar-btn-next",
    prevEl: ".gallery__bar-btn-prev",
  },

  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  // },
});
