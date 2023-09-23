const btn = document.querySelector('#my-button');
const container = document.querySelector('.container-btn');

function hiddenButton() {
 btn.style.display = "none";
  function showButton(){
    btn.style.display = "block";
  } setTimeout(showButton, 1000)
}

container.onclick = hiddenButton;
btn.onclick = hiddenButton;

container.onmouseenter = hiddenButton;
btn.onmouseenter = hiddenButton;