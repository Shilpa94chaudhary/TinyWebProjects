const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;
  // Console.log(currentActive);
  update();
});

prev.addEventListener('click', () => {
  currentActive--;
  // Console.log(currentActive);
  update();
});

function update() {
  // Update circle
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
  // Update progress bar state
  const actives = document.querySelectorAll('.active');
  // Console.log(actives.length, circles.length);
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
  // Set Prev and Next button state
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
