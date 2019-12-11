// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const scale = document.querySelector("#js-scale"),
  form = document.querySelector("#js-form"),
  range = form.querySelector("#js-range"),
  text = document.querySelector("#js-text"),
  scoring = document.querySelector("#js-scoring"),
  result = document.querySelector("#js-result"),
  button = document.querySelector("#js-playBtn");

let number = "";
let ranNumScale = "";

function init() {
  range.addEventListener("input", e => {
    const rangeValue = e.target.value;
    ranNumScale = rangeValue;
    scale.innerText = `${rangeValue}`;
  });
}
button.addEventListener("click", () => {
  let ranNum = Math.floor(Math.random() * ranNumScale);
  console.log(ranNum);
  scoring.innerText = `You chose: ${number}, Machine chose: ${ranNum}`;

  if (ranNum !== parseInt(number)) {
    result.innerText = `You lost!`;
  } else {
    result.innerText = `You Win`;
  }
});

text.addEventListener("input", e => {
  const guessNum = e.target.value;
  number = guessNum;
});

init();
