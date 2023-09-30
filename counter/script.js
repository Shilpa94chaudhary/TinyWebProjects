const play = document.getElementById('play');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');
const inputElement = document.getElementById('time');

reset.addEventListener('click', () => {
  inputElement.value = '';
});
