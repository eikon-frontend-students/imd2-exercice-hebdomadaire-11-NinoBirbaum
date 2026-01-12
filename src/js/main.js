var toggleBtn = document.querySelector(".button");
var heart = document.querySelector(".coeur");
var btnText = document.querySelector(".button-text");
var nombreLike = document.querySelector(".nb-like");

toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.toggle("active");
  heart.classList.toggle("active");
  btnText.classList.toggle("active");
  nombreLike.classList.toggle("active");
  nombreLike.textContent = "148";
});
