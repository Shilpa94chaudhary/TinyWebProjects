var boxToBeClicked = document.getElementById("box");
var clickCount = 0;
var resetButton = document.getElementById("reset");
var showClickCount = document.getElementById("count");

showClickCount.innerHTML = `Box clicked ${clickCount} times`;

boxToBeClicked.addEventListener("click", function () {
  clickCount++;
  showClickCount.innerHTML = `Box clicked ${clickCount} times`;
});

resetButton.addEventListener("click", function () {
  clickCount = 0;
  showClickCount.innerHTML = `Box clicked ${clickCount} times`;
});
