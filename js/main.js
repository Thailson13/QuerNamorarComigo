const btn = document.querySelector('#my-button');
const container = document.querySelector('.container-btn');

function randomPosition() {
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const btnWidth = btn.clientWidth;
  const btnHeight = btn.clientHeight;

  // Gera duas coordenadas aleatórias dentro do contêiner
  const randomX = Math.floor(Math.random() * 500);
  const randomY = Math.floor(Math.random() * 500);

  // Define a posição do botão para as coordenadas aleatórias
  btn.style.left = `${randomX}px`;
  btn.style.top = `${randomY}px`;
}

// Chama a função randomPosition() quando o mouse entra no botão
container.onclick = randomPosition;
btn.onclick = randomPosition;

container.onmouseenter = randomPosition;
btn.onmouseenter = randomPosition;