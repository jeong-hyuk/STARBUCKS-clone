//main header
//search

//div 요소
const searchEl = document.querySelector(".search");
//input 요소
const searchInputEl = searchEl.querySelector("input"); //범위 좁혀서 이런식으로 한다

let isFocused = false;
searchEl.addEventListener("click", function () {
  if (isFocused) {
    searchInputEl.blur();
    isFocused = false;
  } else {
    searchInputEl.focus();
    isFocused = true;
  }
});

searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합 검색");
});

searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});
