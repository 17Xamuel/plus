//price slider
let inputLeft = document.getElementById("input-slide-left");
let inputRight = document.getElementById("input-slide-right");

let thumbLeft = document.querySelector(".slider > .thumb.left");
let thumbRight = document.querySelector(".slider > .thumb.right");
let range = document.querySelector(".slider > .range");

//Prices
let maxPrice = 800000;
let higherPrice = document.getElementById("higher-p");
higherPrice.value = maxPrice;

inputLeft.addEventListener("input", () => {
  let _this = inputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max);
  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);
  let percent = ((_this.value - min) / (max - min)) * 100;
  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
  let lowerPrice = document.getElementById("lower-p");
  lowerPrice.value = parseInt((maxPrice / 100) * percent);
});
inputRight.addEventListener("input", () => {
  let _this = inputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max);
  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);
  let percent = ((_this.value - min) / (max - min)) * 100;
  thumbRight.style.right = 100 - percent + "%";
  range.style.right = 100 - percent + "%";
  higherPrice.value = parseInt((maxPrice / 100) * percent);
});
inputLeft.addEventListener("mouseover", () => {
  thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", () => {
  thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", () => {
  thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", () => {
  thumbLeft.classList.remove("active");
});
inputRight.addEventListener("mouseover", () => {
  thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", () => {
  thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", () => {
  thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", () => {
  thumbRight.classList.remove("active");
});
//price slider end
