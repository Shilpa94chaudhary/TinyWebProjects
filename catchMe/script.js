const image = document.getElementById('dynamicImg');

function getRandomPosition() {
  const maxX = 800;
  const maxY = 500;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  return { x: randomX, y: randomY };
}

function moveBox() {
  const newPosi = getRandomPosition();
  image.style.transform = `translate(${newPosi.x}px, ${newPosi.y}px)`;
}

image.addEventListener('mouseover', moveBox);
moveBox();
