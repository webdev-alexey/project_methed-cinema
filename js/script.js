const burgerBtn = document.querySelector(".js-burger-btn");
const navigation = document.querySelector(".js-navigation");
const navigationClose = document.querySelector(".js-navigation-close");

burgerBtn.addEventListener("click", () => {
  navigation.style.right = "0";
});

navigationClose.addEventListener("click", () => {
  navigation.style.right = "";
});
