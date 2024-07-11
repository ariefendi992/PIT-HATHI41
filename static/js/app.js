const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menutBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menutBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

const specialTourImageArr = [
  "/static/img/Trip 1.png",
  "/static/img/Trip 2.png",
  "/static/img/Trip 3.png",
];

const specialTourImage = document.querySelector(".special__image img");

function updateSwiperImage(eventName, args) {
  if (eventName === "slideChangeTransitionStart") {
    const index = args && args[0].realIndex;
    specialTourImage.classList.remove("show");
    specialTourImage.classList.add("hide");
    specialTourImage.addEventListener(
      "animationend",
      (e) => {
        specialTourImage.src = specialTourImageArr[index];
        specialTourImage.classList.remove("hide");
        specialTourImage.classList.add("show");
      },
      {
        once: true,
      }
    );
  }
}

const swiper = new Swiper(".swiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },

  onAny(event, ...args) {
    updateSwiperImage(event, args);
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

AOS.init();
const officialCards = document.querySelectorAll(".official__card");
const fieldTripCards = document.querySelectorAll(".fieldtrip__card");
const transportCards = document.querySelectorAll(".transport__card");

function removeAttribut(element, attr) {
  if (element.length > 1) {
    element.forEach((item) => {
      item.removeAttribute(attr);
    });
  }
}

function setAttributeAos(element) {
  const two = ["fade-right", "fade-up"];
  const three = ["fade-right", "fade-up", "fade-left"];
  const four = ["fade-right", "fade-up", "fade-down", "fade-left"];
  const five = [
    "fade-right",
    "fade-up",
    "fade-down",
    "fade-left",
    "fade-right",
  ];
  if (element.length === 2) {
    element.forEach((item, index) => {
      item.setAttribute("data-aos", two[index]);
    });
  } else if (element.length === 3) {
    element.forEach((item, index) => {
      item.setAttribute("data-aos", three[index]);
    });
  } else if (element.length === 4) {
    element.forEach((item, index) => {
      item.setAttribute("data-aos", four[index]);
    });
  } else if (element.length === 5) {
    element.forEach((item, index) => {
      item.setAttribute("data-aos", five[index]);
    });
  }
}

window.addEventListener("scroll", (event) => {
  if (window.innerWidth > 1200) {
    removeAttribut(officialCards, "data-aos");
    removeAttribut(fieldTripCards, "data-aos");
    removeAttribut(transportCards, "data-aos");
    setAttributeAos(officialCards);
    setAttributeAos(fieldTripCards);
    setAttributeAos(transportCards);
  } else if (window.innerWidth > 768) {
    removeAttribut(officialCards, "data-aos");
    removeAttribut(fieldTripCards, "data-aos");
    removeAttribut(transportCards, "data-aos");
    setAttributeAos(officialCards);
    setAttributeAos(fieldTripCards);
    setAttributeAos(fieldTripCards);
    setAttributeAos(transportCards);
  } else if (window.innerWidth >= 576) {
    removeAttribut(officialCards, "data-aos");
    removeAttribut(fieldTripCards, "data-aos");
    removeAttribut(transportCards, "data-aos");
    setAttributeAos(officialCards);
    setAttributeAos(fieldTripCards);
    setAttributeAos(fieldTripCards);
    setAttributeAos(transportCards);
  }
});

const tabs = document.querySelectorAll(".tab__btn");
const allCardContent = document.querySelectorAll(".card__content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    allCardContent.forEach((content) => {
      content.classList.remove("active");
    });
    allCardContent[index].classList.add("active");
  });
});
// const scrollRevealOption = {
//   distance: "30px",
//   origin: "top",
//   duration: 2000,
//   interval: 200,
//   reset: true,
// };

// ScrollReveal().reveal(".header__container .first-image", {
//   ...scrollRevealOption,
//   // origin: "left",
// });

// ScrollReveal().reveal(".header__container .second-image", {
//   ...scrollRevealOption,
//   // origin: "right",
//   // delay: 500,
// });

// ScrollReveal().reveal(".header__container h2, .header__container h1", {
//   ...scrollRevealOption,
//   // origin: "bottom",
//   delay: 1000,
// });

// ScrollReveal().reveal(".special__image img", {
//   ...scrollRevealOption,
//   origin: "left",
//   delay: 500,
// });
// ScrollReveal().reveal(".special__content .section__subheader", {
//   ...scrollRevealOption,
//   origin: "bottom",
//   delay: 1000,
// });
// ScrollReveal().reveal(
//   ".special__content .section__header, .special__content h5",
//   {
//     ...scrollRevealOption,
//     origin: "bottom",
//     delay: 1500,
//   }
// );
// ScrollReveal().reveal(
//   ".special__card .section__description, .special-swiper-btns",
//   {
//     ...scrollRevealOption,
//     origin: "bottom",
//     delay: 2000,
//   }
// );

// const transportCard = document.getElementById("tansport");
// transportCard.addEventListener("mouseover", (e) => {
//   transportCard.removeAttribute("data-aos");
//   transportCard.setAttribute('data-aos','')
//   e.preventDefault();
// });
