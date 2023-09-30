const ball = document.querySelector('.ball');

function setBallPosition(top, left) {
  ball.style.top = top + 'px';
  ball.style.left = left + 'px';
}
console.log(ball.getBoundingClientRect());

function handleKeyPress(event) {
  const step = 50;
  const ballCoordinates = ball.getBoundingClientRect();
  const top = ballCoordinates.top;
  const left = ballCoordinates.left;

  switch (event.key) {
    case 'w':
      if (top >= 50) {
        setBallPosition(top - step, left);
      }
      break;
    case 'a':
      if (left >= 50) {
        setBallPosition(top, left - step);
      }
      break;
    case 's':
      setBallPosition(top + step, left);
      break;
    case 'd':
      setBallPosition(top, left + step);
      break;
  }
}

document.addEventListener('keypress', handleKeyPress);
