//main header
//search

//div 요소
const searchEl = document.querySelector(".search");
//input 요소
const searchInputEl = searchEl.querySelector("input"); //범위 좁혀서 이런식으로 한다

const searchIconEl = searchEl.querySelector("span");

// 외부 요소를 클릭하여 포커스 아웃 된 경우를 처리하기 위한 전역 변수
let isNotSearchClick = false;
// 돋보기 아이콘이 아닌 외부 요소를 클릭하였는지를 확인 하기 위하여
// 문서에 이벤트 리스너 걸기
document.addEventListener("click", function (e) {
  // 요소를 클릭한게 아니라면 --> 외부를 클릭하여 포커스 아웃이 되었다면, 전역 변수를 true;
  if (!e.target.classList.contains("material-symbols-outlined")) {
    isNotSearchClick = true;
    // 요소를 클릭했다면 --> 전역 변수를 false;
  } else {
    isNotSearchClick = false;
  }
});

searchIconEl.addEventListener("click", function () {
  // 클릭이 한번도 안된 상태라서 active 클래스가 없다면?
  // active 클래스 부여 및 focus 보내기, placeholder 지정
  if (!searchEl.classList.contains("active")) {
    searchEl.classList.add("active");
    searchInputEl.focus();
    searchInputEl.setAttribute("placeholder", "통합 검색");
    // 외부 요소 클릭으로 포커스가 아웃 된 상태에서, 다시 돋보기를 누르면
    // active 클래스 부여 및 focus 보내기, placeholder 지정
  } else if (isNotSearchClick) {
    searchInputEl.focus();
    searchInputEl.setAttribute("placeholder", "통합 검색");
    isNotSearchClick = false;
    // active 클래스와, focus 가 모두 있는 상태에서 클릭을 하면 active 클래스를 제거하여
    // 토글 효과
  } else {
    searchEl.classList.remove("active");
  }
});
// 포커스 아웃이 되면 일단 placeholder 초기화
searchInputEl.addEventListener("blur", function (e) {
  searchInputEl.setAttribute("placeholder", "");
});

searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합 검색");
});

searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});

//swiper
//swiper notice
const swiperNotice = new Swiper(
  ".notice .notice-line .inner .inner__left .swiper",
  {
    direction: "vertical",
    loop: true,
    autoplay: true,
  }
);

//swiper promotion
const swiperPromotion = new Swiper(".notice .promotion .swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

//AutoPlay 컨트롤
function controlAutoPlay() {
  if (swiperPromotion.autoplay.running == false) {
    swiperPromotion.autoplay.start();
  } else {
    swiperPromotion.autoplay.stop();
  }
}

//toggle promotion
const promotionSection = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion");
promotionToggleBtn.addEventListener("click", function () {
  if (promotionSection.classList.contains("hide")) {
    promotionSection.classList.remove("hide");
    promotionToggleBtn.classList.add("show");
  } else {
    promotionSection.classList.add("hide");
    promotionToggleBtn.classList.remove("show");
  }
});

//animation part
window.onload = function () {
  const visualSection = document.querySelector(".visual");
  visualSection.classList.add("animate");
};

//animation scroll
//elsalvador
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 100) {
    const elsalvadorSection = document.querySelector(".elsalvador");
    elsalvadorSection.classList.add("animate");
  }

  if (window.scrollY > 300) {
    const ethiopiaSection = document.querySelector(".ethiopia");
    ethiopiaSection.classList.add("animate");
  }

  if (window.scrollY > 900) {
    const favoriteSection = document.querySelector(".favorite");
    favoriteSection.classList.add("animate");
  }

  if (window.scrollY > 1500) {
    const magazineSection = document.querySelector(".magazine");
    magazineSection.classList.add("animate");
  }

  if (window.scrollY > 1500) {
    const storeSection = document.querySelector(".find__store");
    storeSection.classList.add("animate");
  }
});
