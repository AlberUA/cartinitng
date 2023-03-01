const mobBtn = document.querySelector(".header__mob-btn-wrapper");
const mobTop = document.querySelector(".header__top");
mobBtn.addEventListener("click", () => {
  mobBtn.classList.toggle("header__mob-btn-wrapper--active");
  mobTop.classList.toggle("header__top--active");
});

document.addEventListener("click", function (event) {
  if (
    !event.target.matches(".header__top") &&
    !event.target.matches(".header__top--active") &&
    !event.target.matches(".header__mob-btn-wrapper") &&
    !event.target.matches(".header__mob-btn") &&
    !event.target.matches(".header__mob-btn-wrapper--active")
  ) {
    mobBtn.classList.remove("header__mob-btn-wrapper--active");
    mobTop.classList.remove("header__top--active");
  }
});

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
  fadeEffect: {
    crossFade: false,
  },
  pagination: {
    el: ".top__pagination",
    type: "bullets",
    clickable: true,
  },
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
});
const swiperGallery = new Swiper(".gallery__slider", {
  slidesPerView: 1.4,
  centeredSlides: true,
  initialSlide: 0,
  spaceBetween: 10,
  navigation: {
    nextEl: ".gallery__bar-btn-next",
    prevEl: ".gallery__bar-btn-prev",
  },

  breakpoints: {
    440: {
      slidesPerView: 1.8,
      spaceBetween: 24,
    },
    560: {
      slidesPerView: 2.2,
      spaceBetween: 24,
    },
    720: {
      slidesPerView: 3,
      spaceBetween: 24,
      initialSlide: 1
    },
    1010: {
      slidesPerView: 3.6,
      spaceBetween: 24,
      initialSlide: 1
    },
    1200: {
      slidesPerView: 5.1,
      spaceBetween: 24,
      initialSlide: 2
    },
    1345: {
      slidesPerView: 5.8,
      spaceBetween: 24,
      initialSlide: 2
    },
  },
});
